<script setup lang="ts">
import { ref, shallowRef, markRaw } from 'vue'
import Welcome1 from './welcome1.vue'
import Welcome2 from './welcome2.vue'

const welcomeComponents = shallowRef([
  { id: 1, component: markRaw(Welcome1) },
  { id: 2, component: markRaw(Welcome2) }
])

const carousel = ref() 
const activeIndex = ref(0) 

const goNext = () => {
  if (carousel.value && activeIndex.value < welcomeComponents.value.length - 1) {
    activeIndex.value++
  } else {
    
    navigateTo('/welcome')
  }
}
</script>

<template>
  <div class=" w-full h-full flex flex-col items-center justify-center main-welcome">
    <div class="flex  w-full justify-end top-4 right-4">
      <NuxtLink
        to="/welcome"
        class="text-neutral-700 font-montserratMedium pr-2 dark:text-neutral-50"
      >
        Skip
      </NuxtLink>
    </div>
    <Carousel
      ref="carousel"
      v-model:page="activeIndex"
      :value="welcomeComponents"
      :numVisible="1"
      :numScroll="1"
      :showNavigators="false"
      :showIndicators="true" 
    >
      <template #item="slotProps">
        <component :is="slotProps.data.component" />
      </template>
    </Carousel>
    <div class="mt-1 w-full max-w-sm px-6">
      <Button
        @click="goNext"
        class="w-full text-base h-12 text-white rounded-lg font-montserratMedium bg-primary-500 hover:bg-primary-600"
      >
        {{ activeIndex === welcomeComponents.length - 1 ? 'Get Started' : 'Next' }}
      </Button>
    </div>
  </div>
</template>