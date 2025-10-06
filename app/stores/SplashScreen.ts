import { defineStore } from 'pinia'

export const useSplashScreenStore = defineStore('SplashScreen', {
  state: () => ({
    isLoading: false
  }),
  actions: {
    start() {
      this.isLoading = true
    },
    stop() {
      this.isLoading = false
    }
  }
})
