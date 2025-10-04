<template>
  <div class="w-full h-screen">
    <div>
        <SplashScreen v-show="splashScreenStore.isLoading"/>
    </div>
    <div class="z-10 w-full h-full flex flex-col min-h-screen">
      <main class="flex-1">
        <NuxtPage />
      </main>
      <NuxtLayout v-if="showFooter"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import SplashScreen from '~/pages/splashScreen.vue'
import { useSplashScreenStore } from '~/stores/SplashScreen'
const splashScreenStore = useSplashScreenStore()
const config = useRuntimeConfig()
const token = useCookie('token').value || config.public.localToken
const sessionToken = process.client ? sessionStorage.getItem('token') : null
let showFooter = ref(false)
if (sessionToken || token) {
  showFooter.value = true
}
</script>
<style scoped></style>
