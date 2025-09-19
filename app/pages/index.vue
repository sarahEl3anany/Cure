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
    <div class="flex flex-col items-center min-h-screen w-full">
      <!-- on click navigate to sign in -->
       <!-- Smart animate Ease out 300ms -->
      <div class="w-full flex justify-end">
        <NuxtLink to="/sign-in" class="text-[#6D7379] font-[Montserrat-Medium] pr-2">
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
  </div>
</template>

