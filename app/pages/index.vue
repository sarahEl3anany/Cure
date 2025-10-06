<script setup lang="ts">
import Welcome1 from './welcome1.vue';
import Welcome2 from './welcome2.vue';
const currentStep = ref(1)
const goNext = () => {
  if (currentStep.value === 1) currentStep.value = 2
}
</script>

<template>
  <div>
    <div class="absolute top-4 right-4 justify-end">
      <NuxtLink to="/welcome" class="text-neutral-700 font-montserratMedium pr-2 dark:text-neutral-50 ">
        Skip
      </NuxtLink>
    </div>
    <div v-if="currentStep == 1">
      <Welcome1 @next="goNext" />  
    </div>
    <div v-if="currentStep == 2">
      <Welcome2 @next="goNext" />  
    </div>
  </div>
</template>

