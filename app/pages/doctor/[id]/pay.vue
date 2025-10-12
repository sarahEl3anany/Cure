<script setup lang="ts">
import ProfileHeader from '@/components/doctor/header.vue';
import ProfileFooter from '@/components/doctor/footer.vue';

import { useHeader } from '@/composables/useHeader'
const { showHeader, backRoute, headerTitle } = useHeader()
import Calendar from '@/assets/icons/home/footer/calendar.svg'
import Visa from '@/assets/icons/home/doctors/visa.svg'
import PayPal from '@/assets/icons/home/doctors/paypal.svg'
import ApplePay from '@/assets/icons/home/doctors/applePay.svg'
onMounted(() => {
    showHeader.value = true
    backRoute.value = `/doctor/${doctorID}/book`
    headerTitle.value = 'Book Appointment'
})

const doctorID = useRoute().params.id

definePageMeta({
    layout: 'header-no-footer'
})
</script>

<template>
    <div class="px-4">
        <ProfileHeader />
        <div class="w-full">
            <div class="flex items-center justify-between mt-2">
                <div class="flex items-center gap-2">
                    <Calendar class="w-5 h-5 text-primary-500" />
                    <span class="font-montserratMedium text-sm text-secondary-500">Friday, July 17 -4:00pm</span>
                </div>
                <NuxtLink :to="`/doctor/${doctorID}/reschedule`" class="font-montserrat text-sm text-primary-500">
                    <div class="flex items-center gap-2">
                        <Pen class="flex-1 h-3 w-3 text-primary-500" />
                        <span>Reschedule</span>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="w-full">
            <div class="text-xl mt-3 font-georgia w-full text-secondary-500">Payment Method</div>
        </div>
        <div class="w-full">
            <RadioButtonGroup class="flex flex-col gap-2 mt-2 w-full">
                <div class="flex items-center justify-between w-full">
                    <div class="flex items-center gap-2">
                        <RadioButton name="payment" class="text-green-500"/>
                        <label>Credit Cart</label>
                    </div>
                    <div >
                        <Visa class="w-7 h-7 justify-end" />
                    </div>
                </div>
                <div class="flex items-center justify-between w-full">
                    <div class="flex items-center gap-2">
                        <RadioButton name="payment"/>
                        <label>PayPal</label>
                    </div>
                    <div >
                        <PayPal class="w-7 h-7 justify-end" />
                    </div>
                </div>
                <div class="flex items-center justify-between w-full">
                    <div class="flex items-center gap-2">
                        <RadioButton name="payment"/>
                        <label>Apple Pay</label>
                    </div>
                    <div >
                        <ApplePay class="w-7 h-7 justify-end" />
                    </div>
                </div>
            </RadioButtonGroup>
        </div>
        <div class="w-full flex items-center justify-center">
            <Button class="bg-white  text-primary-500  border border-dashed w-1/3 rounded-md ">
                <i class="mdi mdi-plus text-primary-500"></i>
                <span class="font-montserratMedium text-base">Add new card</span>
            </Button>
        </div>
        <ProfileFooter labelText="Pay" :navigateTo="`/doctor/${doctorID}/finishPay`" />
    </div>
</template>