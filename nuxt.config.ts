// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/css/main.css',
  ],
   modules: [
     '@primevue/nuxt-module',
     '@nuxtjs/tailwindcss',
     ['@vee-validate/nuxt', { componentNames: { Form: 'VForm' } }],
     '@pinia/nuxt'
   ],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  }
})