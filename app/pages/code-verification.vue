<script setup lang="ts">
import arrowBack from '@/assets/images/sign-in/left-arrow.svg'
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

const toast = useToast();
const { $apiFetch } = useNuxtApp()
const countTimeDown = ref(0)
const otpExDate = sessionStorage.getItem('otpExDate')
let timer: any = null
if (otpExDate) {
    const expiry = new Date(otpExDate).getTime()

    const updateCountdown = () => {
        const now = Date.now()
        const diff = Math.floor((expiry - now) / 1000) 
        if (diff > 0) {
        countTimeDown.value = diff
        } else {
        countTimeDown.value = 0
        clearInterval(timer)
        }
    }

    updateCountdown() 
    timer = setInterval(updateCountdown, 1000) 
}
const initialValues = reactive({
    num1: '',
    num2: '',
    num3: '',
    num4: '',
    num5: '',
    num6: '',
});

const resolver = zodResolver(
    z.object({
        num1: z.coerce.number({ message: "Enter only numbers" })
        .min(0, { message: "This field is required!" })
        .max(9, { message: "Enter one char." }),
        num2: z.coerce.number({ message: "Enter only numbers" })
        .min(0, { message: "This field is required!" })
        .max(9, { message: "Enter one char." }),
        num3: z.coerce.number({ message: "Enter only numbers" })
        .min(0, { message: "This field is required!" })
        .max(9, { message: "Enter one char." }),
        num4: z.coerce.number({ message: "Enter only numbers" })
        .min(0, { message: "This field is required!" })
        .max(9, { message: "Enter one char." }),
        num5: z.coerce.number({ message: "Enter only numbers" })
        .min(0, { message: "This field is required!" })
        .max(9, { message: "Enter one char." }),
        num6: z.coerce.number({ message: "Enter only numbers" })
        .min(0, { message: "This field is required!" })
        .max(9, { message: "Enter one char." }),
    })
)

async function verifyOTP({ valid, values }: any) {
    if (valid) {
        const otp: string = values.num1.toString() + values.num2.toString()
            + values.num3.toString() + values.num4.toString()
            + values.num5.toString() + values.num6.toString()
        const dataValues = { 'otp': otp, 'email': sessionStorage.getItem('email') }
        if (otpExDate) {
            if (new Date(otpExDate) < new Date()) {
                toast.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Invalid or expired OTP',
                    life: 5000
                })
            } else {
                try {
                    const res: any
                        = await $apiFetch('verify-otp', {
                            method: 'POST',
                            body: dataValues
                        }) as any
                    toast.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: res.message,
                        life: 5000
                    })
                    sessionStorage.setItem('otp', otp)
                    navigateTo('/set-new-password')
                } catch (err: any) {
                    const apiError = err?.response?._data || {}
                    const message = apiError.message || JSON.stringify(apiError)
                    toast.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: message,
                        life: 5000
                    })
                }
            }
        } else {
            toast.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Invalid or expired OTP',
                life: 5000
            })
        }
    } else {
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: "Please fill all the required fields",
            life: 5000
        })
    }
}
</script>

<template>
    <div>
        <Toast />
        <div class="flex flex-col items-center text-center w-full">
            <div class="flex items-center w-full mt-2">
                <NuxtLink to="/forget-password" class="flex-none">
                    <img :src="arrowBack" class="w-[60px] h-[60px]" alt="arrow" />
                </NuxtLink>
                <div class="flex-1 text-center">
                    <h3 class="font-[Georgia] text-secondary-500 text-[32px]">Code Verification</h3>
                </div>
            </div>
            <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="verifyOTP">
                <div class="flex mt-7 sm:w-[350px] md:w-[396px] lg:w-[396px] mx-[16px] gap-2">
                    <div class="items-center w-10 h-10">
                        <InputText
                            maxlength="1"
                            class="text-center w-full h-full rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none"
                            name="num1" />
                    </div>
                    <div class="items-center w-10 h-10">
                        <InputText
                            maxlength="1"
                            class="text-center w-full h-full rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none"
                            name="num2" />
                    </div>
                    <div class="items-center w-10 h-10">
                        <InputText
                            maxlength="1"
                            class="text-center w-full h-full rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none"
                            name="num3" />
                    </div>
                    <div class="items-center w-10 h-10">
                        <InputText
                            maxlength="1"
                            class="text-center w-full h-full rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none"
                            name="num4" />
                    </div>
                    <div class="items-center w-10 h-10">
                        <InputText
                            maxlength="1"
                            class="text-center w-full h-full rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none"
                            name="num5" />
                    </div>
                    <div class="items-center w-10 h-10">
                        <InputText
                            maxlength="1"
                            class="text-center w-full h-full rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none"
                            name="num6" />
                    </div>
                </div>
                <div class="justify-center w-full">
                    <Message v-if="$form.num1?.invalid" severity="error" size="small" variant="simple">{{
                        $form.num1.error?.message }}</Message>

                    <Message v-if="$form.num2?.invalid" severity="error" size="small" variant="simple">{{
                        $form.num2.error?.message }}</Message>
                    <Message v-if="$form.num3?.invalid" severity="error" size="small" variant="simple">{{
                        $form.num3.error?.message }}</Message>
                    <Message v-if="$form.num4?.invalid" severity="error" size="small" variant="simple">{{
                        $form.num4.error?.message }}</Message>
                    <Message v-if="$form.num5?.invalid" severity="error" size="small" variant="simple">{{
                        $form.num5.error?.message }}</Message>
                    <Message v-if="$form.num6?.invalid" severity="error" size="small" variant="simple">{{
                        $form.num6.error?.message }}</Message>
                </div>
                <div class="justify-center w-full">
                    <span class="font-[Montserrat] text-sm">
                        <span class="text-secondary-500">Resend code in </span>
                        <span class="text-primary-300">{{ countTimeDown }}</span>
                        <span class="text-secondary-500"> s</span>
                    </span>
                </div>
                <div class="justify-center w-full mt-10">
                    <Button type="submit"
                        class="w-[396px] text-base h-12 text-white rounded-[7px] font-[Montserrat-Medium]">
                        Verify
                    </Button>
                </div>
            </Form>
        </div>
    </div>
</template>
