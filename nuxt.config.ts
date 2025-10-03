// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2025-09-19',
  devtools: { enabled: true },
  spaLoadingTemplate: false,
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/css/main.css',
  ],
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    ['@vee-validate/nuxt', { componentNames: { Form: 'VForm' } }],
    '@pinia/nuxt',
    'nuxt-vue3-google-signin',
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      facebookAppId: process.env.FACEBOOK_APP_ID,
    },
  },
  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  }
})