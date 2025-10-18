<script setup lang="ts">
import user from '@/assets/images/home/user/1.png'
import Location from '@/assets/icons/home/location.svg'
import Calendar from '@/assets/icons/home/footer/calendar.svg'

definePageMeta({
    layout: 'no-header-footer'
})

const props = defineProps<{
    daysCount?: number
    startOffset?: number
}>()

const emits = defineEmits<{
    (e: 'update:selected', value: string): void
}>()

const daysCount = props.daysCount ?? 14
const startOffset = props.startOffset ?? 0

const locale = 'en-US'
const weekdayFormatter = new Intl.DateTimeFormat(locale, { weekday: 'short' })
const dayNumFormatter = new Intl.DateTimeFormat(locale, { day: 'numeric' })

const today = new Date()
const dates = computed(() => {
    const arr: { date: Date; iso: string; weekday: string; dayNum: string; isToday: boolean }[] = []
    for (let i = 0; i < daysCount; i++) {
        const d = new Date()
        d.setDate(today.getDate() + (startOffset + i))
        const iso = d.toISOString().slice(0, 10)
        const weekday = weekdayFormatter.format(d)
        const dayNum = dayNumFormatter.format(d)
        const isToday = d.toDateString() === today.toDateString()
        arr.push({ date: d, iso, weekday, dayNum, isToday })
    }
    return arr
})

const selected = ref<string>(
    (() => {
        const todayIso = today.toISOString().slice(0, 10)
        const found = dates.value.find(d => d.isToday)
        return found ? found.iso : (dates.value[0]?.iso ?? todayIso)
    })()
)

function selectDate(iso: string) {
    selected.value = iso
    emits('update:selected', iso)
}
</script>
<template>
    <div>
        <h1 class="text-secondary-500 font-georgia text-xl">My Booking</h1>
        <div class="w-full">
            <div class="flex items-center gap-3 overflow-x-auto py-2 px-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300"
                role="list">
                <div v-for="day in dates" :key="day.iso">
                    <button type="button" role="listitem" @click="selectDate(day.iso)"
                        :aria-pressed="selected === day.iso" class="flex items-center flex-shrink-0 w-12 snap-center rounded-xl p-2 text-center transition-all duration-150
                 shadow-sm
                 focus:outline-none focus:ring-primary-500 hover:shadow-md justify-center" :class="day.iso === selected
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-50 text-neutral-700'">
                        <div class="flex flex-col items-center">
                            <span class="text-center text-sm font-montserratMedium">
                                {{ day.weekday }}
                            </span>
                            <span class="text-center text-base font-montserratMedium">
                                {{ day.dayNum }}
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div class="w-full px-8 max-sm:px-1 mt-2">
            <div class="border border-neutral-50 rounded-2xl p-4">
                <div class="my-2">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <Calendar class="w-5 h-5 text-secondary-500" />
                            <span class="font-montserratMedium text-sm text-secondary-500">Friday, July 17
                                -4:00pm</span>
                        </div>
                        <div class="flex items-center gap-2 font-montserrat text-sm text-primary-500">
                            <span>Upcoming</span>
                        </div>
                    </div>
                    <div>
                        <Divider />
                    </div>
                    <div>
                        <div class="flex w-full items-start gap-2">
                            <NuxtLink to="/user/profile">
                                <img class="w-18 h-14 rounded-full" :src=user alt="User avatar" />
                            </NuxtLink>
                            <div class="flex flex-col items-start">
                                <p class="font-georgia text-secondary-500 text-base ">
                                    Jennifer Miller
                                </p>
                                <div class="text-neutral-500 font-montserrat text-sm">Psychiatrist</div>
                            </div>
                        </div>
                        <div class="flex items-start pl-2">
                            <NuxtLink to="/user/location">
                                <Location class="w-3 h-3 text-neutral-500" />
                            </NuxtLink>
                            <div class="flex items-center gap-1">
                                <span class="text-neutral-700 text-montserrat text-xs">
                                    129,El-Nasr Street, Cairo, Egypt
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center mt-4 w-full gap-10">
                        <Button class="bg-white text-primary-500 border border-neutral-500 rounded-md w-1/4 max-sm:w-1/2 max-sm:mx-2">
                            <span class="font-montserratMedium text-sm text-neutral-500">Cancel</span>
                        </Button>
                        <Button class="bg-primary-500 text-white border border-neutral-500 rounded-md w-1/4 max-sm:w-1/2 max-sm:mx-2">
                            <span class="font-montserratMedium text-sm text-white">Reschedule</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
