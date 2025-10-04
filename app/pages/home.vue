<script setup lang="ts">
import homeHeader from '~/components/home/header.vue';
import search from '~/components/home/search.vue';
import specialties from '~/components/home/specialties.vue';
import doctorsNearYou from '~/components/home/doctorsNearYou.vue';
import banner from '~/assets/images/home/banner.svg'
</script>
<template>
    <div class="flex flex-col items-center w-full">
        <homeHeader />
        <search />
        <specialties /> 
        <div class="flex flex-col items-center w-full mx-4">
            <img :src="banner" alt="banner" class="w-11/12 max-h-48 mt-5 object-contain" />

        </div>
        <div class="w-full relative z-10">
            <doctorsNearYou />
        </div>
    </div>
</template>