<script setup lang="ts">
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { useHeader } from '@/composables/useHeader'
const { headerTitle, backRoute, showHeader } = useHeader()
onMounted(() => {
    headerTitle.value = 'Forget Password'
    backRoute.value = '/auth/sign-in'
    showHeader.value = true
})
definePageMeta({
  layout: 'header-no-footer'
})
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
                // = await $apiFetch('otp/send-reset-otp', {  // nest localhost
                = await $apiFetch('send-reset-otp', {
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
        <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="forgetPassword">
            <div class="space-y-8 mt-8">
                <div>
                    <div class="flex items-center rounded-xl bg-neutral-50 px-4 gap-2">
                        <i class="mdi mdi-email text-neutral-500 font-montserratMedium text-lg"></i>
                        <InputText placeholder="Email" name="email"
                            class="w-full font-montserratMedium border-none text-neutral-500 bg-neutral-50 outline-none focus:ring-0 focus:outline-none" />
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
