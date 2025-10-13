<script setup lang="ts">
import Home from '@/assets/icons/home/footer/home.svg'

import Calendar from '@/assets/icons/home/footer/calendar.svg'

import Profile from '@/assets/icons/home/footer/profile.svg'
import Chat from '@/assets/icons/home/footer/chat.svg'
const route = useRoute()

const isHome = computed(() => route.path === '/home')
const isBooking = computed(() => route.path === '/user/booking')
const isProfile = computed(() => route.path === '/profile')
const isChat = computed(() => route.path === '/chat')
</script>
<template>
    <footer class="bg-white flex items-center justify-between bottom bottom-0 w-full px-5 mt-4">
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/" class="flex flex-col items-center text-center text-xs font-montserrat"
        :class="isHome ? 'text-primary-500' : 'text-neutral-500'">
           <Home class="w-5 h-5" />
          <span>Home</span>
        </NuxtLink>
      </div>
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/user/booking" class="flex flex-col items-center text-center text-xs font-montserrat"
        :class="isBooking ? 'text-primary-500' : 'text-neutral-500'">
           <Calendar class="w-5 h-5" />
          <span>Booking</span>
        </NuxtLink>
      </div>
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/chat" class="flex flex-col items-center text-center text-xs font-montserrat"
        :class="isChat ? 'text-primary-500' : 'text-neutral-500'">
           <Chat class="w-5 h-5" />
          <span>Chat</span>
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