import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  //开启数据持久化
  persist:true,
  state: () => {
    return {
      count: 1
    }
  },
  getters: {
    double():number {
      return this.count * 2
    },
  }
})

export default useUserStore