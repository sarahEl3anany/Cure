<script setup lang="ts">
import BsHeartPulse from '@/assets/images/sign-up/BsHeartPulse.svg'
import KeySquare from '@/assets/images/sign-up/KeySquare2.png'
import fbLogo from '@/assets/images/sign-in/fbLogo.svg'
import googleLogo from '@/assets/images/sign-in/googleLogo.svg'
import appleLogo from '@/assets/images/sign-in/appleLogo.svg'
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
// import {
//   useCodeClient,
//   type ImplicitFlowSuccessResponse,
//   type ImplicitFlowErrorResponse,
// } from "vue3-google-signin";

const toast = useToast();
const { $apiFetch } = useNuxtApp()
const initialValues = reactive({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
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
        path: ["password_confirmation"], // error will show under password_confirmation field
    })
)
async function signUp({ valid, values }: any) {
    if (valid) {
        try {
            const res: { data: { token: string, token_type?: string, user?: any } }
                = await $apiFetch('register', {
                    method: 'POST',
                    body: values
                })
            successRegister(res)
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
    }
}
const successRegister = (res: any) => {
    const token = res.data.token
    const tokenType = res.data.token_type || 'Bearer'
    const user = res.data.user
    useCookie('token').value = token
    useCookie('token_type').value = tokenType
    useCookie('avatar').value = user.avatar
    useCookie('birthdate').value = user.birthdate
    useCookie('created_at').value = user.created_at
    useCookie('email').value = user.email
    useCookie('email_verified_at').value = user.email_verified_at
    useCookie('id').value = user.id
    useCookie('name').value = user.name
    useCookie('phone').value = user.phone
    useCookie('updated_at').value = user.updated_at
    return navigateTo('/home')
}

// const handleOnSuccess = async (response: ImplicitFlowSuccessResponse) => {
// const res: { data: { token: string, token_type?: string, user?: any } }
//     = await $apiFetch('register', {
//         method: 'POST',
//         code: response.code,
//     })
// successRegister(res)

// };

// const handleOnError = (errorResponse: ImplicitFlowErrorResponse) => {
//   console.log("Error: ", errorResponse);
// };

// const { isReady, login } = useCodeClient({
//   onSuccess: handleOnSuccess,
//   onError: handleOnError,
// });
</script>

<template>
    <div>
        <Toast />
        <div class="flex flex-col items-center text-center w-full">
            <img :src="BsHeartPulse" alt="HeartPulse"
                class="w-[60px] h-[60px] mt-[75px] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl" />
            <h3 class="mt-2 font-[Georgia] text-[#05162C] text-[32px]">Create New Account</h3>
            <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="signUp">
                <div class="space-y-7 mt-7 sm:w-[350px] md:w-[396px] lg:w-[396px] mx-[16px]">
                    <div class="h-[48px] w-full">
                        <div class="flex items-center w-full rounded-[10px] bg-[#F5F6F7] px-[16px] gap-[8px]">
                            <i class="mdi mdi-account text-[#99A2AB] font-[Montserrat-Medium] text-lg"></i>
                            <InputText placeholder="Full Name" name="name"
                                class=" w-full font-[Montserrat-Medium] border-none text-[#99A2AB] bg-[#F5F6F7] focus:ring-0 focus:outline-none" />
                        </div>
                        <Message v-if="$form.name?.invalid" severity="error" size="small" variant="simple">{{
                            $form.name.error?.message }}</Message>
                    </div>
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
                            <i class="mdi mdi-phone text-[#99A2AB] font-[Montserrat-Medium] text-lg"></i>
                            <InputText placeholder="Phone" name="phone"
                                class="w-full font-[Montserrat-Medium] border-none text-[#99A2AB] bg-[#F5F6F7] focus:ring-0 focus:outline-none" />
                        </div>
                        <Message v-if="$form.phone?.invalid" severity="error" size="small" variant="simple">{{
                            $form.phone.error?.message }}</Message>
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
                    <div class="h-[48px] w-full">
                        <div class="flex items-center w-full rounded-[10px] bg-[#F5F6F7] px-[16px] gap-[8px]">
                            <img :src="KeySquare" alt="Password" class="w-5 h-5 text-[#99A2AB]" />
                            <Password placeholder="Confirm Password" name="password_confirmation"
                                inputClass="!border-none !shadow-none !bg-[#F5F6F7] focus:!ring-0 focus:!outline-none text-[#99A2AB] font-[Montserrat-Medium] w-full"
                                class="w-full" />
                        </div>
                        <Message v-if="$form.password_confirmation?.invalid" severity="error" size="small"
                            variant="simple">{{
                                $form.password_confirmation.error?.message }}</Message>
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
                <Button
                    class="justify-center flex items-center h-[60px] w-[60px] rounded-[16px] bg-white p-1 border-[#BBC1C7] border-[1px]">
                    <img :src="googleLogo" class="h-5 w-5" alt="google-icon" />
                </Button>
                <!-- <Button
                    :disabled="!isReady" @click="() => login()"
                    class="justify-center flex items-center h-[60px] w-[60px] rounded-[16px] bg-white p-1 border-[#BBC1C7] border-[1px]">
                    <img :src="googleLogo" class="h-5 w-5" alt="google-icon" />
                </Button> -->
                <Button
                    class="justify-center flex items-center h-[60px] w-[60px] rounded-[16px] bg-white p-1 border-[#BBC1C7] border-[1px]">
                    <img :src="appleLogo" class="h-5 w-5" alt="apple-icon" />
                </Button>
            </div>
            <div class="flex justify-center mt-4">
                <span class="text-[#99A2AB] font-[Montserrat-Medium] text-[12px]">Already have an account! </span>
                <span class="ml-1 text-[#145DB8] font-[Montserrat-Medium] text-[12px]">
                    <NuxtLink to="/sign-up"> Sign in</NuxtLink>
                </span>
            </div>
        </div>
    </div>
</template>
