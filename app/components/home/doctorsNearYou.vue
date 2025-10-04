<script setup lang="ts">
import doctor1 from '@/assets/images/home/doctors/1.jpg'
import doctor2 from '@/assets/images/home/doctors/2.jpg'
const doctorsCard = ref({
    'Robert Johnson': {
        'img': doctor1,
        'id': 1,
        'isFavorite': true,
        'specialty': 'Dentist',
        'location': 'El-Nasr Hospital',
        'time': '10:00 - 11:00',
        'rating': 4.8
    },
    'Cardiologist': {
        'img': doctor2,
        'id': 2,
        'isFavorite': false,
        'specialty': 'Cardiologist',
        'location': 'El-Nasr Hospital2',
        'time': '11:00 - 12:00',
        'rating': 3.5

    }
})
</script>
<template>
    <div class="w-full">
        <div class="flex items-center gap-2 mx-2 mt-5 ">
            <div class="flex w-full items-center justify-between">
                <span class="font-georgia text-xl text-black justify-start flex">Doctors near you</span>
                <NuxtLink to="/doctorsNearYou" class="flex justify-end font-montserrat text-sm text-primary-500">View
                    all</NuxtLink>
            </div>
        </div>
        <div class=" space-y-3">
            <div v-for="(value, key) in doctorsCard"
                class="flex items-center border mx-2 bg-white rounded-2xl shadow-md gap-3">
                <img :src="value.img" alt="doctor" class="w-20 h-20 object-cover rounded-l-2xl" />
                <div class="flex flex-col flex-1">
                    <h3 class="font-georgia text-lg text-black">{{ key }}</h3>
                    <p class="font-montserrat text-sm text-neutral-700">
                        {{ value.specialty }} | {{ value.location }}
                    </p>
                    <div class="flex items-center gap-4 mt-1">
                        <div class="flex items-center gap-1">
                            <i class="pi pi-star-fill text-yellow-400"></i>
                            <span class="font-montserratMedium text-sm text-secondary-400">{{ value.rating }}</span>
                        </div>

                        <div class="flex items-center gap-1">
                            <i class="pi pi-clock text-neutral-200"></i>
                            <span class="font-montserratMedium text-sm text-secondary-400">{{ value.time }}</span>
                        </div>
                    </div>
                </div>
                <button class="p-3 rounded-full hover:bg-secondary-100">
                    <i :class="value.isFavorite ? 'pi pi-heart-fill text-red-500' : 'pi pi-heart text-secondary-500'"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>