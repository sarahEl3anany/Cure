<script setup lang="ts">
import Specialties from '@/components/home/tags.vue';
import type { Tag } from '@/types/tag'
import teeth from '/assets/images/home/tags/teeth.svg'
import heart from '/assets/images/home/tags/heart.svg'
import nose from '/assets/images/home/tags/nose.svg'
import lung from '/assets/images/home/tags/lung.svg'
import { useHeader } from '@/composables/useHeader'
const { headerTitle, showHeader, backRoute } = useHeader()
onMounted(() => {
    headerTitle.value = 'Specialties'
    showHeader.value = true
    backRoute.value = '/home'
})
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
    <Toast />
    <div class="w-full">
      <Specialties :tag="allSpecialties" :showAll="true" :showVertically="true" />
    </div>
  </div>
</template>