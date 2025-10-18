<script setup lang="ts">
import { useHeader } from '@/composables/useHeader'
const { headerTitle, backRoute, showHeader } = useHeader()
onMounted(() => {
  headerTitle.value = 'Privacy Policy'
  backRoute.value = '/user/profile'
  showHeader.value = true
})
definePageMeta({
  layout: 'header-no-footer'
})
</script>
<template>
    <div class="px-6 w-full space-y-4 mt-6">
        <div class="flex items-center">
            <span class="font-georgia text-xl">Last Updated: </span>
            <span class="font-montserratMedium text-xl text-neutral-700"> &nbsp;19/11/2024</span>
        </div>
        <div class="flex items-center">
            <p class="font-montserratMedium text-base text-neutral-700">
                Welcome to Cure. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our doctor appointment booking app.
            </p>
        </div>
        <div class="flex items-center">
            <h3 class="font-georgia text-2xl text-secondary-500">terms & conditions</h3>
        </div>
        <div class="flex items-center">
            <p class="font-montserratMedium text-base text-neutral-700">
                By registering, accessing, or using this app, you confirm that you are at least 18 years old (or have parental/guardian consent if younger) and agree to be bound by these Terms and our Privacy Policy.
            </p>
        </div>
        <div class="text-neutral-700 font-montserratMedium text-base">
            <div>You agree to:</div>
            <ul class="list-disc list-inside">
                <li>Use the app only for lawful purposes.</li>
                <li>Provide accurate and complete information during registration and booking.</li>
                <li>Not impersonate others or create fake accounts.</li>
            </ul>
            <div>You may not:</div>
            <ul class="list-disc list-inside">
                <li>Disrupt or interfere with the app’s functionality.</li>
                <li>Try to access data or systems not meant for you.</li>
                <li>Use the app to harass or abuse doctors or staff. </li>
            </ul>
            <div>Your data is handled in accordance with our [Privacy Policy]. You are responsible for keeping your login credentials secure.</div>
        </div>
    </div>
</template>