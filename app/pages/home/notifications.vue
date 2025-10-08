<script setup lang="ts">
import notifications from '@/assets/images/home/notifications/zzz.svg'
import NotificationItems from '@/components/home/notification.vue';
import type { Notification } from '@/types/notification';
const allNotifications = ref<Notification[]>([
    {
        id: 1,
        title: 'Upcoming Appointment',
        content: 'Reminder: You have an appointment with...',
        date: '1h',
        isRead: false
    },
    {
        id: 2,
        title: 'Appointment completed',
        content: 'You have successfully booked your appointment with Dr. Emily Walker.',
        date: '3h',
        isRead: true
    },
    {
        id: 3,
        title: 'Appointment Cancelled',
        content: 'You have successfully booked your appointment with Dr. Emily Walker.',
        date: '4h',
        isRead: false
    }
])
</script>
<template>
    <div class="flex flex-col items-center w-full">
        <div class="flex flex-row items-center w-full mt-3">
            <NuxtLink to="/home">
                <i class="pi pi-arrow-left justify-start ml-3"></i>
            </NuxtLink>
            <div class="text-center mx-auto">
                <h3 class="font-georgia text-black dark:text-primary-50 text-2xl">Notifications</h3>
            </div>
        </div>
        <div v-if="allNotifications.length > 0" class="w-full">
            <div class="font-montserratMedium text-base text-primary-500 mt-3 p-3">Today</div>
            <NotificationItems :notifications="allNotifications" /> 
        </div>
        <div class="flex flex-col items-center justify-center px-4 text-center" v-else>
            <img :src="notifications" alt="Notifications" class="mx-1/5 pt-4 max-w-sm max-h-sm" />
            <div class="gap-4 mt-3">
            <h3 class="font-georgia text-black dark:text-primary-50 max-lg:text-2xl max-xs:text-base">Nothing to display here!</h3>
            <p class="font-montserrat text-neutral-700 dark:text-secondary-50 text-base max-xs:text-sm mt-1">
                We’ll notify you once we have new notifications.
            </p>
            </div>
        </div>
    </div>
</template>