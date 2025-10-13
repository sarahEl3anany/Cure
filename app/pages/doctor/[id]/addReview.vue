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


const router = useRouter()
const visible = ref(false)

const confirmSend = () => {
    visible.value = true
}

const goHome = () => {
    visible.value = false
    router.push('/home')
}
</script>
<template>
    <div class="px-4 w-full">
        <Dialog v-model:visible="visible" modal :draggable="false" :closable="false"
            class="w-96 max-md:w-40 rounded-3xl shadow-lg" contentClass="bg-white text-center rounded-3xl py-8">
            <p class="text-2xl font-georgia text-secondary-500 mb-6">
                Thanks for your review
            </p>

            <Button label="Done" class="w-3/4 h-10 bg-secondary-500 text-white rounded-full font-montserratMedium"
                @click="router.push(`/doctor/${doctorID}/profile`)" />

            <p class="mt-4 text-sm text-neutral-400 cursor-pointer hover:underline" @click="goHome">
                Back to Home
            </p>
        </Dialog>
        <div class="w-full">
            <div class="flex items-center justify-between mt-2">
                <span class="font-georgia text-xl text-secondary-500">Your Rate</span>
            </div>
        </div>
        <div class="w-full px-2">
            <div class="flex items-center justify-between ">
                <div class="flex space-x-1">
                    <StarLine v-for="i in 5" :key="i" class="h-3 w-3 "
                        :class="(i <= 4 ? 'text-[#F9E000]' : 'text-secondary-100')" />
                </div>
                <h1 class="text-secondary-500 font-georgia text-[40px]">4/5</h1>
            </div>
        </div>
        <div class="w-full">
            <div class="flex items-center justify-between mt-2">
                <span class="font-georgia text-xl text-secondary-500">Your review</span>
            </div>
        </div>
        <div class="flex flex-col gap-1 pt-3">
            <FloatLabel variant="review">
                <Textarea id="revTxt" rows="5" cols="30" class="border border-neutral-500 rounded-2xl" />
                <label for="revTxt" class="font-montserratMedium text-neutral-700 text-sm">Write your review</label>
            </FloatLabel>
        </div>
        <div class="flex items-center justify-center py-6">
            <Button type="submit" @click="confirmSend"
                class="flex w-1/2 flex-col items-center text-base max-sm:text-sm h-12 text-white rounded-lg font-montserratMedium">
                Send your review
            </Button>
        </div>
    </div>
</template>
<style scoped>
#revTxt {
    resize: none;
}
</style>