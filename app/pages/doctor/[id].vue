<script setup lang="ts">
import doctor1 from '@/assets/images/home/doctors/1.jpg'
import location from '@/assets/images/home/locationA.svg'
import { useHeader } from '@/composables/useHeader'
import { useFooter } from '@/composables/useFooter'
import medal from '@/assets/images/home/doctors/medal-1.svg'
import patients from '@/assets/images/home/doctors/user-round-users-1.svg'
import star from '@/assets/images/home/doctors/star.svg'
import message from '@/assets/images/home/doctors/messages-1.svg'
const { showFooter } = useFooter()
const { showHeader, backRoute, headerTitle , headerIcon, routeHeaderIcon} = useHeader()

onMounted(() => {
  showFooter.value = false
  showHeader.value = true
  backRoute.value = '/home'
  headerIcon.value = 'mdi mdi-message-text-outline text-secondary-500 text-xl :hover:bg-neutral-100'
  routeHeaderIcon.value = '/doctor/chat'
  headerTitle.value = 'Doctor details'
})
// pass to get doctor data api
</script>
<template>
  <div class="w-full px-4">
    <div class="flex items-center gap-2">
      <div class="relative inline-block">
        <img
          v-if="doctor1"
          class="w-28 h-28 max-sm:w-20 max-sm:h-20 rounded-full border-primary-500 border object-cover"
          :src="doctor1"
          alt="Doctor avatar"
        />

        <i
          class="mdi mdi-check-decagram absolute bottom-0 right-1 translate-y-1 max-sm:translate-y-1/4 rounded-full text-primary-500 text-xl p-[2px]"
        ></i>
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
            <span class="text-neutral-700 text-montserrat text-sm truncate max-sm:text-xs">129,El-Nasr Street, Cairo</span>
          </div>
        </div>

      </div>
      <div class="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-50 hover:bg-neutral-100">
        <i class="pi pi-heart text-secondary-500"></i>
      </div>
    </div>
    <div class="flex items-center justify-center gap-12 mt-2 w-full">
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
  </div>
</template>