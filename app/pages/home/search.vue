<script setup lang="ts">
import SearchBox from '@/components/home/searchBox.vue';
import Tags from '@/components/home/tags.vue';
import type { Tag } from '@/types/tag'
import teeth from '/assets/images/home/tags/teeth.svg'
import heart from '/assets/images/home/tags/heart.svg'
import nose from '/assets/images/home/tags/nose.svg'
import lung from '/assets/images/home/tags/lung.svg'
const allHistory = ref<Tag[]>([
  {
    name: 'Psychiatrist'
  },
  {
    name: 'Robert Johnson'
  },
  {
    name: 'Helwan'
  },
  {
    name:'Heart doctor'
  }
])
const allSpecialties = ref<Tag[]>([
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
  <div class="flex flex-col items-center justify-center px-4 text-center">
    <div class="flex flex-row items-center w-full mt-3">
      <Toast />
      <NuxtLink to="/home">
        <i class="pi pi-arrow-left justify-start"></i>
      </NuxtLink>
      <div class="text-center mx-auto">
        <h3 class="font-georgia text-black dark:text-primary-50 text-2xl">Search</h3>
      </div>
    </div>
    <div class="w-full">
      <SearchBox labelText="Search for specialty, doctor" searchRoute="/home/search" />
    </div>
    <div class="w-full flex items-center flex-row gap-2">
      <div class="text-secondary-500 font-montserrat text-base ">Search by your location</div>
      <div class="text-blue-500 font-montserrat text-xs">129,El-Nasr Street, Cairo</div>
    </div>
    <div class="w-full">
      <div class="font-georgia text-xl text-black mt-2 text-left mb-5">All Specialties</div>
      <Tags :tag="allSpecialties" :showAll="true" />
    </div>
    <div class="w-full mt-3">
      <div class="font-georgia text-xl text-black mt-2 text-left mb-5">History</div>
      <Tags :tag="allHistory" :showAll="true" />
    </div>
  </div>
</template>