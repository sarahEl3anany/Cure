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
      // apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://round5-online-booking-with-doctor-api.digital-vision-solutions.com/api/' , //'https://round5-online-booking-with-doctor-api.huma-volve.com/api/',
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3000/',
      googleClientId:'812442679665-j0oi4lse4s5gugt6pi9plr44akd2pris.apps.googleusercontent.com',
    },
  },
  googleSignIn: {
    clientId: '812442679665-j0oi4lse4s5gugt6pi9plr44akd2pris.apps.googleusercontent.com',
  },
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  }
})