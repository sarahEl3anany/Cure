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
    <div class="px-6 w-full space-y-4 mt-6">
        <Form v-slot="$form">
            <div class="space-y-8 mt-8">
                <div>
                    <div class="font-georgia text-left text-base text-secondary-500">Cardholder Name</div>
                    <div class="flex items-center rounded-lg bg-neutral-50 px-4 gap-2">
                        <InputText name="cardholderName" placeholder="Cardholder Name"
                            class="!border-0 !shadow-none !outline-none w-full bg-neutral-50 text-neutral-500 font-montserratMedium focus:!outline-none focus:!ring-0 focus:!shadow-none" />
                    </div>
                </div>
                <div>
                    <div class="font-georgia text-left text-base text-secondary-500">Card Number</div>
                    <div class="flex items-center rounded-lg bg-neutral-50 px-4 gap-2">
                        <InputText placeholder="Card Number" name="cardNumber"
                            class="!border-0 !shadow-none !outline-none w-full bg-neutral-50 text-neutral-500 font-montserratMedium focus:!outline-none focus:!ring-0 focus:!shadow-none" />
                        <i class="mdi mdi-eye-outline text-secondary-500"></i>
                    </div>
                </div>
                <div class="flex items-center w-full">
                    <div class="w-full">
                        <div class="font-georgia text-left text-base text-secondary-500">Expiry Date</div>
                         <div class="flex w-full">
                            <div class="items-center w-10 h-10 border-r-2 border-neutral-700">
                                <InputText maxlength="1"
                                    class="text-center text-black w-full h-full rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none outline-none"
                                    name="month" />
                            </div>
                            <div class="items-center w-10 h-10">
                                <InputText maxlength="1"
                                    class="text-center text-black w-full h-full rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none outline-none"
                                    name="year" />
                            </div>
                        </div>
                    </div>
                    <div class="w-40">
                        <div class="font-georgia text-left text-base text-secondary-500">CVV Code</div>
                        <div class="flex items-center rounded-lg bg-neutral-50 px-4 gap-2">
                            <InputText name="ccv" placeholder="CVV Code"
                                class="!border-0 !shadow-none !outline-none w-full bg-neutral-50 text-neutral-500 font-montserratMedium focus:!outline-none focus:!ring-0 focus:!shadow-none" />
                        </div>
                    </div>
                </div>
                <div class="pt-6 flex items-center flex-col">
                    <Button type="submit" class="w-full text-base text-white rounded-lg font-montserratMedium max-w-md">
                        Save
                    </Button>
                </div>
            </div>
        </Form>
    </div>
</template>
