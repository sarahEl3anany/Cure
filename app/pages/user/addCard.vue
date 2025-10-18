<script setup lang="ts">
import BlueVisa from '@/assets/images/home/user/blueVisa.png'

import { useHeader } from '@/composables/useHeader'
const { headerTitle, backRoute, showHeader } = useHeader()
onMounted(() => {
    headerTitle.value = 'Payment Method'
    backRoute.value = '/user/paymentMethod'
    showHeader.value = true
})
definePageMeta({
    layout: 'header-no-footer'
})
</script>
<template>
    <div class="w-full">
            <img :src="BlueVisa" alt="Cards Image" class="w-[200px] h-[200px] rounded-lg" />
    </div>
    
</template>