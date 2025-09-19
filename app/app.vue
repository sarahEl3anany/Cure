<template>
  <div class="w-full min-h-screen relative">
    <div>
      <SplashScreen v-if="splashScreenStore.isLoading" />
    </div>
    <div class="z-10">
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
