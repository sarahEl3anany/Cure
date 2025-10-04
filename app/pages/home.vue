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
        <div class="w-full">
            <div class="flex items-center gap-2 mx-2">
                <img :src="banner" alt="banner" class="w-11/12 max-h-48 mt-5 object-contain" />

            </div>
        </div>
        <doctorsNearYou />
    </div>
</template>