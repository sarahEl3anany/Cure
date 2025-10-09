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
const componentsLoaded = ref(false)
const goNext = () => {
  if (carousel.value && activeIndex.value < welcomeComponents.value.length - 1) {
    activeIndex.value++
  } else {
    
    navigateTo('/welcome')
  }
}
onMounted(async () => {
  await Promise.all([
    import('./welcome1.vue'),
    import('./welcome2.vue')
  ])
  componentsLoaded.value = true
})

definePageMeta({
  layout: 'no-header'
})
</script>
<template>
  <div class="w-full min-h-screen flex flex-col items-center justify-between main-welcome">
    <div class="w-full flex justify-end px-2 pt-3">
      <NuxtLink
        to="/welcome"
        class="text-neutral-700 font-montserratMedium dark:text-neutral-50"
      >
        Skip
      </NuxtLink>
    </div>

    <div class="flex-1 flex items-center justify-center w-full">
      <Carousel
        ref="carousel"
        v-if="componentsLoaded"
        v-model:page="activeIndex"
        :value="welcomeComponents"
        :numVisible="1"
        :numScroll="1"
        :showNavigators="false"
        :showIndicators="true"
        class="w-full"
      >
        <template #item="slotProps">
          <component :is="slotProps.data.component" />
        </template>
      </Carousel>

      <div v-else class="flex items-center justify-center w-full">
        <i class="pi pi-spinner pi-spin text-3xl text-primary-500"></i>
      </div>
    </div>

    <div class="w-full max-w-sm px-6 pb-6">
      <Button
        @click="goNext"
        class="w-full text-base h-12 text-white rounded-lg font-montserratMedium bg-primary-500 hover:bg-primary-600"
      >
        {{ activeIndex === welcomeComponents.length - 1 ? 'Get Started' : 'Next' }}
      </Button>
    </div>
  </div>
</template>
