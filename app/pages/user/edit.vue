<script setup lang="ts">
import UserAvatar from '@/assets/images/home/defaultUser.png'
import Camera from '@/assets/icons/home/user/camera.svg'
import Location from '@/assets/icons/home/location.svg'
import { useHeader } from '@/composables/useHeader'
import Phone from '@/components/phone.vue'

const { headerTitle, backRoute, showHeader } = useHeader()

onMounted(async () => {
  headerTitle.value = ''
  backRoute.value = '/user/profile'
  showHeader.value = true
})

const days = Array.from({ length: 31 }, (_, i) => ({ label: `${i + 1}`, value: i + 1 }))
const months = [
  { label: 'January', value: 'January' },
  { label: 'February', value: 'February' },
  { label: 'March', value: 'March' },
  { label: 'April', value: 'April' },
  { label: 'May', value: 'May' },
  { label: 'June', value: 'June' },
  { label: 'July', value: 'July' },
  { label: 'August', value: 'August' },
  { label: 'September', value: 'September' },
  { label: 'October', value: 'October' },
  { label: 'November', value: 'November' },
  { label: 'December', value: 'December' },
]

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 100 }, (_, i) => ({
  label: `${currentYear - i}`,
  value: currentYear - i
}))

const selectedDay = ref<number | null>(null)
const selectedMonth = ref<string | null>(null)
const selectedYear = ref<number | null>(null)
</script>

<template>
    <div class="flex flex-col items-center mt-1 space-y-3">
        <div class="relative inline-block">
            <img class="w-20 h-20 max-sm:w-20 max-sm:h-20 rounded-full object-cover " :src="UserAvatar"
                alt="User avatar" />
            <div class="absolute bottom-0 right-1 translate-y-1/4 rounded-full h-7 w-7 flex items-center justify-center 
                border-2 border-transparent 
                [background:linear-gradient(white,white)_padding-box,linear-gradient(298.94deg,#145DB8_3.93%,#FFFFFF_57.84%)_border-box] 
                shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
                <Camera class="w-4 h-4 text-primary-500" />
            </div>
        </div>
        <p class="text-secondary-500 font-georgia text-xl">Seif Mohamed</p>
        <div class="flex items-center text-neutral-700 text-sm">
            <Location class="w-3 h-3 text-neutral-700" />
            <span>129, El-Nasr Street, Cairo</span>
            <i class="mdi mdi-chevron-down text-lg ml-1 text-neutral-700"></i>
        </div>
        <div>
            <!-- <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="saveUser"> -->
                <div class="w-full  space-y-4 mt-5">
                    <div>
                        <div class="flex items-center rounded-xl bg-neutral-50 px-4 gap-2">
                            <i class="mdi mdi-email text-neutral-500 font-montserratMedium text-lg"></i>
                            <InputText placeholder="Email" name="email"
                                class="w-full font-montserratMedium border-none text-neutral-500 bg-neutral-50 outline-none focus:ring-0 focus:outline-none" />
                        </div>
                        <!-- <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">
                            {{ $form.email.error?.message }}
                        </Message> -->
                    </div>
                    <div>
                        <div class="flex items-center rounded-lg bg-neutral-50 px-4 gap-2">
                            <i class="mdi mdi-account text-neutral-500 font-montserratMedium text-lg"></i>
                            <InputText placeholder="Full Name" name="name"
                                class="w-full font-montserratMedium border-none text-neutral-500 bg-neutral-50 outline-none focus:ring-0 focus:outline-none" />
                        </div>
                        <!-- <Message v-if="$form.name?.invalid" severity="error" size="small" variant="simple">
                            {{ $form.name.error?.message }}
                        </Message> -->
                    </div>
                    <Phone />
                    <div class="text-secondary-500 text-base font-montserrat">
                        Select your birthday
                    </div>
                    <div class="flex items-center gap-2">
                        <Select name="day" v-model="selectedDay" optionLabel="label" optionValue="value"
                            placeholder="Day" :options="days" fluid class="border-0 bg-neutral-50" />
                        <Select name="month" v-model="selectedMonth" optionLabel="label" optionValue="value"
                            placeholder="Month" :options="months" fluid class="border-0 bg-neutral-50" />
                        <Select name="year" v-model="selectedYear" optionLabel="label" optionValue="value"
                            placeholder="Year" :options="years" fluid class="border-0 bg-neutral-50 text-center" />
                    </div>
                    <Button type="submit" class="w-full text-base h-12 text-white rounded-lg font-montserratMedium">
                        Edit Profile
                    </Button>
                </div>
            <!-- </Form> -->
        </div>
    </div>
</template>
