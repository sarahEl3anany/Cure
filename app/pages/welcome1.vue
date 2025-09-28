<script setup lang="ts">
import page1 from '@/assets/images/page1_g.svg'
import page1Load from '@/assets/images/page1_load.svg'

const emit = defineEmits(['next'])
</script>

<template>
    <div class="flex flex-col items-center justify-center px-4 text-center">
        <img :src="page1" alt="welcome" class="w-1/4 h-1/4 mx-1/5 pt-4" />
        <div class="gap-4 xs:w-3/4 lg:w-1/2">
            <h3 class="font-georgia text-secondary-500 dark:text-primary-50 lg:text-2xl xs:text-sm">Book Your Appointment Easily</h3>
            <p class="text-neutral-700 font-montserratMedium lg:text-base xs:text-2xs leading-relaxed mt-5">
                Choose your preferred doctor, pick a suitable time, 
                and confirm your visit in just a few taps. No calls, 
                no waiting — just simple and fast booking.
            </p> 
        </div>
        <img :src="page1Load" alt="load" class="w-14 h-2 mt-5" />
        <div class="mt-14 w-full max-w-sm">
            <Button 
            @click="emit('next')" 
            class="w-full text-base h-12 text-white rounded-lg font-montserratMedium">
                Next
            </Button>
        </div>
    </div>
</template>

<style scoped>
</style>
