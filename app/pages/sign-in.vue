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
                })
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
                class="w-[60px] h-[60px] mt-[75px] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl" />
            <h3 class="mt-2 font-[Georgia] text-[#05162C] text-[32px]">Login to your Account</h3>
            <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="signIn">
                <div class="space-y-7 mt-7 sm:w-[350px] md:w-[396px] lg:w-[396px] mx-[16px]">
                    <div class="h-[48px] w-full">
                        <div class="flex items-center w-full rounded-[10px] bg-[#F5F6F7] px-[16px] gap-[8px]">
                            <i class="mdi mdi-email text-[#99A2AB] font-[Montserrat-Medium] text-lg"></i>
                            <InputText placeholder="Email" name="email"
                                class="w-full font-[Montserrat-Medium] border-none text-[#99A2AB] bg-[#F5F6F7] focus:ring-0 focus:outline-none" />
                        </div>
                        <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{
                            $form.email.error?.message }}</Message>
                    </div>
                    <div class="h-[48px] w-full">
                        <div class="flex items-center w-full rounded-[10px] bg-[#F5F6F7] px-[16px] gap-[8px]">
                            <img :src="KeySquare" alt="Password" class="w-5 h-5 text-[#99A2AB]" />
                            <Password placeholder="Password" name="password"
                                inputClass="!border-none !shadow-none !bg-[#F5F6F7] focus:!ring-0 focus:!outline-none text-[#99A2AB] font-[Montserrat-Medium] w-full"
                                class="w-full" />
                        </div>
                        <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{
                            $form.password.error?.message }}</Message>
                    </div>
                    <div class="flex justify-end">
                      <span class="text-[#FC4B4E] font-[Montserrat] text-[12px]">
                          <NuxtLink to="/forget-password"> Forget password?</NuxtLink>
                      </span>
                  </div>
                    <div class="justify-center flex items-center gap-2 h-[20px] font-[Montserrat-Medium]">
                        <Checkbox 
                        inputId="rememberMe" name="rememberMe" />
                        <label for="rememberMe" class="text-[#05162C] text-[16px] h-[20px]"> Remember me </label>
                    </div>
                    <div class="flex justify-center w-full mt-10">
                        <Button type="submit"
                            class="w-full text-[16px] h-[48px] text-[#FFFFFF] rounded-[7px] font-[Montserrat-Medium]">
                            Sign up
                        </Button>
                    </div>
                </div>
            </Form>
            <Divider align="center" class="w-[396px] text-[#99A2AB]">
                <span class="text-[#99A2AB] text-[16px] font-[Montserrat-Medium]">or</span>
            </Divider>
            <div class="flex justify-between w-[320px] mt-3 gap-[8px]">
                <Button
                    class="justify-center flex items-center h-[60px] w-[60px] rounded-[16px] bg-white p-1 border-[#BBC1C7] border-[1px]">
                    <img :src="fbLogo" class="h-5 w-5" alt="fb-icon" />
                </Button>
                <GoogleSignIn classStyle="justify-center flex items-center h-[60px] w-[60px] rounded-[16px] bg-white p-1 border-[#BBC1C7] border-[1px]" />
                <Button
                    class="justify-center flex items-center h-[60px] w-[60px] rounded-[16px] bg-white p-1 border-[#BBC1C7] border-[1px]">
                    <img :src="appleLogo" class="h-5 w-5" alt="apple-icon" />
                </Button>
            </div>
            <div class="flex justify-center mt-4">
                <span class="text-[#99A2AB] font-[Montserrat-Medium] text-[12px]">Don’t have an account? </span>
                <span class="ml-1 text-[#145DB8] font-[Montserrat-Medium] text-[12px]">
                    <NuxtLink to="/sign-up"> Sign up</NuxtLink>
                </span>
            </div>
        </div>
    </div>
</template>
