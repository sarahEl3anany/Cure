<script setup lang="ts">
import page1 from '@/assets/images/page1_g.svg'
import page1Load from '@/assets/images/page1_load.svg'

const emit = defineEmits(['next'])
</script>

<template>
    <div class="flex flex-col items-center justify-center w-screen h-screen px-4 text-center mt-1/5">
        <img :src="page1" alt="welcome" class="w-4/5 h-1/3 mx-1/5" />
        <div class="gap-4 xs:w-3/4 lg:w-1/2">
            <h3 class="font-georgia text-secondary-500 lg:text-2xl xs:text-sm dark:text-secondary-500">Book Your Appointment Easily</h3>
            <p class="text-neutral-700 font-montserratMedium lg:text-base xs:text-2xs leading-relaxed mt-5">
                Choose your preferred doctor, pick a suitable time, 
                and confirm your visit in just a few taps. No calls, 
                no waiting — just simple and fast booking.
            </p> 
        </div>
        <img :src="page1Load" alt="load" class="w-14 h-2 mt-5" />
        <div class="mt-36 flex justify-center">
            <Button 
            @click="emit('next')" 
            class="text-base h-12 xs:w-64 sm:w-64 lg:w-96 text-white rounded-lg font-montserratMedium mx-2">
                Next
            </Button>
        </div>
    </div>
</template>

<style scoped>
</style>
