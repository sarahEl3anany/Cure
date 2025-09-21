<script setup lang="ts">
import page1 from '@/assets/images/page1_g.svg'
import page1Load from '@/assets/images/page1_load.svg'

const emit = defineEmits(['next'])
</script>

<template>
    <div>
        <div class="flex flex-col items-center text-center w-full">
            <img :src="page1" alt="welcome" class="w-[306px] h-[310px] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl" />
            <h3 class="font-[Georgia] text-secondary-500 text-[24px]">Book Your Appointment Easily</h3>
            <p class="text-neutral-700 font-[Montserrat-Medium] text-[16px] leading-relaxed max-w-xl">
                Choose your preferred doctor, pick a <br />suitable time, 
                and confirm your visit<br /> in just a few taps. No calls, 
                no waiting<br />—just simple and fast booking.
            </p>
            <img :src="page1Load" alt="load" class="w-6 h-6" />
            <div class="mt-6 flex justify-center">
                <Button 
                @click="emit('next')" 
                class="text-[16px] h-[48px] w-[300px] text-white rounded-[7px] font-[Montserrat-Medium] max-w-sm">
                    Next
                </Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
