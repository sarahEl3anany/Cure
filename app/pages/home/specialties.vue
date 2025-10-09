<script setup lang="ts">
import Tags from '@/components/home/tags.vue';
import type { Tag } from '@/types/tag'
import Teeth from '/assets/icons/home/tags/teeth.svg'
import Heart from '/assets/icons/home/tags/heart.svg'
import Nose from '/assets/icons/home/tags/nose.svg'
import Lung from '/assets/icons/home/tags/lung.svg'
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
  layout: 'no-footer'
})
</script>
<template>
  <div class="flex flex-col items-center justify-center px-4 text-center">
    <Toast />
    <div class="w-full">
      <Tags :tag="allSpecialties" :showAll="true" :showVertically="true" />
    </div>
  </div>
</template>