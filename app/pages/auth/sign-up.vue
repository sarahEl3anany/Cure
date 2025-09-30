<script setup lang="ts">
import BsHeartPulse from '@/assets/images/sign-up/BsHeartPulse.svg'
import KeySquare from '@/assets/images/sign-up/KeySquare2.png'
import fbLogo from '@/assets/images/sign-in/fbLogo.svg'
import appleLogo from '@/assets/images/sign-in/appleLogo.svg'
import { zodResolver } from '@primevue/forms/resolvers/zod';
import GoogleSignIn from '@/components/sign-in/google-sign-in.vue'
import { z } from 'zod';

const toast = useToast();
const { $apiFetch, $successRegister, $successRegisterSession } = useNuxtApp()
const initialValues = reactive({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: ''
});

const resolver = zodResolver(
    z.object({
        name: z.string().min(1, { message: "Full name is required!" })
            .min(3, { message: "Enter more than 3 chars." })
            .max(256, { message: "Enter less than 256 chars." }),
        email: z.string().min(1, { message: "Email is required!" })
            .email({ message: "You must enter correct email." }),
        phone: z.string().min(1, { message: "Phone is required!" })
            .min(9, { message: "Phone length must be more than 9 chars." })
            .max(15, { message: "Phone length must be less than 15" }),
        password: z.string().min(1, { message: "Password is required!" })
            .min(8, { message: "Enter more than 8 chars." })
            .max(256, { message: "Enter less than 256 chars." }),
        password_confirmation: z.string().min(1, { message: "Password is required!" })
            .min(8, { message: "Enter more than 8 chars." })
            .max(256, { message: "Enter less than 256 chars." })
    }).refine((data) => data.password === data.password_confirmation, {
        message: "Passwords do not match",
        path: ["password_confirmation"],
    })
)
async function signUp({ valid, values }: any) {
    if (valid) {
        try {
            const res: { data: { token: string, token_type?: string, user?: any } }
                // = await $apiFetch('auth/register', { nest localhost
                = await $apiFetch('register', {
                    method: 'POST',
                    body: values
                }) as any
            navigateTo('/auth/verify-account')
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
    <img :src="BsHeartPulse" alt="HeartPulse" class="w-16 h-16 mt-10" />

    <h3 class="mt-8 font-georgia text-secondary-500 dark:text-primary-50 text-2xl">
      Create New Account
    </h3>
    <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="signUp">
      <div class="w-full max-w-sm space-y-5 mt-7">
        <div>
          <div class="flex items-center rounded-lg bg-neutral-50 px-4 gap-2">
            <i class="mdi mdi-account text-neutral-500 font-montserratMedium text-lg"></i>
            <InputText placeholder="Full Name" name="name"
              class="w-full font-montserratMedium border-none text-neutral-500 bg-neutral-50 focus:ring-0 focus:outline-none" />
          </div>
          <Message v-if="$form.name?.invalid" severity="error" size="small" variant="simple">
            {{ $form.name.error?.message }}
          </Message>
        </div>
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
          <div class="flex items-center rounded-lg bg-neutral-50 px-4 gap-2">
            <i class="mdi mdi-phone text-neutral-500 font-montserratMedium text-lg"></i>
            <InputText placeholder="Phone" name="phone"
              class="w-full font-montserratMedium border-none text-neutral-500 bg-neutral-50 focus:ring-0 focus:outline-none" />
          </div>
          <Message v-if="$form.phone?.invalid" severity="error" size="small" variant="simple">
            {{ $form.phone.error?.message }}
          </Message>
        </div>
        <div>
          <div class="flex items-center rounded-lg bg-neutral-50 px-4 gap-2">
            <img :src="KeySquare" alt="Password" class="w-5 h-5" />
            <Password placeholder="Password" name="password"
              inputClass="w-full !border-none !shadow-none !bg-neutral-50 focus:!ring-0 focus:!outline-none text-neutral-500 font-montserratMedium" />
          </div>
          <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
            {{ $form.password.error?.message }}
          </Message>
        </div>
        <div>
          <div class="flex items-center rounded-lg bg-neutral-50 px-4 gap-2">
            <img :src="KeySquare" alt="Confirm Password" class="w-5 h-5" />
            <Password placeholder="Confirm Password" name="password_confirmation"
              inputClass="w-full !border-none !shadow-none !bg-neutral-50 focus:!ring-0 focus:!outline-none text-neutral-500 font-montserratMedium" />
          </div>
          <Message v-if="$form.password_confirmation?.invalid" severity="error" size="small" variant="simple">
            {{ $form.password_confirmation.error?.message }}
          </Message>
        </div>
        <div class="mt-10">
          <Button type="submit"
            class="w-full text-base h-12 text-white rounded-lg font-montserratMedium">
            Sign up
          </Button>
        </div>
      </div>
    </Form>
    <div class="w-full max-w-sm mt-6">
      <Divider>
        <span class="text-neutral-500 text-base font-montserratMedium">or</span>
      </Divider>
    </div>
    <div class="flex justify-between w-full max-w-sm">
      <Button class="h-14 w-14 rounded-2xl bg-white border-neutral-300 border">
        <img :src="fbLogo" class="h-5 w-5" alt="fb-icon" />
      </Button>
      <GoogleSignIn classStyle="h-14 w-14 rounded-2xl bg-white border-neutral-300 border" />
      <Button class="h-14 w-14 rounded-2xl bg-white border-neutral-300 border">
        <img :src="appleLogo" class="h-5 w-5" alt="apple-icon" />
      </Button>
    </div>
    <div class="mt-2">
      <span class="text-neutral-500 font-montserratMedium text-xs">Already have an account!</span>
      <NuxtLink to="/auth/sign-in" class="ml-1 text-primary-500 font-montserratMedium text-xs">Sign in</NuxtLink>
    </div>
  </div>
</template>
