<script setup lang="ts">
import doctor1 from '@/assets/images/home/doctors/1.jpg'
import user from '@/assets/images/home/user/1.png'

import Location from '@/assets/icons/home/location.svg'
import Medal from '@/assets/icons/home/doctors/medal-1.svg'
import Patients from '@/assets/icons/home/doctors/user-round-users-1.svg'
import Star from '@/assets/icons/home/doctors/star.svg'
import StarLine from '@/assets/icons/home/doctors/star-1.svg'
import Message from '@/assets/icons/home/doctors/messages-1.svg'
import Pen from '@/assets/icons/home/doctors/pen.svg'

import { useHeader } from '@/composables/useHeader'
const { showHeader, backRoute, headerTitle, headerIcon, routeHeaderIcon } = useHeader()
onMounted(() => {
  showHeader.value = true
backRoute.value = '/home'
headerIcon.value = 'mdi mdi-message-text-outline text-secondary-500 text-xl :hover:bg-neutral-100'
routeHeaderIcon.value = '/doctor/chat'
headerTitle.value = 'Doctor details'
})

definePageMeta({
  layout: 'header-no-footer'
})
const doctorID = useRoute().params.id
// pass to get doctor data api

</script>
<template>
  <div class="w-full px-4">
    <div class="flex items-center gap-2">
      <div class="relative inline-block">
        <img v-if="doctor1"
          class="w-28 h-28 max-sm:w-20 max-sm:h-20 rounded-full border-primary-500 border object-cover" :src="doctor1"
          alt="Doctor avatar" />

        <i
          class="mdi mdi-check-decagram absolute bottom-0 right-1 translate-y-1 max-sm:translate-y-1/4 rounded-full text-primary-500 text-xl p-[2px]"></i>
      </div>

      <div class="flex flex-col flex-1 text-left space-y-2 max-sm:space-y-0 max-sm:pr-2">
        <p class="font-georgia text-secondary-500 dark:text-secondary-50 text-xl max-sm:text-base">
          Dr. Jessica Turner
        </p>
        <div class="flex items-start">
          <div class="flex items-center gap-1">
            <span class="text-neutral-700 text-montserrat text-sm max-sm:text-xs">
              Pulmonologist
            </span>
          </div>
        </div>
        <div class="flex items-center gap-1 mt-1 text-neutral-600 text-sm">
          <Location class="w-3 h-3 text-primary-500" />
          <div class="flex items-start">
            <span class="text-neutral-700 text-montserrat text-sm truncate max-sm:text-xs">129,El-Nasr Street,
              Cairo</span>
          </div>
        </div>
      </div>
      <div
        class="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-50 hover:bg-neutral-100">
        <i class="pi pi-heart text-secondary-500"></i>
      </div>
    </div>
    <div class="flex items-center justify-center gap-12 max-sm:gap-6 mt-2">
      <div class="flex flex-col items-center gap-1">
        <Patients class="h-12 w-12" />
        <span class="text-sm font-semibold text-gray-600">2,000+</span>
        <span class="text-neutral-700 text-sm font-montserrat">Patients</span>
      </div>
      <div class="flex flex-col items-center gap-1">
        <Medal class="h-12 w-12" />
        <span class="text-sm font-semibold text-gray-600">10+</span>
        <span class="text-neutral-700 text-sm font-montserrat">experience</span>
      </div>
      <div class="flex flex-col items-center gap-1">
        <Star class="h-12 w-12" />
        <span class="text-sm font-semibold text-gray-600">4.5</span>
        <span class="text-neutral-700 text-sm font-montserrat">rating</span>
      </div>
      <div class="flex flex-col items-center gap-1">
        <Message class="h-12 w-12" />
        <span class="text-sm font-semibold text-gray-600">1,872</span>
        <span class="text-neutral-700 text-sm font-montserrat">reviews</span>
      </div>
    </div>
    <div class="items-center">
      <span class="font-georgia text-xl max-sm:text-lg">About me</span>
      <p class="text-neutral-700 text-montserrat text-sm">
        Dr. Jessica Turner, a board-certified Pulmonologist with over 8 years of experience in diagnosing and treating a
        wide range of respiratory and
      </p>
    </div>
    <div class="w-full">
      <div class="flex items-center justify-between mt-2">
        <span class="font-georgia text-xl text-black">Reviews and Rating</span>
        <NuxtLink :to="`/doctor/${doctorID}/addReview`" class="font-montserrat text-sm text-primary-500">
          <div class="flex items-center gap-2">
            <Pen class="flex-1 h-3 w-3 text-primary-500" />
            <span>add review</span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="w-full px-2">
      <div class="flex items-center justify-between ">
        <h1 class="text-secondary-500 font-georgia text-[40px]">4.5/5</h1>
        <div class="flex space-x-1">
          <StarLine v-for="i in 5" :key="i" class="h-3 w-3 text-[#F9E00059]" :class="{ 'text-[#F9E000]': i <= 4 }" />
        </div>
      </div>
    </div>
    <div class="p-2 gap-2 m-2 border-black border-neutral-50 border rounded-2xl">
      <div class="flex items-center">
        <img v-if="user" class="w-14 h-14 max-sm:w-14 max-sm:h-14 rounded-full object-cover" :src="user"
          alt="User avatar" />
        <div class="flex flex-col flex-1 text-left space-y-2 max-sm:space-y-0 max-sm:pr-2">
          <p class="font-georgia text-secondary-500 dark:text-secondary-50 text-xl max-sm:text-base">
            Nabila Reyna
          </p>
          <div class="flex items-start">
            <div class="flex items-center gap-1">
              <span class="text-neutral-900 text-montserrat text-sm max-sm:text-xs">
                30 min ago
              </span>
            </div>
          </div>
        </div>
        <div class="p-1 rounded-md flex items-center justify-center mr-3 bg-[#F9E0001A] hover:bg-neutral-100">
          <StarLine class="h-3 w-3 text-[#F9E000]" />
          <span class="text-[#F9E000]">4.5</span>
        </div>
      </div>
      <p class="text-[#555B6C] text-montserrat text-base">
        Excellent service! Dr. Jessica Turner was attentive and thorough. The clinic was clean, and the staff were
        friendly. Highly recommend for in-person care!
      </p>
    </div>
    <div class="flex items-center justify-between p-2">
      <div>
        <span class="text-secondary-400 font-montserratMedium text-2xl">Price</span>
        <span class="text-[#555B6C] font-montserratMedium text-xs">\ hour</span>
      </div>
      <div class="text-red-400 font-montserratMedium text-base">
        350$
      </div>
    </div>
    <div class="flex items-center justify-center pb-2">
      <Button type="submit"
        class="flex w-1/2 flex-col items-center text-base max-sm:text-sm h-12 text-white rounded-lg font-montserratMedium">
        Book Appointment
      </Button>
    </div>
  </div>
</template>