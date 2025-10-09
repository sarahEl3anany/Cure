<script setup lang="ts">
import ProfileHeader from '@/components/doctor/header.vue';
import ProfileFooter from '@/components/doctor/footer.vue';

import CalendarIcon from '@/assets/icons/home/footer/calendar.svg'
import { useHeader } from '@/composables/useHeader'
import { ref, onMounted } from 'vue'

const { showHeader, backRoute, headerTitle, headerIcon, routeHeaderIcon } = useHeader()
const doctorID = useRoute().params.id

onMounted(() => {
  showHeader.value = true
  backRoute.value = `/doctor/${doctorID}/profile`
  headerIcon.value = 'mdi mdi-message-text-outline text-secondary-500 text-xl :hover:bg-neutral-100'
})

definePageMeta({
  layout: 'header-no-footer'
})

const date = ref<Date | null>(null)
const calendarVisible = ref(false)

// عند اختيار التاريخ
const onDateSelect = () => {
  calendarVisible.value = false
}
</script>

<template>
  <div class="w-full px-4 booking">
    <ProfileHeader />
    <div class="text-xl mt-3 font-georgia w-full">Select a day</div>

    <div class="max-w-sm mx-auto mt-10 relative">
      <div
        class="flex items-center justify-between border rounded-lg p-3 cursor-pointer"
        @click="calendarVisible = !calendarVisible"
      >
        <div class="flex items-center gap-2 text-gray-700">
          <CalendarIcon class="text-neutral-500" />
          <span class="font-montserratMedium text-sm text-secondary-500">
            {{ date ? date.toDateString() : 'Select date' }}
          </span>
        </div>
        <i
          class="pi"
          :class="calendarVisible ? 'pi-chevron-up text-primary-500' : 'pi-chevron-down text-primary-500'"
        ></i>
      </div>
      <transition name="fade">
        <div
          v-if="calendarVisible"
          class="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-50"
        >
          <DatePicker
            v-model="date"
            :inline="true"
            :show-button-bar="false"
            :monthNavigator="true"
            :yearNavigator="true"
            yearRange="2020:2030"
            class="w-full"
            @date-select="onDateSelect"
          />
        </div>
      </transition>
    </div>
    <div class="text-xl mt-3 font-georgia w-full">Select time</div>
    <div class="flex items-center gap-10 mt-3">
        <div class="bg-neutral-50 p-3 rounded-lg text-neutral-700 font-montserratMedium text-sm">9:00 AM</div>
        <div class="bg-neutral-50 p-3 rounded-lg text-neutral-700 font-montserratMedium text-sm">9:00 AM</div>
        <div class="bg-neutral-50 p-3 rounded-lg text-neutral-700 font-montserratMedium text-sm">9:00 AM</div>
    </div>
    <ProfileFooter labelText="Pay" :navigateTo="`/doctor/${doctorID}/pay`" />
  </div>
</template>