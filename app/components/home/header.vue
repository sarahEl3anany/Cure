<script setup lang="ts">
import UserAvatar from '@/assets/images/home/defaultUser.png'
import Location from '@/assets/icons/home/location.svg'
import Bell from '@/assets/icons/home/bell.svg'

let avatar = process.client ? sessionStorage.getItem('avatar') : undefined;
if (!avatar) {
    avatar = useCookie('avatar').value ? useCookie('avatar').value : undefined
    if (!avatar) {
        avatar = UserAvatar
    }
}
</script>
<template>
    <header class="flex w-full items-center justify-between relative top-2 px-2">
        <div class="flex w-full items-start gap-2">
            <NuxtLink to="/profile">
                <img class="w-10 h-10 rounded-full" 
                :src=avatar alt="User avatar" />
            </NuxtLink>
            <div class="flex flex-col items-start">
                <p
                class="font-georgia text-secondary-500 dark:text-secondary-50 text-sm ">
                    Welcome back, 
                   <NuxtLink to="/profile"> Seif
                    </NuxtLink>
                </p>
                <div class="flex items-start">
                    <NuxtLink to="/user/location">
                        <Location class="w-3 h-3 text-neutral-500" />
                    </NuxtLink>
                    <div class="flex items-center gap-1">
                        <span
                            class="text-neutral-700 text-montserrat text-xs">
                            <NuxtLink to="/user/location">
                                129,El-Nasr Street, Cairo
                            </NuxtLink>
                        </span>
                        <i class="pi pi-angle-down text-neutral-500"></i>
                    </div>
                </div>
            </div>
        </div>
        <nav class="flex items-end gap-4">
            <NuxtLink type="button" to="/home/favourites"
                class="w-8 h-8 flex items-center justify-center gap-2 p-2 bg-white rounded-full shadow-[0px_0px_13px_#22222226]"
                aria-label="Notifications">
                <i class="pi pi-heart color-[#1C274C] "></i>
            </NuxtLink>
            <NuxtLink type="button" to="/home/notifications"
                class="w-8 h-8 flex items-center justify-center gap-2 p-2 bg-white rounded-full shadow-[0px_0px_13px_#22222226]"
                aria-label="Notifications">
                <Bell class="w-5 h-5 text-black" />
            </NuxtLink>
        </nav>
    </header>
</template>
