<script setup lang="ts">
import BsHeartPulse from '@/assets/icons/BsHeartPulse.svg'
import KeySquare from '@/assets/icons/sign-up/KeySquare2.svg'
// import appleLogo from '@/assets/images/sign-in/appleLogo.svg'
import { zodResolver } from '@primevue/forms/resolvers/zod';
import GoogleSignIn from '@/components/sign-in/google-sign-in.vue'
import FacebookLogin from '@/components/sign-in/facebook-login.vue'
import { z } from 'zod';
definePageMeta({
  layout: 'no-layout'
})
const toast = useToast();
const { $apiFetch, $successRegister, $successRegisterSession } = useNuxtApp()
const initialValues = reactive({
  email: '',
  password: '',
  rememberMe: false
});

const resolver = zodResolver(
  z.object({
    email: z.string().min(1, { message: "Email is required!" })
      .email({ message: "You must enter correct email." }),
    password: z.string().min(1, { message: "Password is required!" })
      .min(8, { message: "Enter more than 8 chars." })
      .max(256, { message: "Enter less than 256 chars." }),
    rememberMe: z.boolean().optional()
  })
)
async function signIn({ valid, values }: any) {
  if (valid) {
    try {
      const res: { data: { token: string, token_type?: string, user?: any } }
        // = await $apiFetch('auth/login', { nest localhost
        = await $apiFetch('login', {
          method: 'POST',
          body: values
        }) as any
      if (values.rememberMe) {
        $successRegister(res)
      } else {
        $successRegisterSession(res)
      }
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
    <BsHeartPulse class="w-20 h-20 mt-4 text-primary-500" />
    <h3 class="mt-5 font-georgia text-secondary-500 max-lg:text-2xl max-xs:text-sm dark:text-secondary-50">Login to your
      Account</h3>
    <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="signIn">
      <div class="w-full max-w-sm space-y-4 mt-5">
        <div>
          <div class="flex items-center gap-2 rounded-xl bg-neutral-50 px-4">
            <i class="mdi mdi-email text-neutral-500 text-lg"></i>
            <InputText
              placeholder="Email"
              name="email"
              class="!border-0 !shadow-none !outline-none w-full bg-neutral-50 text-neutral-500 font-montserratMedium focus:!outline-none focus:!ring-0 focus:!shadow-none"
            />
          </div>
          <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">
            {{ $form.email.error?.message }}
          </Message>
        </div>
        <div>
          <div class="flex items-center rounded-lg bg-neutral-50 px-4 gap-2">
            <KeySquare class="w-5 h-5 text-neutral-500" />
            <Password placeholder="Password" name="password"
              inputClass="!border-0 !shadow-none !outline-none w-full bg-neutral-50 text-neutral-500 font-montserratMedium focus:!outline-none focus:!ring-0 focus:!shadow-none" />
          </div>
          <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
            {{ $form.password.error?.message }}
          </Message>
        </div>
        <div class="flex justify-end">
          <span class="text-red-500 font-montserrat text-xs">
            <NuxtLink to="/auth/forget-password"> Forget password?</NuxtLink>
          </span>
        </div>
        <div class="flex items-center justify-center gap-2 font-montserratMedium">
          <Checkbox inputId="rememberMe" name="rememberMe" :binary="true" />
          <label for="rememberMe" class="text-secondary-500 dark:text-primary-50 text-base">Remember me</label>
        </div>
        <Button type="submit" class="w-full text-base h-12 text-white rounded-lg font-montserratMedium">
          Sign in
        </Button>
      </div>
    </Form>
    <div class="w-1/3 max-w-sm">
      <Divider>
        <span class="text-neutral-500 text-base font-montserratMedium">or</span>
      </Divider>
    </div>
    <div class="flex justify-center gap-36 w-full max-w-sm">
      <FacebookLogin classStyle="h-14 w-14 rounded-2xl bg-white border-neutral-300 border" />
      <GoogleSignIn classStyle="h-14 w-14 rounded-2xl bg-white border-neutral-300 border" />
      <!-- <Button class="h-14 w-14 rounded-2xl bg-white border-neutral-300 border">
        <img :src="appleLogo" class="h-5 w-5" alt="apple-icon" />
      </Button> -->
    </div>
    <div>
      <span class="text-neutral-500 font-montserratMedium text-xs">Don’t have an account?</span>
      <NuxtLink to="/auth/sign-up" class="ml-1 text-primary-500 font-montserratMedium text-xs">Sign up</NuxtLink>
    </div>
  </div>
</template>
