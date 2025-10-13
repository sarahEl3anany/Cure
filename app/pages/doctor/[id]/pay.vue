<script setup lang="ts">
import ProfileHeader from '@/components/doctor/header.vue';
import ProfileFooter from '@/components/doctor/footer.vue';
import { useHeader } from '@/composables/useHeader'
import Calendar from '@/assets/icons/home/footer/calendar.svg'
import FinishPay from '@/assets/icons/home/doctors/finishPay.svg'
import Visa from '@/assets/icons/home/doctors/visa.svg'
import PayPal from '@/assets/icons/home/doctors/paypal.svg'
import ApplePay from '@/assets/icons/home/doctors/applePay.svg'
import Pen from '@/assets/icons/home/doctors/pen.svg'

const { showHeader, backRoute, headerTitle } = useHeader()
const doctorID = useRoute().params.id
const router = useRouter()

onMounted(() => {
    showHeader.value = true
    backRoute.value = `/doctor/${doctorID}/book`
    headerTitle.value = 'Book Appointment'
})

const selectedPayment = ref('visa')
const visible = ref(false)

const confirmPay = () => {
    visible.value = true
}
const goHome = () => {
    visible.value = false
}
</script>

<template>
    <div class="px-4">
        <Dialog v-model:visible="visible" modal :draggable="false" :closable="false"
            class="w-96 max-md:w-40 rounded-3xl shadow-lg" contentClass="bg-white text-center rounded-3xl py-8">
            <FinishPay class="w-24 h-24 mx-auto pb-5" />
            <p class="text-xl font-semibold text-secondary-500 mb-6">
                Congratulations!
            </p>
            <p class="text-sm text-neutral-500 ">
                Your appointment with Dr. David Patel is confirmed for June 30, 2023, at 10:00 AM.
            </p>
            <Button label="Done" class="w-3/4 h-10 bg-secondary-500 text-white rounded-full font-montserratMedium"
                @click="goHome" />
            <p class="mt-4 text-sm text-neutral-400 cursor-pointer hover:underline"
                @click="router.push(`/doctor/${doctorID}/book`)">
                Edit your appointment
            </p>
        </Dialog>

        <ProfileHeader />
        <div class="text-xl font-georgia text-secondary-500 mb-3">Payment Method</div>
        <div class="w-full">
            <div class="flex items-center justify-between mt-2">
                <div class="flex items-center gap-2">
                    <Calendar class="w-5 h-5 text-primary-500" />
                    <span class="font-montserratMedium text-sm text-secondary-500">Friday, July 17 -4:00pm</span>
                </div>
                <NuxtLink :to="`/doctor/${doctorID}/reschedule`" class="font-montserrat text-sm text-primary-500">
                    <div class="flex items-center gap-2">
                        <Pen class="flex-1 h-3 w-3 text-primary-500" />
                        <span>Reschedule</span>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="w-full mt-4">
            <div class="flex flex-col gap-3">
                <label
                    class="flex items-center justify-between rounded-md p-3 cursor-pointer transition-all duration-200"
                    :class="selectedPayment === 'visa'
                        ? 'bg-green-50 border-green-500 text-green-500'
                        : 'bg-white border-gray-300 text-neutral-700'">
                    <div class="flex items-center gap-3">
                        <div class="w-6 h-6 flex items-center justify-center rounded-full border transition-all duration-200"
                            :class="selectedPayment === 'visa'
                                ? 'bg-green-500 border-green-500'
                                : 'border-neutral-700 bg-white'">
                            <i class="mdi mdi-check text-white" v-if="selectedPayment === 'visa'"></i>
                        </div>
                        <span class="font-montserratMedium text-base">Credit Card</span>
                    </div>
                    <Visa class="w-8 h-8" />
                    <input type="radio" v-model="selectedPayment" value="visa" name="payment" class="hidden" />
                </label>

                <label
                    class="flex items-center justify-between rounded-md p-3 cursor-pointer transition-all duration-200"
                    :class="selectedPayment === 'paypal'
                        ? 'bg-green-50 border-green-500 text-green-500'
                        : 'bg-white border-gray-300 text-neutral-700'">
                    <div class="flex items-center gap-3">
                        <div class="w-6 h-6 flex items-center justify-center rounded-full border transition-all duration-200"
                            :class="selectedPayment === 'paypal'
                                ? 'bg-green-500 border-green-500'
                                : 'border-neutral-700 bg-white'">
                            <i class="mdi mdi-check text-white" v-if="selectedPayment === 'paypal'"></i>
                        </div>
                        <span class="font-montserratMedium text-base">PayPal</span>
                    </div>
                    <PayPal class="w-8 h-8" />
                    <input type="radio" v-model="selectedPayment" value="paypal" name="payment" class="hidden" />
                </label>

                <label
                    class="flex items-center justify-between rounded-md p-3 cursor-pointer transition-all duration-200"
                    :class="selectedPayment === 'applepay'
                        ? 'bg-green-50 border-green-500 text-green-500'
                        : 'bg-white border-gray-300 text-neutral-700'">
                    <div class="flex items-center gap-3">
                        <div class="w-6 h-6 flex items-center justify-center rounded-full border transition-all duration-200"
                            :class="selectedPayment === 'applepay'
                                ? 'bg-green-500 border-green-500'
                                : 'border-neutral-700 bg-white'">
                            <i class="mdi mdi-check text-white" v-if="selectedPayment === 'applepay'"></i>
                        </div>
                        <span class="font-montserratMedium text-base">Apple Pay</span>
                    </div>
                    <ApplePay class="w-8 h-8" />
                    <input type="radio" v-model="selectedPayment" value="applepay" name="payment" class="hidden" />
                </label>
            </div>
        </div>

        <div class="w-full flex items-center justify-center mt-4">
            <Button class="bg-white text-primary-500 border border-dashed w-1/3 rounded-md">
                <i class="mdi mdi-plus text-primary-500"></i>
                <span class="font-montserratMedium text-base">Add new card</span>
            </Button>
        </div>

        <ProfileFooter labelText="Pay" :handleClick="confirmPay" />
    </div>
</template>
