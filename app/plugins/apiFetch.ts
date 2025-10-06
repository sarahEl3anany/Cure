export default defineNuxtPlugin((nuxtApp) => {
  const splashScreen = useSplashScreenStore()

  const apiFetch = async (url: string, options?: any) => {
    splashScreen.start()
    try {
      return await $fetch(url, {
        baseURL: useRuntimeConfig().public.apiBase,
        ...options
      })
    } finally {
      splashScreen.stop()
    }
  }

  return {
    provide: {
      apiFetch
    }
  }
})
