<script setup lang="ts">
import page2 from '@/assets/images/page2_g.svg'
import page2Load from '@/assets/images/page2_load.svg'
const goToLogin = () => {
    navigateTo('/welcome')
}
</script>

<template>
    <div>
        <div class="flex flex-col items-center text-center w-full">
            <img :src="page2" alt="welcome" class="w-[306px] h-[310px] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl" />
            <h3 class="font-[Georgia] text-[#05162C] text-[24px]">Find Doctors Around You</h3>
            <p class="text-[#6D7379] font-[Montserrat-Medium] text-[16px] leading-relaxed max-w-xl">
                Quickly discover trusted doctors near <br />your area. Whether you need<br />
                a general checkup or a specialist, we <br />
                connect you with nearby clinics for <br />
                fast and convenient care.
            </p>
            <img :src="page2Load" alt="load" class="w-6 h-6" />
            <div class="mt-6 flex justify-center">
                <Button class="h-[48px] w-[300px] text-[#FFFFFF] rounded-[7px] text-[16px] font-[Montserrat-Medium] max-w-sm" 
                @click="goToLogin">Get Started</Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
