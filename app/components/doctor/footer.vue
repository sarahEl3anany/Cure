<script setup lang="ts">
const doctorID = useRoute().params.id
const props = defineProps({
    labelText: String,
    navigateTo: {
        type: String,
        default: ''
    },
    handleClick: {
        type: Function,
        default: (event: PointerEvent) => {}
    }
})
</script>
<template>
    <div>
        <div class="flex items-center justify-between p-2">
            <div>
                <span class="text-secondary-400 font-montserratMedium text-2xl">Price</span>
                <span class="text-[#555B6C] font-montserratMedium text-xs">\ hour</span>
            </div>
            <div class="text-red-400 font-montserratMedium text-base">
                350$
            </div>
        </div>
        <NuxtLink :to="navigateTo" class="w-full" v-if="navigateTo">
            <div class="flex items-center justify-center pb-2">
                <Button type="submit"
                    class="flex w-1/2 flex-col items-center text-base max-sm:text-sm h-12 text-white rounded-lg font-montserratMedium">
                    {{ labelText }}
                </Button>
            </div>
        </NuxtLink>
        <div class="flex items-center justify-center pb-2" v-else>
            <Button type="submit" @click="handleClick?.()"
                class="flex w-1/2 flex-col items-center text-base max-sm:text-sm h-12 text-white rounded-lg font-montserratMedium">
                {{ labelText }}
            </Button>
        </div>
    </div>
</template>