<template>
  <div class="main">
    <van-nav-bar  left-arrow @click-left="onClickLeft">
      <template #title>
        <div class="nav-title">入库</div>
      </template>
    </van-nav-bar>
    <leftMenu />


  </div>
</template>
<script setup lang="ts">
import leftMenu from '@/components/leftMenu'
const onClickLeft = () => {};
</script>

<style  scoped lang="scss">
.main{
    height:100%;
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
