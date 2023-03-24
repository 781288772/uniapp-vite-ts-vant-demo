// 具体业务代码文件中
import http from '@/utils/http' // 上一步封装axios的路径中

export const getUserList = ()=>{
    return http({
        url: '/user/list',
        method: 'get',
        params: {
          id: 123,
        }
      })
}
export const login = ()=>{
    return http({
        url: '/user/login',
        method: 'post',
        data:{
            username:'admin',
            password:'123456'
        }
      })
}


