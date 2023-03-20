<template>
  <div class="main">
    <van-nav-bar left-arrow @click-left="onClickLeft" :border="false">
      <template #title>
        <div class="nav-title">入库</div>
      </template>
      <template #left>
        <img
          src="../../static/back@2x.png"
          style="width: 24px; height: 24px"
          alt=""
        />
      </template>
    </van-nav-bar>
    <!-- 头部 -->
    <div class="top flex flex-between align-center">
      <div class="top-item">
        <van-search
          v-model="data.keyword"
          show-action
          placeholder="请输入搜索关键词"
          background="#ffffff"
          @search="onSearch"
        >
          <template #action>
            <div class="flex align-center">
                <img style="width:24upx;height:24upx;border-left: 1px solid #ccc;padding-left: 10px;line-height: 40px;" src="../../static/shaoma@2x.png" alt="">
            </div>
              </template>
        </van-search>
        <!-- <van-field
            v-model="data.keyword"
            label=""
            
            placeholder="请输入关键字搜索"
          >
         <template #left-icon>
            <img style="width:20upx;height:20upx" src="../../static/icon／24px／search@2x.png" alt="">
         </template>
         <template #right-icon>
            <img style="width:24upx;height:24upx;border-left: 1px solid #ccc;padding-left: 10px;margin-top: 5upx;" src="../../static/shaoma@2x.png" alt="">
         </template>
        </van-field> -->
      </div>
      <div class="top-item">
        <van-tabs
          v-model:active="data.active"
          type="card"
          background="#fff"
          color="#EE780C"
          title-inactive-color="#EE780C"
          title-active-color="#fff"
          :ellipsis="false"
        >
          <van-tab
            title-style="line-height:40px;height:40px"
            title="待完成（10）"
          ></van-tab>
          <van-tab
            title-style="line-height:40px;height:40px"
            title="已完成"
          ></van-tab>
        </van-tabs>
      </div>
      <div class="flex flex-center align-center top-item">
        <div>前一天</div>
        <div>3月8日</div>
        <div>后一天</div>
      </div>
    </div>
    <!-- 列表区域 -->
    <div style="height: 100%">
      <leftMenu />
      <div></div>
    </div>
  </div>
</template>
<script setup lang="ts">
//@ts-ignore
import leftMenu from "@/components/leftMenu";
import { reactive } from "vue";
const data = reactive({
  keyword: "",
  active: "",
});
const onClickLeft = () => {};
</script>

<style scoped lang="scss">
::v-deep .van-search__content{
    background: #fff!important;
}
::v-deep .van-tabs__wrap {
  height: 40px !important;
  .van-tabs__nav {
    width: 100% !important;
    height: 40px !important;
    margin: 0;
    .van-tab {
      padding: 0 20px;
      &:last-child {
        padding: 0 40px;
      }
    }
  }
}
.main {
  height: 100%;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #d8d8d8 linear-gradient(128deg, #f5a91d 0%, #ee780c 100%);
    div {
      //flex:1 0 30%
      height: 40px;
      line-height: 40px;
    }
    .top-item {
      border-radius: 6px;
      margin: 10px;
      overflow: hidden;
      background: #fff;
      /** line-height: 40upx;
            height: 40upx;**/
    }
  }
  .nav-title {
    font-size: 17px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 24px;
  }
}

::v-deep.van-nav-bar__content {
  background: #d8d8d8 linear-gradient(128deg, #f5a91d 0%, #ee780c 100%) !important;
}
</style>
