<script setup lang="ts">
import Visa from '@/assets/icons/home/doctors/visa.svg'
import PayPal from '@/assets/icons/home/doctors/paypal.svg'
import ApplePay from '@/assets/icons/home/doctors/applePay.svg'
import MasterCard from '@/assets/icons/home/user/masterCard.svg'

import { useHeader } from '@/composables/useHeader'
const { headerTitle, backRoute, showHeader } = useHeader()
onMounted(() => {
    headerTitle.value = 'Payment Method'
    backRoute.value = '/user/profile'
    showHeader.value = true
})
definePageMeta({
    layout: 'header-no-footer'
})
</script>
<template>
    <div class="px-6 w-full space-y-4 mt-6">
        <div class="font-georgia text-xl text-secondary-500">Credit / Debit Card</div>
        <NuxtLink to="/user/cards">
            <div class="flex items-center justify-between mt-2 p-3 rounded-md bg-neutral-50">
                <div class="flex items-center gap-2">
                    <Visa class="w-5 h-5 text-secondary-500" />
                    <span class="font-montserrat text-base text-secondary-500">VISA</span>
                </div>
                <i class="mdi mdi-chevron-right text-3xl text-neutral-500"></i>
            </div>
        </NuxtLink>
        <div class="flex items-center justify-between mt-2 p-3 rounded-md bg-neutral-50">
            <div class="flex items-center gap-2">
                <MasterCard class="w-5 h-5 text-secondary-500" />
                <span class="font-montserrat text-base text-secondary-500">MasterCard</span>
            </div>
            <i class="mdi mdi-chevron-right text-3xl text-neutral-500"></i>
        </div>
        <div class="font-georgia text-xl text-secondary-500">Mobile Wallets</div>
        <div class="w-full mt-4">
            <div class="flex items-center justify-between mt-2 p-2 rounded-md bg-neutral-50">
                <div class="flex items-center gap-2">
                    <ApplePay class="w-6 h-6" />
                    <span class="font-montserrat text-secondary-500 text-base ">Apple Pay</span>
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
            <div class="flex items-center justify-between mt-2 p-2 rounded-md bg-neutral-50">
                <div class="flex items-center gap-2">
                    <PayPal class="w-6 h-6" />
                    <span class="font-montserrat text-secondary-500 text-base ">PayPal</span>
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
    </div>
</template>