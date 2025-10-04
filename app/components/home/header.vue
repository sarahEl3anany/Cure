<script setup lang="ts">
import userAvatar from '@/assets/images/home/defaultUser.svg'
import arrowDown from '@/assets/images/home/arrowDown.svg'
import location from '@/assets/images/home/location.svg'
import bell from '@/assets/images/home/bell.svg'
import heart from '@/assets/images/home/heart.svg'

let avatar = process.client ? sessionStorage.getItem('avatar') : undefined;
if (!avatar) {
    avatar = useCookie('avatar').value ? useCookie('avatar').value : undefined
    if (!avatar) {
        avatar = userAvatar
    }
}
</script>
<template>
    <header class="flex w-screen items-center justify-between relative top-2 px-2">
        <div class="flex w-full items-start gap-2">
            <NuxtLink to="/profile">
                <img class="w-10 h-10 rounded-full" 
                :src=avatar alt="User avatar" />
            </NuxtLink>
            <div class="flex flex-col items-start">
                <p
                class="text-georgia text-secondary-500 text-sm ">
                    Welcome back, 
                   <NuxtLink to="/profile"> Seif
                    </NuxtLink>
                </p>
                <div class="flex items-start">
                    <img class="w-3 h-3" :src=location alt="Location icon" />
                    <div class="flex items-center gap-1">
                        <span
                            class="text-neutral-700 text-montserrat text-xs">
                            129,El-Nasr Street, Cairo
                        </span>
                        <img class="w-3 h-3" :src=arrowDown alt="Dropdown arrow" />
                    </div>
                </div>
            </div>
        </div>
        <nav class="flex items-end gap-4">
            <NuxtLink type="button" to="/favorites"
                class="w-8 h-8 flex items-center justify-center gap-2 p-2 bg-white rounded-full shadow-[0px_0px_13px_#22222226]"
                aria-label="Notifications">
                <img class="w-3 h-3" :src=heart alt="Favorites" />
            </NuxtLink>
            <NuxtLink type="button" to="/notifications"
                class="w-8 h-8 flex items-center justify-center gap-2 p-2 bg-white rounded-full shadow-[0px_0px_13px_#22222226]"
                aria-label="Notifications">
                <img class="w-3 h-3" :src=bell alt="Notification bell" />
            </NuxtLink>
        </nav>
    </header>
</template>
