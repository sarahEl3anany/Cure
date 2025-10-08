<script setup lang="ts">
const props = defineProps({
    title: String,
    backRoute: String
})
</script>
<template>
    <div>
    <div class="flex flex-row items-center w-full mt-3 ml-3">
      <NuxtLink :to="backRoute">
        <i class="pi pi-arrow-left justify-start"></i>
      </NuxtLink>
      <div class="text-center mx-auto">
        <h3 class="font-georgia text-black dark:text-primary-50 text-2xl">{{ title }}</h3>
      </div>
    </div>
    </div>
</template>