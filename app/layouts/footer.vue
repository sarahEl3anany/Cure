<script setup lang="ts">
import home from '@/assets/images/home/footer/home.svg'
import homeA from '@/assets/images/home/footer/home-active.svg'

import calendar from '@/assets/images/home/footer/calendar.svg'
import calendarA from '@/assets/images/home/footer/calendar-active.svg'

import profile from '@/assets/images/home/footer/profile.svg'
import profileA from '@/assets/images/home/footer/profile-active.svg'
const route = useRoute()

const isHome = computed(() => route.path === '/home')
const isCalendar = computed(() => route.path === '/calendar')
const isProfile = computed(() => route.path === '/profile')
</script>
<template>
    <footer class="bg-white h-12 flex items-center justify-between bottom bottom-0 w-full px-5 mt-4">
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/" class="flex flex-col items-center text-center text-xs font-montserrat"
        :class="isHome ? 'text-primary-500' : 'text-neutral-500'">
          <img :src="isHome ? homeA : home" alt="Home" class="w-5 h-5" />
          <span>Home</span>
        </NuxtLink>
      </div>
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/calendar" class="flex flex-col items-center text-center text-xs font-montserrat"
        :class="isCalendar ? 'text-primary-500' : 'text-neutral-500'">
          <img :src="isCalendar ? calendarA : calendar" alt="Calendar" class="w-5 h-5" />
          <span>Calendar</span>
        </NuxtLink>
      </div>
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/profile" class="flex flex-col items-center text-center text-xs font-montserrat"
        :class="isProfile ? 'text-primary-500' : 'text-neutral-500'">
          <img :src="isProfile ? profileA : profile" alt="Profile" class="w-5 h-5" />
          <span>Profile</span>
        </NuxtLink>
      </div>
    </footer>
</template>