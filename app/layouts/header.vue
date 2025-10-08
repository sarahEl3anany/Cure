<script setup lang="ts">
const props = defineProps({
  title: String,
  backRoute: String,
  headerIcon: {
    type: String,
    default: ''
  },
  routeHeaderIcon: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div class="flex flex-col items-center w-full p-3">
    <div class="flex flex-row items-center w-full mt-3">
      <NuxtLink :to="backRoute"> 
        <i class="pi pi-arrow-left justify-start"></i>
      </NuxtLink>
      <div class="text-center mx-auto">
        <h3 class="font-georgia text-black dark:text-primary-50 text-2xl">{{ title }}</h3>
      </div>
      <NuxtLink v-if="routeHeaderIcon" :to="routeHeaderIcon">
        <i v-if="headerIcon" :class="`${headerIcon}`"></i>
      </NuxtLink>
      <i v-if="headerIcon && !routeHeaderIcon" :class="`${headerIcon}`"></i>
    </div>
  </div>
</template>