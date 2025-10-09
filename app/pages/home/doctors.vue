<script setup lang="ts">
import InfoCard from '@/components/home/infoCard.vue';
import Tags from '@/components/home/tags.vue';
import SearchBox from '@/components/home/searchBox.vue';

import type { Information } from '@/types/information'
import type { Tag } from '@/types/tag'

import doctor1 from '@/assets/images/home/doctors/1.jpg'
import doctor2 from '@/assets/images/home/doctors/2.jpg'

import Teeth from '/assets/icons/home/tags/teeth.svg'
import Heart from '/assets/icons/home/tags/heart.svg'
import Nose from '/assets/icons/home/tags/nose.svg'
import Lung from '/assets/icons/home/tags/lung.svg'

import { useHeader } from '@/composables/useHeader'
const { headerTitle, showHeader, backRoute } = useHeader()
onMounted(() => {
    headerTitle.value = 'Doctors'
    showHeader.value = true
    backRoute.value = '/home'
})

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
const allSpecialties = ref<Tag[]>([
  {
    name: 'All',
    img: '',
    id: 0,
    selected: true
  },
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
  layout: 'header-no-footer'
})
</script>
<template>
    <div class="flex flex-col items-center w-full">
        <div class="w-full px-3 space-y-4">
            <SearchBox labelText="Search for specialty, doctor" searchRoute="/home/search" />
            <Tags :tag="allSpecialties" />
            <InfoCard :infoCard="doctorsCard" />
        </div>
    </div>
</template>