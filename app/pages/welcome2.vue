<script setup lang="ts">
import page2 from '@/assets/images/page2_g.svg'
import page2Load from '@/assets/images/page2_load.svg'
const goToLogin = () => {
    navigateTo('/welcome')
}
</script>

<template>
    <div class="flex flex-col items-center justify-center px-4 text-center">
        <img :src="page2" alt="welcome" class="w-1/4 h-1/4 mx-1/5 pt-4 max-w-sm max-h-sm" />
        <div class="gap-4 xs:w-3/4 lg:w-1/2">
            <h3 class="font-georgia text-secondary-500 lg:text-2xl xs:text-sm dark:text-secondary-50">Find Doctors Around You</h3>
            <p class="text-neutral-700 font-montserratMedium lg:text-base xs:text-2xs leading-relaxed mt-5">
                Quickly discover trusted doctors near your area. Whether you need
                a general checkup or a specialist, we 
                connect you with nearby clinics for 
                fast and convenient care.
            </p>
        </div>
        <img :src="page2Load" alt="load" class="w-14 h-2 mt-5" />
        <div class="mt-14 w-full max-w-sm">
            <Button 
            class="w-full text-base h-12 text-white rounded-lg font-montserratMedium" 
            @click="goToLogin">Get Started</Button>
        </div>
    </div>
</template>

<style scoped>
</style>
