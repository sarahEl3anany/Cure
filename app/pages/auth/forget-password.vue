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
            const res: { data: { email: string, expires_at: string, note: string }, message: string }
                = await $apiFetch('otp/send-reset-otp', {
                    method: 'POST',
                    body: values
                }) as { message: string, data: { email: string, expires_at: string, note: string } }
            sessionStorage.setItem('otpExDate', res.data.expires_at)
            sessionStorage.setItem('email', res.data.email)
            toast.add({
                severity: 'success',
                summary: 'Success',
                detail: res.message,
                life: 5000
            })
            navigateTo('/auth/code-verification')
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
    <div class="flex flex-col items-center justify-center px-4 text-center">
        <Toast />
        <div class="w-full mt-5 justify-center">
            <NuxtLink to="/sign-in">
                <img :src="arrowBack" class="w-16 h-16" alt="arrow" />
            </NuxtLink>
            <div class="text-center">
                <h3 class="font-georgia text-secondary-500 dark:text-primary-50 text-3xl">Forget your password</h3>
            </div>
        </div>
        <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="forgetPassword">
            <div class="space-y-8 mt-8">
                <div>
                    <div class="flex items-center rounded-xl bg-neutral-50 px-4 gap-2">
                        <i class="mdi mdi-email text-neutral-500 font-montserratMedium text-lg"></i>
                        <InputText placeholder="Email" name="email"
                            class="w-full font-montserratMedium border-none text-neutral-500 bg-neutral-50 focus:ring-0 focus:outline-none" />
                    </div>
                    <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">
                        {{ $form.email.error?.message }}
                    </Message>
                </div>
                <div>
                    <Button type="submit" class="w-full text-base h-12 text-white rounded-lg font-montserratMedium">
                        Reset Password
                    </Button>
                </div>
            </div>
        </Form>
    </div>
</template>
