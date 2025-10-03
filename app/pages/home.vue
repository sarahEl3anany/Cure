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
    <header class="flex w-full items-center justify-center relative">
        <div class="flex items-left gap-4">
            <img class="w-10 h-10 rounded-full" 
            :src=avatar alt="User avatar" />
            <div class="flex flex-col items-start">
                <p
                class="text-georgia text-secondary-500">
                    Welcome back, Seif
                </p>

                <div class="flex items-center">
                    <img class="w-4 h-4" :src=location alt="Location icon" />
                    <div class="flex items-center gap-2 ml-1">
                        <span
                            class="text-neutral-500 text-montserrat">
                            129,El-Nasr Street, Cairo
                        </span>
                        <img class="w-4 h-4" :src=arrowDown alt="Dropdown arrow" />
                    </div>
                </div>
            </div>
        </div>
        <nav class="flex items-right gap-4">
            <button type="button"
                class="flex items-center justify-center gap-2 p-2 bg-white rounded-[11px] shadow-[0px_0px_13px_#22222226]"
                aria-label="Favorites">
                <img class="w-4 h-4" :src=heart alt="Favorites" />
            </button>

            <button type="button"
                class="flex items-center justify-center gap-2 p-2 bg-white rounded-[11px] shadow-[0px_0px_13px_#22222226]"
                aria-label="Notifications">
                <img class="w-4 h-4" :src=bell alt="Notification bell" />
            </button>
        </nav>
    </header>
</template>