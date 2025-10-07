<script setup lang="ts">
import page2 from '@/assets/images/page2_g.svg'
</script>

<template>
  <div class="flex flex-col items-center justify-center text-center w-full h-full px-6">
    <img
      :src="page2"
      alt="welcome"
      class="w-1/4 sm:w-1/4 max-w-xs h-auto"
    />

    <div class="max-w-md">
      <h3
        class="font-georgia text-secondary-500 dark:text-primary-50 text-2xl sm:text-xl xs:text-base"
      >
        Find Doctors Around You
      </h3>
      <p
        class="text-neutral-700 font-montserratMedium text-base sm:text-sm xs:text-xs leading-relaxed mt-1"
      >
        Quickly discover trusted doctors near your area. Whether you need
        a general checkup or a specialist, we 
        connect you with nearby clinics for 
        fast and convenient care.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
