<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">登录用户：{{  userList.username}}</text>
     
    </view>
    <div style="width:50px">{{ JSON.stringify(userList) }}</div>
  </view>
</template>

<!-- <script setup lang="ts">
import useStore from '@/store/index'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const store = useStore();
// const userStore = storeToRefs(store.user)
const title = ref('Hello')
</script> -->
<script>
import {getUserList,login} from "@/apis/user"
const {log} = console;

export default{
 data(){
  return {
    title:'vue2',
    userList:[],
  }
 },
 mounted(){
  login().then(res=>{
    log('res',res)
    this.userList = res.result;
  })
 }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
