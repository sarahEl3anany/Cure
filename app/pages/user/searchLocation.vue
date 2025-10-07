<script setup lang="ts">
import SearchBox from '@/components/home/searchBox.vue';
import mage from '@/assets/images/home/mage_location.svg'
import { useRouter } from 'vue-router'
const results = ref<{ name: string; lat: number; lng: number }[]>([])
const router = useRouter()

function onSearch() {
    results.value = [
        { name: 'Cairo, Egypt', lat: 30.0444, lng: 31.2357 },
        { name: 'Giza, Egypt', lat: 30.0131, lng: 31.2089 },
    ]
}

function selectLocation(result: any) {
    router.push({
        path: '/user/location',
        query: {
            address: result.name,
            lat: result.lat,
            lng: result.lng,
        },
    })
}
</script>
<template>
    <div class="relative w-full h-screen flex flex-col">
        <SearchBox labelText="Search for your location" searchRoute="/user/location" @search="onSearch" />
        <div class="absolute bottom-20 right-5 bg-white p-1 rounded-full shadow-lg cursor-pointer">
            <img class="h-8 w-8" :src=mage alt="Mage icon" />
        </div>
        <div v-if="results.length" class="w-full space-y-3">
            <div v-for="(result, idx) in results" :key="idx"
                class="p-3 bg-neutral-50 rounded-lg cursor-pointer hover:bg-primary-50" @click="selectLocation(result)">
                <span class="text-neutral-800 font-montserrat">{{ result.name }}</span>
            </div>
        </div>
        <div class="absolute bottom-5 left-0 w-full flex justify-center z-10">
            <Button class="bg-primary-500 hover:bg-primary-600 text-white w-[90%] h-12 rounded-lg font-montserratMedium"
                @click="onSearch">
                Confirm location
            </Button>
        </div>
    </div>
</template>