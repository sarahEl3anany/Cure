<script setup lang="ts">
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { number, z } from 'zod';

const toast = useToast();
const { $apiFetch } = useNuxtApp()
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
        const otpExDate = new Date(sessionStorage.getItem('otpExDate') ?? '')
        if (sessionStorage.getItem('otpExDate')) {
            if (otpExDate < new Date()) {
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
            <h3 class="mt-2 font-[Georgia] text-secondary-500 text-[32px]">Forget your password</h3>
            <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="verifyOTP">
                <div class="flex mt-7 sm:w-[350px] md:w-[396px] lg:w-[396px] mx-[16px] gap-2">
                    <div class="items-center w-full">
                        <InputText
                            class="text-center w-[62px] h-[63px] rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none"
                            name="num1" />
                    </div>
                    <div class="items-center w-full">
                        <InputText
                            class="text-center w-[62px] h-[63px] rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none"
                            name="num2" />
                    </div>
                    <div class="items-center w-full">
                        <InputText
                            class="text-center w-[62px] h-[63px] rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none"
                            name="num3" />
                    </div>
                    <div class="items-center w-full">
                        <InputText
                            class="text-center w-[62px] h-[63px] rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none"
                            name="num4" />
                    </div>
                    <div class="items-center w-full">
                        <InputText
                            class="text-center w-[62px] h-[63px] rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none"
                            name="num5" />
                    </div>
                    <div class="items-center w-full">
                        <InputText
                            class="text-center w-[62px] h-[63px] rounded bg-neutral-50 border-none focus:ring-0 focus:outline-none"
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
                <div class="justify-center w-full mt-10">
                    <Button type="submit"
                        class="w-[396px] text-[16px] h-[48px] text-white rounded-[7px] font-[Montserrat-Medium]">
                        Verify
                    </Button>
                </div>
            </Form>
        </div>
    </div>
</template>
