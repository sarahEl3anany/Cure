<script setup lang="ts">
import page2 from '@/assets/images/page2_g.svg'
</script>

<template>
  <div class="flex flex-col items-center justify-center text-center w-full h-full px-6">
    <img
      :src="page2"
      alt="welcome"
      class="max-sm:w-1/2 max:xs:w-1/2 w-1/4"
    />

    <div class="max-w-md mt-10">
      <h3
        class="font-georgia text-secondary-500 dark:text-primary-50 text-2xl max-sm:text-xl max-xs:text-base"
      >
        Find Doctors Around You
      </h3>
      <p
        class="text-neutral-700 font-montserratMedium text-base max-sm:text-sm max-xs:text-xs leading-relaxed mt-1"
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
