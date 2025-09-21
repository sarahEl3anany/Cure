<script setup lang="ts">
import arrowBack from '@/assets/images/sign-in/left-arrow.svg'
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

const toast = useToast();
const { $apiFetch } = useNuxtApp()
const initialValues = reactive({
    email: '',
});

const resolver = zodResolver(
    z.object({
        email: z.string().min(1, { message: "Email is required!" })
            .email({ message: "You must enter correct email." }),
    })
)
async function forgetPassword({ valid, values }: any) {
    if (valid) {
        try {
            const res: { data: {email: string, expires_at: string, note: string}, message: string }
                = await $apiFetch('send-reset-otp', {
                    method: 'POST',
                    body: values
                }) as {message: string, data: {email: string, expires_at: string, note: string}}
            sessionStorage.setItem('otpExDate', res.data.expires_at)
            sessionStorage.setItem('email', res.data.email)
            toast.add({
                severity: 'success',
                summary: 'Success',
                detail: res.message,
                life: 5000
            })
            navigateTo('/code-verification')
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
                <NuxtLink to="/sign-in" class="flex-none">
                    <img :src="arrowBack" class="w-[60px] h-[60px]" alt="arrow" />
                </NuxtLink>
                <div class="flex-1 text-center">
                    <h3 class="mt-2 font-[Georgia] text-secondary-500 text-[32px]">Forget your password</h3>
                </div>
            </div>
            <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="forgetPassword">
                <div class="space-y-7 mt-7 sm:w-[350px] md:w-[396px] lg:w-[396px] mx-4">
                    <div class="h-12 w-full">
                        <div class="flex items-center w-full rounded-[10px] bg-neutral-50 px-4 gap-2">
                            <i class="mdi mdi-email text-neutral-500 font-[Montserrat-Medium] text-lg"></i>
                            <InputText placeholder="Email" name="email"
                                class="w-full font-[Montserrat-Medium] border-none text-neutral-500 bg-neutral-50 focus:ring-0 focus:outline-none" />
                        </div>
                        <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{
                            $form.email.error?.message }}</Message>
                    </div>
                    <div class="flex justify-center w-full mt-10">
                        <Button type="submit"
                            class="w-full text-base h-12 text-white rounded-[7px] font-[Montserrat-Medium]">
                            Reset Password
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    </div>
</template>
