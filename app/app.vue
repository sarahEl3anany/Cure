<template>
  <div class="w-full h-screen">
    <div>
        <SplashScreen v-show="splashScreenStore.isLoading"/>
    </div>
    <div class="z-10 w-full h-full">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup lang="ts">
import SplashScreen from '~/pages/splashScreen.vue'
import { useSplashScreenStore } from '~/stores/SplashScreen'
const splashScreenStore = useSplashScreenStore()
</script>
<style scoped></style>
