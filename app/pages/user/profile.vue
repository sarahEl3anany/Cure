<script setup lang="ts">
import UserAvatar from '@/assets/images/home/defaultUser.png'
import Location from '@/assets/icons/home/location.svg'
import Banknote from '@/assets/icons/home/user/banknote.svg'
import Messages from '@/assets/icons/home/user/messages.svg'
import Logout from '@/assets/icons/home/user/logout.svg'
import Lock from '@/assets/icons/home/user/lock.svg'
import Heart from '@/assets/icons/home/heart.svg'
import Bell from '@/assets/icons/home/bell.svg'
definePageMeta({
    layout: 'no-header-footer'
})
const checked = ref(true)
</script>
<template>
    <div class="px-6 w-full space-y-4 mt-6">
        <div class="flex items-center p-2 bg-neutral-50 rounded-lg">
            <div class="flex w-full items-start gap-2">
                <NuxtLink to="/user/edit">
                    <img class="w-14 h-14 rounded-full m-1" :src=UserAvatar alt="User avatar" />
                </NuxtLink>
                <div class="flex flex-col items-start gap-1 mt-1">
                    <p class="font-georgia text-secondary-500 dark:text-secondary-50 text-xl ">
                        <NuxtLink to="/user/edit">
                            Seif Mohamed
                        </NuxtLink>
                    </p>
                    <div class="flex items-start">
                        <NuxtLink to="/user/location">
                            <Location class="w-3 h-3 text-neutral-500" />
                        </NuxtLink>
                        <div class="flex items-center gap-1">
                            <span class="text-neutral-700 text-montserrat text-xs">
                                <NuxtLink to="/user/location">
                                    129,El-Nasr Street, Cairo
                                </NuxtLink>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-end">
                <NuxtLink to="/user/edit">
                    <i class="mdi mdi-chevron-right text-3xl text-neutral-500"></i>
                </NuxtLink>
            </div>
        </div>
        <div class="flex items-center justify-between mt-2 p-3 rounded-md bg-neutral-50">
            <div class="flex items-center gap-2">
                <Bell class="w-5 h-5 text-black" />
                <span class="font-montserrat text-base text-secondary-500">Notification</span>
            </div>
            <ToggleSwitch v-model="checked" class="text-green-500" />
        </div>
        <div class="flex items-center justify-between mt-2 p-3 rounded-md bg-neutral-50">
            <div class="flex items-center gap-2">
                <Banknote class="w-5 h-5 text-secondary-500" />
                <span class="font-montserrat text-base text-secondary-500">Payment Method</span>
            </div>
            <i class="mdi mdi-chevron-right text-3xl text-neutral-500"></i>
        </div>
        <div class="flex items-center justify-between mt-2 p-3 rounded-md bg-neutral-50">
            <div class="flex items-center gap-2">
                <Heart class="w-5 h-5 text-secondary-500" />
                <span class="font-montserrat text-base text-secondary-500">Favourite</span>
            </div>
            <i class="mdi mdi-chevron-right text-3xl text-neutral-500"></i>
        </div>
        <NuxtLink to="/user/settings">
            <div class="flex items-center justify-between mt-2 p-3 rounded-md bg-neutral-50">
                <div class="flex items-center gap-2">
                    <i class="mdi mdi-cog-outline text-secondary-500 text-2xl"></i>
                    <span class="font-montserrat text-base text-secondary-500">Settings</span>
                </div>
                <i class="mdi mdi-chevron-right text-3xl text-neutral-500"></i>
            </div>
        </NuxtLink>
        <NuxtLink to="/user/faqs">
            <div class="flex items-center justify-between mt-2 p-3 rounded-md bg-neutral-50">
                <div class="flex items-center gap-2">
                    <Messages class="w-5 h-5 text-secondary-500" />
                    <span class="font-montserrat text-base text-secondary-500">FAQs</span>
                </div>
                <i class="mdi mdi-chevron-right text-3xl text-neutral-500"></i>
            </div>
        </NuxtLink>
        <NuxtLink to="/user/privacy">
        <div class="flex items-center justify-between mt-2 p-3 rounded-md bg-neutral-50">
            <div class="flex items-center gap-2">
                <Lock class="w-5 h-5 text-secondary-500" />
                <span class="font-montserrat text-base text-secondary-500">Privacy Policy</span>
            </div>
            <i class="mdi mdi-chevron-right text-3xl text-neutral-500"></i>
        </div>
        </NuxtLink>
        <div class="flex items-center justify-between mt-2 p-3 rounded-md bg-neutral-50">
            <div class="flex items-center gap-2">
                <Logout class="w-5 h-5 text-red-500" />
                <span class="font-montserrat text-base text-red-500">Logout</span>
            </div>
        </div>
    </div>
</template>
