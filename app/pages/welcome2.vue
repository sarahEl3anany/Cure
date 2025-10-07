<script setup lang="ts">
import page2 from '@/assets/images/page2_g.svg'

</script>

<template>
  <div class="flex flex-col items-center justify-center text-center w-full h-full px-6">
        <img :src="page2" alt="welcome" class="w-1/4 h-1/4 mx-1/5 max-w-sm max-h-sm" />
        <div class="gap-4 xs:w-3/4 lg:w-1/2">
            <h3 class="font-georgia text-secondary-500 lg:text-2xl xs:text-sm dark:text-secondary-50">Find Doctors Around You</h3>
            <p class="text-neutral-700 font-montserratMedium lg:text-base xs:text-2xs leading-relaxed mt-1">
                Quickly discover trusted doctors near your area. Whether you need
                a general checkup or a specialist, we 
                connect you with nearby clinics for 
                fast and convenient care.
            </p>
        </div>
    </div>
</template>