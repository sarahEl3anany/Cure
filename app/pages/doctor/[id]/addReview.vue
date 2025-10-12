<script setup lang="ts">
import StarLine from '@/assets/icons/home/doctors/star-1.svg'
import { useHeader } from '@/composables/useHeader'
const { showHeader, backRoute, headerTitle } = useHeader()
const doctorID = useRoute().params.id
onMounted(() => {
    showHeader.value = true
    backRoute.value = `/doctor/${doctorID}/profile`
    headerTitle.value = 'Review'
})

</script>
<template>
    <div class="px-4 w-full">
        <div class="w-full">
            <div class="flex items-center justify-between mt-2">
                <span class="font-georgia text-xl text-secondary-500">Your Rate</span>
            </div>
        </div>
        <div class="w-full px-2">
            <div class="flex items-center justify-between ">
                <div class="flex space-x-1">
                    <StarLine v-for="i in 5" :key="i" class="h-3 w-3 "
                        :class="(i <= 4 ? 'text-[#F9E000]' : 'text-[#E6E8EA]')" />
                </div>
                <h1 class="text-secondary-500 font-georgia text-[40px]">4/5</h1>
            </div>
        </div>
    </div>
</template>