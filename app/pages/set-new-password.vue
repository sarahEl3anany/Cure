<script setup lang="ts">
import KeySquare from '@/assets/images/sign-up/KeySquare2.png'
import arrowBack from '@/assets/images/sign-in/left-arrow.svg'
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

const toast = useToast();
const { $apiFetch } = useNuxtApp()

const initialValues = reactive({
  password: '',
  password_confirmation: ''
});

const resolver = zodResolver(
  z.object({
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
      , 'password': values.password, 'password_confirmation': values.password_confirmation
    }
    try {
      const res: any
        = await $apiFetch('auth/reset-password', {
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
  <div class="flex flex-col items-center justify-center px-4 text-center">
    <Toast />
    <div class="w-full mt-5 justify-center">
        <NuxtLink to="/code-verification" class="flex-none">
          <img :src="arrowBack" class="w-16 h-16" alt="arrow" />
        </NuxtLink>
        <div class="flex-1 text-center">
          <h3 class="font-georgia text-secondary-500 text-xl dark:text-primary-50">Set new password</h3>
        </div>
      </div>
      <div class="font-georgia mt-10 text-base">
        Create a new password, ensure it different form your previous ones for security.
      </div>
      <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="updatePassword">
        <div class="space-y-12 mt-8">
          <div class="h-12">
            <div class="font-georgia text-left text-base">New password</div>
            <div class="flex items-center rounded-lg bg-neutral-50 gap-2">
              <img :src="KeySquare" alt="Password" class="w-5 h-5 text-neutral-500" />
              <Password placeholder="Password" name="password"
                inputClass="!border-none !shadow-none !bg-neutral-50 focus:!ring-0 focus:!outline-none text-neutral-500 font-[Montserrat-Medium] w-full"
                  />
            </div>
            <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{
              $form.password.error?.message }}</Message>
          </div>
          <div class="h-12">
            <div class="font-georgia text-left text-base">Confirm password</div>
            <div class="flex items-center mt-3 rounded-lg bg-neutral-50 gap-2">
              <img :src="KeySquare" alt="Password" class="w-5 h-5 text-neutral-500" />
              <Password placeholder="Confirm Password" name="password_confirmation"
                inputClass="!border-none !shadow-none !bg-neutral-50 focus:!ring-0 focus:!outline-none text-neutral-500 font-[Montserrat-Medium] w-full"
                class="w-full" />
            </div>
            <Message v-if="$form.password_confirmation?.invalid" severity="error" size="small" variant="simple">{{
              $form.password_confirmation.error?.message }}</Message>
          </div>
        <div>
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
        <Button type="submit" class="w-full text-base h-12 text-white rounded-lg font-montserratMedium">
          Verify
        </Button>
        </div>
      </Form>
  </div>
</template>
