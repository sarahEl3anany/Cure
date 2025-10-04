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
        <div class="flex items-center gap-2 mx-3">
            <div class="flex w-full items-center justify-between">
                <span class="font-georgia text-xl text-black justify-start flex">Specialties</span>
                <NuxtLink to="/specialties" class="flex justify-end font-montserrat text-sm text-primary-500">View all</NuxtLink>
            </div>
        </div>
        <div class="flex justify-center mt-5 px-2 gap-2 overflow-x-auto mx-3">
            <Chip v-for="(icon, name) in tags" :key="name" class="flex items-center gap-2 px-3 py-1 rounded-[14px] bg-white border border-neutral-500">
                <NuxtLink :to="name" class="flex items-center gap-2">
                    <img :src="icon" alt="" class="w-4 h-4" />
                    <span class="text-neutral-900 text-base text-montserrat">{{ name }}</span>
                </NuxtLink>
            </Chip>
        </div>
    </div>
</template>
