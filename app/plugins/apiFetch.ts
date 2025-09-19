export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const apiFetch = $fetch.create({
    baseURL: config.public.apiBase, // هنا هيتضاف على طول
    onRequest({ options }) {
      // options.headers = { ...options.headers, Authorization: 'Bearer token' }
    },
    onResponseError({ response }) {
      console.error('API Error:', response._data)
    }
  })

  return {
    provide: {
      apiFetch
    }
  }
})
