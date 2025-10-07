<script setup lang="ts">
import SearchBox from '@/components/home/searchBox.vue';
import mage from '@/assets/images/home/mage_location.svg'
const center = ref({ lat: 0, lng: 0 })
const address = ref('Detecting your location...')
function confirmLocation() {
    console.log('✅ Confirmed location:', center.value, address.value)
    alert(`Location confirmed:\n${address.value}`)
}
</script>
<template>
    <div class="relative w-full h-screen flex flex-col">
        <SearchBox labelText="Search for your location" />
        <div class="absolute bottom-20 right-5 bg-white p-1 rounded-full shadow-lg cursor-pointer">
                <img class="h-8 w-8" :src=mage alt="Mage icon" />
            </div>
            <div class="absolute bottom-5 left-0 w-full flex justify-center z-10">
                <Button
                    class="bg-primary-500 hover:bg-primary-600 text-white w-[90%] h-12 rounded-lg font-montserratMedium"
                    @click="confirmLocation">
                    Confirm location
                </Button>
            </div>
    </div>
</template>