<script setup lang="ts">
import page1 from '@/assets/images/page1_g.svg'
</script>

<template>
  <div class="flex flex-col items-center justify-center text-center w-full h-full px-6">
    <img
      :src="page1"
      alt="welcome"
      class="w-1/4 sm:w-1/4 max-w-xs h-auto pt-5"
    />

    <div class="max-w-md">
      <h3
        class="font-georgia text-secondary-500 dark:text-primary-50 text-2xl sm:text-xl xs:text-base"
      >
        Book Your Appointment Easily
      </h3>
      <p
        class="text-neutral-700 font-montserratMedium text-base sm:text-sm xs:text-xs leading-relaxed mt-1"
      >
        Choose your preferred doctor, pick a suitable time, and confirm your visit in just a few taps.
        No calls, no waiting — just simple and fast booking.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
