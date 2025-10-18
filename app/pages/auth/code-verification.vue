<script setup lang="ts">
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { useHeader } from '@/composables/useHeader'
const { headerTitle, backRoute, showHeader } = useHeader()
onMounted(() => {
    headerTitle.value = 'Verification Code'
    backRoute.value = '/auth/forget-password'
    showHeader.value = true
})
const toast = useToast();
const { $apiFetch } = useNuxtApp()
const countTimeDown = ref(0)
let otpExDate: any =  null
if (process.client) {
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
}

const initialValues = reactive({
    num1: null,
    num2: null,
    num3: null,
    num4: null,
    num5: null,
    num6: null,
});

const resolver = zodResolver(
    z.object({
        num1: z.string()
            .regex(/^[0-9]$/, { message: "Enter exactly one digit (0-9)" }),
        num2: z.string()
            .regex(/^[0-9]$/, { message: "Enter exactly one digit (0-9)" }),
        num3: z.string()
            .regex(/^[0-9]$/, { message: "Enter exactly one digit (0-9)" }),
        num4: z.string()
            .regex(/^[0-9]$/, { message: "Enter exactly one digit (0-9)" }),
        num5: z.string()
            .regex(/^[0-9]$/, { message: "Enter exactly one digit (0-9)" }),
        num6: z.string()
            .regex(/^[0-9]$/, { message: "Enter exactly one digit (0-9)" }),
    })
)

async function verifyOTP({ valid, values }: any) {
    if (valid) {
        const otp: string = values.num1.toString() + values.num2.toString()
            + values.num3.toString() + values.num4.toString()
            + values.num5.toString() + values.num6.toString()
        const dataValues = { 'otp': otp, 'email': sessionStorage.getItem('email') }
        if (process.client) {
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
                            // = await $apiFetch('otp/verify-otp', { // nest localhost
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
                        navigateTo('/auth/set-new-password')
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
                detail: 'Invalid or expired OTP',
                life: 5000
            })
        }
    }
}
definePageMeta({
  layout: 'header-no-footer'
})
</script>

<template>
    <div class="flex flex-col items-center justify-center px-4 text-center">
        <Toast />
        <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="verifyOTP">
            <div class="space-y-8 mt-8">
                <div class="flex mt-7 space-x-3 justify-center w-full gap-2">
                    <div class="items-center w-10 h-10">
                        <InputText maxlength="1"
                            class="text-center w-full h-full rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none outline-none"
                            name="num1" />
                    </div>
                    <div class="items-center w-10 h-10">
                        <InputText maxlength="1"
                            class="text-center w-full h-full rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none outline-none"
                            name="num2" />
                    </div>
                    <div class="items-center w-10 h-10">
                        <InputText maxlength="1"
                            class="text-center w-full h-full rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none outline-none"
                            name="num3" />
                    </div>
                    <div class="items-center w-10 h-10">
                        <InputText maxlength="1"
                            class="text-center w-full h-full rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none outline-none"
                            name="num4" />
                    </div>
                    <div class="items-center w-10 h-10">
                        <InputText maxlength="1"
                            class="text-center w-full h-full rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none outline-none"
                            name="num5" />
                    </div>
                    <div class="items-center w-10 h-10">
                        <InputText maxlength="1"
                            class="text-center w-full h-full rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none outline-none"
                            name="num6" />
                    </div>
                </div>
                <div class="justify-center w-full">
                    <Message v-if="$form.num1?.invalid
                        || $form.num2?.invalid
                        || $form.num3?.invalid
                        || $form.num4?.invalid
                        || $form.num5?.invalid
                        || $form.num6?.invalid
                    " severity="error" size="small" variant="simple">{{
                        $form.num1?.error?.message
                        || $form.num2?.error?.message
                        || $form.num3?.error?.message
                        || $form.num4?.error?.message
                        || $form.num5?.error?.message
                        || $form.num6?.error?.message
                    }}</Message>
                </div>
                <div class="justify-center">
                    <span class="font-montserrat text-sm">
                        <span class="text-secondary-500">Resend code in </span>
                        <span class="text-primary-300">{{ countTimeDown }}</span>
                        <span class="text-secondary-500"> s</span>
                    </span>
                </div>
                <div class="justify-center mt-10">
                    <Button type="submit" class="w-full text-base h-12 text-white rounded-lg font-montserratMedium">
                        Verify
                    </Button>
                </div>
            </div>
        </Form>
    </div>
</template>
