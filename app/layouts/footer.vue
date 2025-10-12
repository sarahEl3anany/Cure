<script setup lang="ts">
import Home from '@/assets/icons/home/footer/home.svg'

import Calendar from '@/assets/icons/home/footer/calendar.svg'

import Profile from '@/assets/icons/home/footer/profile.svg'
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
           <Home class="w-5 h-5" />
          <span>Home</span>
        </NuxtLink>
      </div>
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/calendar" class="flex flex-col items-center text-center text-xs font-montserrat"
        :class="isCalendar ? 'text-primary-500' : 'text-neutral-500'">
           <Calendar class="w-5 h-5" />
          <span>Calendar</span>
        </NuxtLink>
      </div>
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/profile" class="flex flex-col items-center text-center text-xs font-montserrat"
        :class="isProfile ? 'text-primary-500' : 'text-neutral-500'">
           <Profile class="w-5 h-5" />
          <span>Profile</span>
        </NuxtLink>
      </div>
    </footer>
</template>