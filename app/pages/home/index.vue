<script setup lang="ts">
import HomeHeader from '@/components/home/header.vue';
import SearchBox from '@/components/home/searchBox.vue';
import Tags from '@/components/home/tags.vue';
import InfoCard from '@/components/home/infoCard.vue';

import banner from '@/assets/images/home/banner.png'
import doctor1 from '@/assets/images/home/doctors/1.jpg'
import doctor2 from '@/assets/images/home/doctors/2.jpg'

import type { Information } from '@/types/information'
import type { Tag } from '@/types/tag'

import Teeth from '/assets/icons/home/tags/teeth.svg'
import Heart from '/assets/icons/home/tags/heart.svg'
import Nose from '/assets/icons/home/tags/nose.svg'
import Lung from '/assets/icons/home/tags/lung.svg'
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
    route: '/doctor/1/profile'
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
    img: Teeth,
    id: 1
  },
  {
    name: 'Cardiologist',
    img: Heart,
    id: 2
  },
  {
    name: 'ENT',
    img: Nose,
    id: 3
  },
  {
    name: 'Lung',
    img: Lung,
    id: 4
  },
])
definePageMeta({
  layout: 'no-header-footer'
})
</script>
<template>
    <div class="flex flex-col items-center w-full p-3">
        <HomeHeader />
        <SearchBox labelText="Search for specialty, doctor" searchRoute="/home/search" />
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
            <img :src="banner" alt="banner" class="w-full max-h-48 mt-5 object-contain" />
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
        <InfoCard :infoCard="doctorsCard" />
    </div>
</template>