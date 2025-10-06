<script setup lang="ts">
import type { Notification } from '@/types/notification';

const props = defineProps({
    notifications: {
        type: Array as PropType<Notification[]>
    }
})
</script>
<template>
    <div class="w-full">
        <div 
            v-for="(value, key) in notifications" 
            :key="key" 
            class="flex items-center border-0 gap-3 h-20 p-2"
            :class="value.isRead ? 'bg-neutral-50' : ' bg-white '"
            >
            <div class="w-8 h-8 flex items-center justify-center rounded-full bg-primary-50">
                <i class="pi pi-check text-primary-500 text-sm"></i>
            </div>
            <div class="flex flex-col flex-1">
                <div class="font-georgia text-base text-secondary-500">
                    {{ value.title }}
                </div>
                <div class="font-montserrat text-sm text-neutral-700 ">
                    {{ value.content.slice(0, 40)+'...' }}
                </div>
            </div>
            <div class="text-neutral-500 font-montserratMedium text-xs">
                {{ value.date }}
            </div>
        </div>
    </div>
</template>
