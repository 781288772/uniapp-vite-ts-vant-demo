import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    double():number {
      return this.count * 2
    },
  }
})

export default useUserStore