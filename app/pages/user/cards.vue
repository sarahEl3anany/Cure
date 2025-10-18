<script setup lang="ts">
import Visa from '@/assets/icons/home/doctors/visa.svg'
import Cards from '@/assets/images/home/user/cards.jpg'

import { useHeader } from '@/composables/useHeader'
const { headerTitle, backRoute, showHeader } = useHeader()
onMounted(() => {
    headerTitle.value = 'Payment Method'
    backRoute.value = '/user/paymentMethod'
    showHeader.value = true
})
definePageMeta({
    layout: 'header-no-footer'
})
const userCards = ref<Array<any>>([1, 2])
</script>
<template>
    <div class="w-full" v-if="userCards.length === 0">
        <div class="flex items-center w-full justify-center">
            <img :src="Cards" alt="Cards Image" class="w-[200px] h-[200px] rounded-lg" />
        </div>
        <div class="flex items-center w-full justify-center">
            <div class="font-georgia text-black text-2xl">Nothing to display here!</div>
        </div>
        <div class="flex items-center w-full justify-center">
            <div class="font-montserrat text-neutral-700 text-base">Add your cards to make payment easier</div>
        </div>
    </div>
    <div v-else class="px-6 w-full space-y-4 mt-6">
        <div class="flex items-center justify-between mt-2 p-2 rounded-md bg-neutral-50">
            <div class="flex items-center gap-2">
                <Visa class="w-6 h-6" />
                <span class="font-montserrat text-secondary-500 text-base ">Axis Bank 450***49</span>
            </div>
            <label
                class="flex items-center justify-between border-gray-300 text-neutral-700 rounded-md p-3 cursor-pointer transition-all duration-200">
                <div class="flex items-center gap-3">
                    <div
                        class="w-6 h-6 flex items-center justify-center border-secondary-500 bg-neutral-50 rounded-full border transition-all duration-200">
                        <i class="mdi mdi-check text-neutral-50"></i>
                    </div>
                </div>
            </label>
        </div>
    </div>
    <div class="w-full flex items-center justify-center mt-10">
        <NuxtLink to="/user/addCard" class="w-full flex items-center justify-center">
            <Button class="bg-primary-500 border w-1/3 rounded-md">
                <i class="mdi mdi-plus text-white"></i>
                <span class="font-montserratMedium text-base text-white">Add card</span>
            </Button>
        </NuxtLink> 
    </div>
</template>