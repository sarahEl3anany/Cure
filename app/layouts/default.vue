<script setup lang="ts">
import home from '@/assets/images/home/footer/home.svg'
import homeA from '@/assets/images/home/footer/home-active.svg'

import calendar from '@/assets/images/home/footer/calendar.svg'
import calendarA from '@/assets/images/home/footer/calendar-active.svg'

import profile from '@/assets/images/home/footer/profile.svg'
import profileA from '@/assets/images/home/footer/profile-active.svg'
const route = useRoute()
let homeImg = ref(home)
let homeColor = ref("text-neutral-500")
let calendarImg = ref(calendar)
let calendarColor = ref("text-neutral-500")
let profileImg = ref(profile)
let profileColor = ref("text-neutral-500")
if (route.path === '/home') {
  homeImg.value = homeA
  homeColor.value = "text-primary-500"
} 
if (route.path === '/calendar') {
  calendarImg.value = calendarA
  calendarColor.value = "text-primary-500"
} 
if (route.path === '/profile') {
  profileImg.value = profileA
  profileColor.value = "text-primary-500"
} 
</script>

<template>
  <div>
    <!-- <slot /> -->
    <footer class="bg-white h-12 flex items-center justify-between bottom bottom-0 w-full px-5">
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/" class="flex flex-col items-center text-center text-xs font-montserrat"
        :class="homeColor">
          <img :src="homeImg" alt="Home" class="w-5 h-5" />
          <span>Home</span>
        </NuxtLink>
      </div>
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/calendar" class="flex flex-col items-center text-center text-xs font-montserrat"
        :class="calendarColor">
          <img :src="calendarImg" alt="Calendar" class="w-5 h-5" />
          <span>Calendar</span>
        </NuxtLink>
      </div>
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/profile" class="flex flex-col items-center text-center text-xs font-montserrat"
        :class="profileColor">
          <img :src="profileImg" alt="Profile" class="w-5 h-5" />
          <span>Profile</span>
        </NuxtLink>
      </div>
    </footer>

  </div>
</template>

<style scoped></style>
