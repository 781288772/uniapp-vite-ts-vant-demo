// src/utils/http.js 中
import axios, { type AxiosResponse } from "axios";
import { UniAdapter } from "uniapp-axios-adapter";

const request = axios.create({
  baseURL: "https://nestapi.christina-blog.xyz/api",
  timeout: 10000,
  adapter: UniAdapter,
});

request.interceptors.request.use((config:any) => {
  //带上token
  config.headers["Authorization"] = "token";
  return config;
});

//@ts-ignore
request.interceptors.response.use((response) => {
  // 统一处理响应,返回Promise以便链式调用
  const { data } = response;
  if (response.status === 200) {
   
    if (data && data.code === 200) {
      return Promise.resolve(data);
    } else {
      return Promise.reject(data);
    }
  }else if(data.code==401){
    console.log('登录未授权')
  } 
  else {
    return Promise.reject(response);
  }
});

export default request;