<script setup lang="ts">
import homeHeader from '@/components/home/header.vue';
import SearchBox from '@/components/home/searchBox.vue';
import Tags from '@/components/home/tags.vue';
import infoCard from '@/components/home/infoCard.vue';
import banner from '@/assets/images/home/banner.svg'
import doctor1 from '@/assets/images/home/doctors/1.jpg'
import doctor2 from '@/assets/images/home/doctors/2.jpg'
import type { Information } from '@/types/information'
import type { Tag } from '@/types/tag'
import teeth from '/assets/images/home/tags/teeth.svg'
import heart from '/assets/images/home/tags/heart.svg'
import nose from '/assets/images/home/tags/nose.svg'
import lung from '/assets/images/home/tags/lung.svg'
const doctorsCard = ref<Information[]>([
  {
    name: 'Dr. Ahmed Ali',
    img: doctor1,
    id: 1,
    isFavorite: true,
    specialty: 'Dentist',
    location: 'El-Nasr Hospital',
    time: '10:00 - 11:00',
    rating: 4.8,
  },
  {
    name: 'Dr. Mohamed',
    img: doctor2,
    id: 2,
    isFavorite: false,
    specialty: 'Cardiologist',
    location: 'Cairo Clinic',
    time: '12:00 - 13:00',
    rating: 4.6,
  },
])

const mostSpecialties = ref<Tag[]>([
  {
    name: 'Dentist',
    img: teeth,
    id: 1
  },
  {
    name: 'Cardiologist',
    img: heart,
    id: 2
  },
  {
    name: 'ENT',
    img: nose,
    id: 3
  },
  {
    name: 'Lung',
    img: lung,
    id: 4
  },
])
</script>
<template>
    <div class="flex flex-col items-center w-full">
        <homeHeader />
        <SearchBox labelText="Search for specialty, doctor" />
        <div class="w-full">
            <div class="flex items-center justify-between px-2 mt-2">
                <span class="font-georgia text-xl text-black">Specialties</span>
                <NuxtLink
                    to="/home/specialties"
                    class="font-montserrat text-sm text-primary-500"
                >
                    View all
                </NuxtLink>
            </div>
        </div>
        <Tags :tag="mostSpecialties" />
        <div class="w-full">
            <div class="flex items-center gap-2 mx-2">
                <img :src="banner" alt="banner" class="w-11/12 max-h-48 mt-5 object-contain" />
            </div>
        </div>
        <div class="w-full mb-2">
            <div class="flex items-center gap-2 mx-2 mt-5 ">
                <div class="flex w-full items-center justify-between">
                    <span class="font-georgia text-xl text-black justify-start flex">Doctors near you</span>
                    <NuxtLink to="/home/doctors" class="flex justify-end font-montserrat text-sm text-primary-500">
                        View
                        all</NuxtLink>
                </div>
            </div>
        </div>
        <infoCard :infoCard="doctorsCard" />
    </div>
</template>