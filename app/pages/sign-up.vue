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
    password_confirmation: '',
    rememberMe: false
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
            .max(256, { message: "Enter less than 256 chars." }),
        rememberMe: z.boolean().default(false).optional()
    }).refine((data) => data.password === data.password_confirmation, {
        message: "Passwords do not match",
        path: ["password_confirmation"],
    })
)
async function signUp({ valid, values }: any) {
    if (valid) {
        try {
            const res: { data: { token: string, token_type?: string, user?: any } }
                = await $apiFetch('register', {
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
    <div>
        <Toast />
        <div class="flex flex-col items-center text-center w-full">
            <img :src="BsHeartPulse" alt="HeartPulse"
                class="w-14 h-14 mt-[75px] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl" />
            <h3 class="mt-2 font-[Georgia] text-secondary-500 text-[32px]">Create New Account</h3>
            <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="signUp">
                <div class="space-y-7 mt-7 sm:w-[350px] md:w-[396px] lg:w-[396px] mx-4">
                    <div class="h-12 w-full">
                        <div class="flex items-center w-full rounded-[10px] bg-neutral-50 px-4 gap-2">
                            <i class="mdi mdi-account text-neutral-500 font-[Montserrat-Medium] text-lg"></i>
                            <InputText placeholder="Full Name" name="name"
                                class=" w-full font-[Montserrat-Medium] border-none text-neutral-500 bg-neutral-50 focus:ring-0 focus:outline-none" />
                        </div>
                        <Message v-if="$form.name?.invalid" severity="error" size="small" variant="simple">{{
                            $form.name.error?.message }}</Message>
                    </div>
                    <div class="h-12 w-full">
                        <div class="flex items-center w-full rounded-xl bg-neutral-50 px-4 gap-2">
                            <i class="mdi mdi-email text-neutral-500 font-[Montserrat-Medium] text-lg"></i>
                            <InputText placeholder="Email" name="email"
                                class="w-full font-[Montserrat-Medium] border-none text-neutral-500 bg-neutral-50 focus:ring-0 focus:outline-none" />
                        </div>
                        <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{
                            $form.email.error?.message }}</Message>
                    </div>
                    <div class="h-12 w-full">
                        <div class="flex items-center w-full rounded-[10px] bg-neutral-50 px-4 gap-2">
                            <i class="mdi mdi-phone text-neutral-500 font-[Montserrat-Medium] text-lg"></i>
                            <InputText placeholder="Phone" name="phone"
                                class="w-full font-[Montserrat-Medium] border-none text-neutral-500 bg-neutral-50 focus:ring-0 focus:outline-none" />
                        </div>
                        <Message v-if="$form.phone?.invalid" severity="error" size="small" variant="simple">{{
                            $form.phone.error?.message }}</Message>
                    </div>
                    <div class="h-12 w-full">
                        <div class="flex items-center w-full rounded-[10px] bg-neutral-50 px-4 gap-2">
                            <img :src="KeySquare" alt="Password" class="w-5 h-5 text-neutral-500" />
                            <Password placeholder="Password" name="password"
                                inputClass="!border-none !shadow-none !bg-neutral-50 focus:!ring-0 focus:!outline-none text-neutral-500 font-[Montserrat-Medium] w-full"
                                class="w-full" />
                        </div>
                        <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{
                            $form.password.error?.message }}</Message>
                    </div>
                    <div class="h-12 w-full">
                        <div class="flex items-center w-full rounded-[10px] bg-neutral-50 px-4 gap-2">
                            <img :src="KeySquare" alt="Password" class="w-5 h-5 text-neutral-500" />
                            <Password placeholder="Confirm Password" name="password_confirmation"
                                inputClass="!border-none !shadow-none !bg-neutral-50 focus:!ring-0 focus:!outline-none text-neutral-500 font-[Montserrat-Medium] w-full"
                                class="w-full" />
                        </div>
                        <Message v-if="$form.password_confirmation?.invalid" severity="error" size="small"
                            variant="simple">{{
                                $form.password_confirmation.error?.message }}</Message>
                    </div>
                    <div class="justify-center flex items-center gap-2 h-[20px] font-[Montserrat-Medium]">
                        <Checkbox 
                        inputId="rememberMe" name="rememberMe" value="1" />
                        <label for="rememberMe" class="text-secondary-500 text-base h-[20px]"> Remember me </label>
                    </div>
                    <div class="flex justify-center w-full mt-10">
                        <Button type="submit"
                            class="w-full text-base h-12 text-white rounded-[7px] font-[Montserrat-Medium]">
                            Sign up
                        </Button>
                    </div>
                </div>
            </Form>
            <Divider align="center" class="w-[396px] text-neutral-500">
                <span class="text-neutral-500 text-base font-[Montserrat-Medium]">or</span>
            </Divider>
            <div class="flex justify-between w-[320px] mt-3 gap-2">
                <Button
                    class="justify-center flex items-center h-[60px] w-[60px] rounded-[16px] bg-white p-1 border-neutral-300 border-[1px]">
                    <img :src="fbLogo" class="h-5 w-5" alt="fb-icon" />
                </Button>
                <GoogleSignIn classStyle="justify-center flex items-center h-[60px] w-[60px] rounded-[16px] bg-white p-1 border-neutral-300 border-[1px]" />
                <Button
                    class="justify-center flex items-center h-[60px] w-[60px] rounded-[16px] bg-white p-1 border-neutral-300 border-[1px]">
                    <img :src="appleLogo" class="h-5 w-5" alt="apple-icon" />
                </Button>
            </div>
            <div class="flex justify-center mt-4">
                <span class="text-neutral-500 font-[Montserrat-Medium] text-xs">Already have an account! </span>
                <span class="ml-1 text-primary-500 font-[Montserrat-Medium] text-xs">
                    <NuxtLink to="/sign-in"> Sign in</NuxtLink>
                </span>
            </div>
        </div>
    </div>
</template>
