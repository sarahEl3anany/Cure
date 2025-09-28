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
        rememberMe: z.boolean().default(false).optional()
    })
)
async function signIn({ valid, values }: any) {
    if (valid) {
        try {
            const res: { data: { token: string, token_type?: string, user?: any } }
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
    <div class="flex flex-col items-center justify-center w-screen h-screen px-4 text-center mt-1/5">
        <Toast />
        <img :src="BsHeartPulse" alt="HeartPulse"
            class="w-16 h-16 mt-20" />
        <h3 class="mt-8 font-georgia text-secondary-500 lg:text-2xl xs:text-sm dark:text-secondary-50">Login to your Account</h3>
        <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="signIn">
            <div class="space-y-7 mt-7 sm:w-80 md:w-96 lg:w-96 mx-4">
                <div class="h-12 w-full">
                    <div class="flex items-center w-full rounded-lg bg-neutral-50 px-4 gap-2">
                        <i class="mdi mdi-email text-neutral-500 font-montserratMedium text-lg"></i>
                        <InputText placeholder="Email" name="email"
                            class="w-full font-montserratMedium border-none text-neutral-500 bg-neutral-50 focus:ring-0 focus:outline-none" />
                    </div>
                    <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{
                        $form.email.error?.message }}</Message>
                </div>
                <div class="h-12 w-full">
                    <div class="flex items-center w-full rounded-lg bg-neutral-50 px-4 gap-2">
                        <img :src="KeySquare" alt="Password" class="w-5 h-5 text-neutral-500" />
                        <Password placeholder="Password" name="password"
                            inputClass="!border-none !shadow-none !bg-neutral-50 focus:!ring-0 focus:!outline-none text-neutral-500 font-montserratMedium w-full"
                            class="w-full" />
                    </div>
                    <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{
                        $form.password.error?.message }}</Message>
                </div>
                <div class="flex justify-end">
                    <span class="text-red-500 font-[Montserrat] text-xs">
                        <NuxtLink to="/forget-password"> Forget password?</NuxtLink>
                    </span>
                </div>
                <div class="justify-center flex items-center gap-2 h-5 font-montserratMedium">
                    <Checkbox 
                    inputId="rememberMe" name="rememberMe" value="1" />
                    <label for="rememberMe" class="text-secondary-500 dark:text-primary-50 text-base h-5"> Remember me </label>
                </div>
                <div class="flex justify-center w-full mt-10">
                    <Button type="submit"
                        class="w-full text-base h-12 text-white rounded-lg font-montserratMedium">
                        Sign up
                    </Button>
                </div>
            </div>
        </Form>
        <Divider align="center" class="w-96 text-neutral-500">
            <span class="text-neutral-500 text-base font-montserratMedium">or</span>
        </Divider>
        <div class="flex justify-between w-96 mt-3 gap-2">
            <Button
                class="justify-center flex items-center h-14 w-14 rounded-2xl bg-white p-1 border-neutral-300 border-1">
                <img :src="fbLogo" class="h-5 w-5" alt="fb-icon" />
            </Button>
            <GoogleSignIn classStyle="justify-center flex items-center h-14 w-14 rounded-2xl bg-white p-1 border-neutral-300 border-1" />
            <Button
                class="justify-center flex items-center h-14 w-14 rounded-2xl bg-white p-1 border-neutral-300 border-1">
                <img :src="appleLogo" class="h-5 w-5" alt="apple-icon" />
            </Button>
        </div>
        <div class="flex justify-center mt-4">
            <span class="text-neutral-500 font-montserratMedium text-xs">Don’t have an account? </span>
            <span class="ml-1 text-primary-500 font-montserratMedium text-xs">
                <NuxtLink to="/sign-up"> Sign up</NuxtLink>
            </span>
        </div>
    </div>
</template>
