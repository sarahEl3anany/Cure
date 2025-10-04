<script setup lang="ts">
import teeth from '@/assets/images/home/tags/teeth.svg'
import heart from '@/assets/images/home/tags/heart.svg'
import nose from '@/assets/images/home/tags/nose.svg'
import lung from '@/assets/images/home/tags/lung.svg'
const tags = ref({
    'Dentist': teeth,
    'Cardiologist': heart,
    'ENT': nose,
    'Lung': lung
})
</script>
<template>
  <div class="w-full">
    <div class="flex items-center justify-between px-2 mt-2">
      <span class="font-georgia text-xl text-black">Specialties</span>
      <NuxtLink
        to="/specialties"
        class="font-montserrat text-sm text-primary-500"
      >
        View all
      </NuxtLink>
    </div>
    <div
      class="flex items-center gap-3 overflow-x-auto mt-2 px-2 scrollbar-hide"
    >
      <div
        v-for="(icon, name) in tags"
        :key="name"
        class="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 bg-white shrink-0 cursor-pointer hover:bg-neutral-50"
      >
        <img :src="icon" alt="img" class="w-4 h-4" />
        <span class="text-neutral-900 text-sm font-montserrat">{{ name }}</span>
      </div>
    </div>
  </div>
</template>
