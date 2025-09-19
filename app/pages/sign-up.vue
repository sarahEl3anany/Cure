<script setup lang="ts">
import BsHeartPulse from '@/assets/images/sign-up/BsHeartPulse.svg'
import KeySquare from '@/assets/images/sign-up/KeySquare2.png'
// import googleLogo from '@/assets/images/sign-in/googleLogo.svg'
// import appleLogo from '@/assets/images/sign-in/appleLogo.svg'
</script>

<template>
    <div>
        <div class="flex flex-col items-center text-center w-full">
            <img :src="BsHeartPulse" alt="HeartPulse"
                class="w-[60px] h-[60px] mt-[133px] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl" />
            <h3 class="mt-2 font-[Georgia] text-[#05162C] text-[32px]">Create New Account</h3>
            <div class="space-y-7 mt-7 sm:w-[350px] md:w-[396px] lg:w-[396px] mx-[16px]">
                <div class="h-[48px] w-full">
                    <div class="flex items-center w-full rounded-[10px] bg-[#F5F6F7] px-[16px] gap-[8px]">
                        <i class="mdi mdi-account text-[#99A2AB] font-[Montserrat-Medium] text-lg"></i>
                        <InputText placeholder="Full Name" class=" w-full font-[Montserrat-Medium] border-none text-[#99A2AB] bg-[#F5F6F7] focus:ring-0 focus:outline-none" />
                    </div>
                </div>
                <div class="h-[48px] w-full">
                    <div class="flex items-center w-full rounded-[10px] bg-[#F5F6F7] px-[16px] gap-[8px]">
                        <i class="mdi mdi-email text-[#99A2AB] font-[Montserrat-Medium] text-lg"></i>
                        <InputText placeholder="Email" class="w-full font-[Montserrat-Medium] border-none text-[#99A2AB] bg-[#F5F6F7] focus:ring-0 focus:outline-none" />
                    </div>
                </div>
                <div class="h-[48px] w-full">
                    <div class="flex items-center w-full rounded-[10px] bg-[#F5F6F7] px-[16px] gap-[8px]">
                        <img :src="KeySquare" alt="Password" 
                        class="w-5 h-5 text-[#99A2AB]" />
                        <InputText placeholder="Password" class="w-full font-[Montserrat-Medium] border-none text-[#99A2AB] bg-[#F5F6F7] focus:ring-0 focus:outline-none" />
                    </div>
                </div>
                <div class="justify-center flex items-center w-full gap-2 h-[20px] font-[Montserrat-Medium]">
                    <Checkbox 
                     inputId="rememberMe" name="rememberMe" value="1" />
                    <label for="rememberMe" class="text-[#05162C] text-[16px] h-[20px]"> Remember me </label>
                </div>
            </div>
            <div class="flex justify-center sm:w-[350px] md:w-[396px] lg:w-[396px] mt-10">
                <Button class="w-full text-[16px] h-[48px] text-[#FFFFFF] rounded-[7px] font-[Montserrat-Medium] max-w-sm">
                    Sign up
                </Button>
            </div>
            <Divider align="center" class="w-[396px] text-[#99A2AB]">
                <span class="text-[#99A2AB] text-[16px] font-[Montserrat-Medium]">or</span>
            </Divider>
        </div>
    </div>
</template>
