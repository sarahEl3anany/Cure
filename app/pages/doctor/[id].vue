<script setup lang="ts">
import doctor1 from '@/assets/images/home/doctors/1.jpg'
import location from '@/assets/icons/home/location.svg'
import { useHeader } from '@/composables/useHeader'
import medal from '@/assets/icons/home/doctors/medal-1.svg'
import patients from '@/assets/icons/home/doctors/user-round-users-1.svg'
import star from '@/assets/icons/home/doctors/star.svg'
import StarLine from '@/assets/icons/home/doctors/star-1.svg'
import message from '@/assets/icons/home/doctors/messages-1.svg'
import pen from '@/assets/icons/home/doctors/pen.svg'
const query = useRoute().params
const { showHeader, backRoute, headerTitle, headerIcon, routeHeaderIcon } = useHeader()
const doctorID = query.id
onMounted(() => {
  showHeader.value = true
  backRoute.value = '/home'
  headerIcon.value = 'mdi mdi-message-text-outline text-secondary-500 text-xl :hover:bg-neutral-100'
  routeHeaderIcon.value = '/doctor/chat'
  headerTitle.value = 'Doctor details'
})
// pass to get doctor data api
definePageMeta({
  layout: 'no-footer'
})
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
          <img class="w-3 h-3" v-if="location" :src="location" alt="Location icon" />
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
        <img :src="patients" class="h-12 w-12" alt="patients" />
        <span class="text-sm font-semibold text-gray-600">2,000+</span>
        <span class="text-neutral-700 text-sm font-montserrat">Patients</span>
      </div>
      <div class="flex flex-col items-center gap-1">
        <img :src="medal" class="h-12 w-12" alt="medal" />
        <span class="text-sm font-semibold text-gray-600">10+</span>
        <span class="text-neutral-700 text-sm font-montserrat">experience</span>
      </div>
      <div class="flex flex-col items-center gap-1">
        <img :src="star" class="h-12 w-12" alt="star" />
        <span class="text-sm font-semibold text-gray-600">4.5</span>
        <span class="text-neutral-700 text-sm font-montserrat">rating</span>
      </div>
      <div class="flex flex-col items-center gap-1">
        <img :src="message" class="h-12 w-12" alt="message" />
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
            <img :src="pen" class="flex-1 h-3 w-3" alt="pen" />
            <span>add review</span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="w-full px-2">
      <div class="flex items-center">
          <span class="text-neutral-700 text-montserrat text-sm">4.5/5</span>
          <div class="flex space-x-1">
          <StarLine v-for="i in 5" :key="i" class="h-3 w-3 text-primary-500" />
        </div>
      </div>
    </div>
  </div>
</template>