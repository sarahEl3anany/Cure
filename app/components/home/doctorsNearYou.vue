<script setup lang="ts">
import doctor1 from '@/assets/images/home/doctors/1.jpg'  
import doctor2 from '@/assets/images/home/doctors/2.jpg'  
const doctorsCard = ref({
    'Robert Johnson': {
        img: doctor1,
        id: 1
    },
    'Cardiologist': doctor2
})
</script>
<template>
    <div class="w-full">
        <div class="flex items-center gap-2 mx-3">
            <div class="flex w-full items-center justify-between">
                <span class="font-georgia text-xl text-black justify-start flex">Doctors near you</span>
                <NuxtLink to="/doctorsNearYou" class="flex justify-end font-montserrat text-sm text-primary-500">View all</NuxtLink>
            </div>
        </div>
        <div class="flex justify-center mt-5 px-2 gap-2 overflow-x-auto mx-3">
            
        </div>
    </div>
</template>
