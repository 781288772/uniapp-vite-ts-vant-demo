<template>
  <div class="menu" v-show="!data.isUnfold">
    <div class="flex-d flex-center align-center">
      <div class="logo" @click="unfold">
        <img src="../static/icon／48px／user@2x.png" />
      </div>
      <!-- <div v-for="i in 20" :class="[data.menuIndex==i?'active':'']"  :key="i" class="font" @click="selectMenu(i)">A{{ i }}</div> -->
      <scroll-view scroll-y="true" style="height:800px" >
        <div class="flex-d flex-center align-center">
            <div v-for="i in 20" :class="[data.menuIndex==i?'active':'']"  :key="i" class="font" @click="selectMenu(i)">A{{ i }}</div>
        </div>
      </scroll-view>
    </div>
  </div>
  <div class="menu1" style="width: 185upx" v-show="data.isUnfold">
    <div class="flex-d flex-center align-center">
      <div class="logo1" @click="unfold">
        <img src="@/static/icon／48px／user@2x.png" />
        <img src="@/static/icon／48px／close@2x.png" alt="" />
      </div>
      <scroll-view scroll-y="true" style="height:800px" >
        <div class="flex-d flex-center align-center">
            <div v-for="i in 20" :class="[data.menuIndex==i?'active':'']"  :key="i" class="font1" @click="selectMenu(i)">A{{ i }}</div>
        </div>
      </scroll-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
const data = reactive({
  isUnfold: false,
  menuIndex:-1,
});
const unfold = () => {
  data.isUnfold = !data.isUnfold;
};
const selectMenu = (index:number)=>{
    data.menuIndex = index;
}
</script>

<style scoped lang="scss">
.menu1 {
  padding: 15upx;
  height: 100%;
  background: #f5a21d;
  .font1 {
    width: 100%;
    height: 44upx;
    background: #ffffff;
    border-radius: 22px;
    margin-top: 20upx;
    padding: 5upx 20upx;
    line-height: 44upx;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    letter-spacing: 1px;
    box-sizing: border-box;
  }
  .logo1 {
    width: 100%;
    height: 44upx;
    display: flex;
    justify-content: space-between;
    img {
      width: 44upx;
      height: 44upx;
    }
  }
}
.menu {
  width: 83upx;
  height: 100%;
  background: #f5a21d;
  padding-top: 15upx;

  .font {
    width: 44upx;
    height: 44upx;
    background: #fff;
    border-radius: 50%;
    margin-top: 30upx;
    text-align: center;
    line-height: 44upx;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    letter-spacing: 1px;
  }

  .logo {
    width: 44upx;
    height: 44upx;
    display: flex;
    justify-content: space-between;
    img {
      width: 100%;
      height: 100%;
    }
  }
 
}
.active{
    color: #f5a21d!important;
  }
</style>
