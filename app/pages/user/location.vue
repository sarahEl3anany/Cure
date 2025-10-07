<script setup lang="ts">

import location from '@/assets/images/home/locationA.svg'
import mage from '@/assets/images/home/mage_location.svg'
const center = ref({ lat: 0, lng: 0 })
const address = ref('Detecting your location...')
const mapRef = ref()

onMounted(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                center.value = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                }
                await updateAddress(center.value)
            },
            (err) => {
                console.error('Geolocation Error:', err)
                address.value = 'Location access denied'
            }
        )
    } else {
        address.value = 'Geolocation not supported'
    }
})

async function updateAddress(coords: { lat: number; lng: number }) {
    const geocoder = new google.maps.Geocoder()
    geocoder.geocode({ location: coords }, (results: any, status: any) => {
        if (status === 'OK' && results && results[0]) {
            address.value = results[0].formatted_address
        } else {
            address.value = 'Address not found'
        }
    })
}

function onMarkerDragEnd(event: any) {
    const newPos = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
    }
    center.value = newPos
    updateAddress(newPos)
}

function confirmLocation() {
    console.log('✅ Confirmed location:', center.value, address.value)
    alert(`Location confirmed:\n${address.value}`)
}
</script>

<template>
    <ClientOnly>
        <div class="relative w-full h-screen flex flex-col">
            <div
                class="absolute top-1 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-xl p-3 w-[80%] max-w-md z-10 flex flex-col items-center text-center">
                <div class="flex justify-between w-full items-center">
                    <NuxtLink to="/home">
                        <i class="pi pi-arrow-left text-secondary-500"></i>
                    </NuxtLink>
                    <span class="font-georgia text-secondary-500 text-base">Current location</span>
                    <NuxtLink to="/user/searchLocation">
                        <i class="pi pi-search text-secondary-500"></i>
                    </NuxtLink>
                </div>
                <div class="flex items-center gap-2 mt-1 text-neutral-600 text-sm">
                    <img class="w-3 h-3" :src=location alt="Location icon" />
                    <div class="flex items-start">
                        <div class="flex items-center gap-1">
                            <span class="text-primary-500 text-montserrat text-sm">
                                <NuxtLink to="/user/location">
                                    <span class="truncate">{{ address }}</span>
                                </NuxtLink>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1 w-full">
                <GMapMap ref="mapRef" :center="center" :zoom="15" map-type-id="roadmap"
                    style="width: 100%; height: 100vh" @click="(e: any) => onMarkerDragEnd(e)">
                    <GMapMarker :position="center" :draggable="true" @dragend="onMarkerDragEnd" />
                </GMapMap>
            </div>
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
    </ClientOnly>
</template>
