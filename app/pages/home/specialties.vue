<script setup lang="ts">
import SearchBox from '@/components/home/searchBox.vue';
import Specialties from '@/components/home/tags.vue';
import type { Tag } from '@/types/tag'
import teeth from '/assets/images/home/tags/teeth.svg'
import heart from '/assets/images/home/tags/heart.svg'
import nose from '/assets/images/home/tags/nose.svg'
import lung from '/assets/images/home/tags/lung.svg'

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
        <h3 class="font-georgia text-black dark:text-primary-50 text-2xl">Specialties</h3>
      </div>
    </div>
    <div class="w-full">
      <Specialties :tag="allSpecialties" :showAll="true" :showVertically="true" />
    </div>
  </div>
</template>