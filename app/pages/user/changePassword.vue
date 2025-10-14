<script setup lang="ts">
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import Outline from '@/assets/icons//home/user/outline.svg'
import { useHeader } from '@/composables/useHeader'
const { headerTitle, backRoute, showHeader } = useHeader()
onMounted(() => {
  headerTitle.value = 'Password Management'
  backRoute.value = '/user/settings'
  showHeader.value = true
})
definePageMeta({
  layout: 'header-no-footer'
})
const toast = useToast();
const { $apiFetch } = useNuxtApp()

const initialValues = reactive({
    currentPassword: '',
  password: '',
  password_confirmation: ''
});

const resolver = zodResolver(
  z.object({
    currentPassword: z.string().min(1, { message: "Password is required!" })
      .min(8, { message: "Enter more than 8 chars." })
      .max(256, { message: "Enter less than 256 chars." }),
    password: z.string().min(1, { message: "Password is required!" })
      .min(8, { message: "Enter more than 8 chars." })
      .max(256, { message: "Enter less than 256 chars." }),
    password_confirmation: z.string().min(1, { message: "Password is required!" })
      .min(8, { message: "Enter more than 8 chars." })
      .max(256, { message: "Enter less than 256 chars." }),
  }).refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  })
)

async function updatePassword({ valid, values }: any) {
  if (valid) {
    const otp: string | null = sessionStorage.getItem('otp')
    const dataValues = {
      'otp': otp, 'email': sessionStorage.getItem('email')
      ,'currentPassword': values.currentPassword, 'password': values.password
      , 'password_confirmation': values.password_confirmation
    }
    try {
      const res: any
        // = await $apiFetch('auth/reset-password', { // nest localhost
        = await $apiFetch('reset-password', {
          method: 'POST',
          body: dataValues
        }) as any
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: res.message,
        life: 5000
      })
      sessionStorage.removeItem('email')
      sessionStorage.removeItem('otp')
      sessionStorage.removeItem('otpExDate')
      navigateTo('/sign-in')
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
    <div class="px-6 w-full space-y-4 mt-6">
        <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="updatePassword">
      <div class="space-y-8 mt-8">
        <div class="h-12">
          <div class="font-georgia text-left text-base text-secondary-500">Current password</div>
          <div class="flex items-center rounded-lg bg-neutral-50 px-4 gap-2">
            <Password name="currentPassword" placeholder="Current Password"
              inputClass="!border-0 !shadow-none !outline-none w-full bg-neutral-50 text-neutral-500 font-montserratMedium focus:!outline-none focus:!ring-0 focus:!shadow-none" />
            <Outline class="w-5 h-5 justify-end text-neutral-500 ml-auto" />
          </div>
          <Message v-if="$form.currentPassword?.invalid" severity="error" size="small" variant="simple">{{
            $form.currentPassword.error?.message }}</Message>
        </div>
        <div class="h-12">
          <div class="font-georgia text-left text-base text-secondary-500">New password</div>
          <div class="flex items-center rounded-lg bg-neutral-50 px-4 gap-2">
            <Password placeholder="Password" name="password"
              inputClass="!border-0 !shadow-none !outline-none w-full bg-neutral-50 text-neutral-500 font-montserratMedium focus:!outline-none focus:!ring-0 focus:!shadow-none" />
            <Outline class="w-5 h-5 justify-end text-neutral-500 ml-auto" />
          </div>
          <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{
            $form.password.error?.message }}</Message>
        </div>
        <div class="h-12">
          <div class="font-georgia text-left text-base">Confirm new password</div>
          <div class="flex items-center rounded-lg bg-neutral-50 px-4 gap-2">
            <Password placeholder="Confirm Password" name="password_confirmation"
              inputClass="!border-0 !shadow-none !outline-none w-full bg-neutral-50 text-neutral-500 font-montserratMedium focus:!outline-none focus:!ring-0 focus:!shadow-none" />
            <Outline class="w-5 h-5 justify-end text-neutral-500 ml-auto" />
          </div>
          <Message v-if="$form.password_confirmation?.invalid" severity="error" size="small" variant="simple">{{
            $form.password_confirmation.error?.message }}</Message>
        </div>
        <div class="pt-6 flex items-center flex-col">
            <Button type="submit" class="w-full text-base text-white rounded-lg font-montserratMedium max-w-md">
            Change Password 
            </Button>
        </div>
      </div>
    </Form>
    </div>
</template>
