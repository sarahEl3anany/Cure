<script setup lang="ts">
import KeySquare from '@/assets/icons/sign-up/KeySquare2.svg'
import User from '@/assets/icons/home/user/user.svg'
import { useHeader } from '@/composables/useHeader'
const { headerTitle, backRoute, showHeader } = useHeader()
onMounted(() => {
  headerTitle.value = 'Settings'
  backRoute.value = '/user/profile'
  showHeader.value = true
})
definePageMeta({
  layout: 'header-no-footer'
})

</script>

<template>
    <div class="px-6 w-full space-y-4 mt-6">
        <NuxtLink to="/user/changePassword">
            <div class="flex items-center justify-between mt-2 p-3 rounded-md bg-neutral-50">
                <div class="flex items-center gap-2">
                    <KeySquare class="w-5 h-5 text-secondary-500" />
                    <span class="font-montserrat text-base text-secondary-500">Password Management</span>
                </div>
                <i class="mdi mdi-chevron-right text-3xl text-neutral-500"></i>
            </div>
        </NuxtLink>
        <NuxtLink to="/user/delete">
            <div class="flex items-center justify-between mt-5 p-3 rounded-md bg-neutral-50">
                <div class="flex items-center gap-2">
                    <User class="w-5 h-5 text-secondary-500" />
                    <span class="font-montserrat text-base text-secondary-500">Delete Account</span>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>
