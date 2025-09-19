<script setup lang="ts">
import loginImg from '@/assets/images/sign-in/login.svg'
import fbLogo from '@/assets/images/sign-in/fbLogo.svg'
import googleLogo from '@/assets/images/sign-in/googleLogo.svg'
import appleLogo from '@/assets/images/sign-in/appleLogo.svg'
</script>

<template>
  <div>
    <div class="flex flex-col items-center text-center w-full">
      <img :src="loginImg" alt="Login" class="w-[306px] h-[310px] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl" />
      <h3 class="font-[Georgia] text-[#05162C] text-[24px]">Let’s You In</h3>
      <div class="mx-10">
        <div class="flex justify-center pt-5">
          <Button class="text-[16px] h-[48px] w-[396px] text-[#6D7379] bg-[#FFFFFF] border-[#BBC1C7] rounded-[10px] font-[Montserrat-Medium] max-w-sm pr-[16px] pl-[12px]">
            <span>
              <img :src="fbLogo" alt="fb-icon" />
            </span>
            Sign in with Facebook
          </Button>
        </div>
        <div class="flex justify-center pt-2">
          <Button class="text-[16px] h-[48px] w-[396px] text-[#6D7379] bg-[#FFFFFF] border-[#BBC1C7] rounded-[10px] font-[Montserrat-Medium] max-w-sm pr-[16px] pl-[12px]">
            <span>
              <img :src="googleLogo" alt="google-icon" />
            </span>
            Sign in with Google
          </Button>
        </div>
        <div class="flex justify-center pt-2">
          <Button class="text-[16px] h-[48px] w-[396px] text-[#6D7379] bg-[#FFFFFF] border-[#BBC1C7] rounded-[10px] font-[Montserrat-Medium] max-w-sm pr-[16px] pl-[12px]">
            <span>
              <img :src="appleLogo" alt="apple-icon" />
            </span>
            Sign in with Apple
          </Button>
        </div>
        <Divider align="center" class="w-[396px] text-[#99A2AB]">
          <span class="text-[#99A2AB] text-[16px] font-[Montserrat-Medium]">or</span>
        </Divider>
        <div class="flex justify-center">
          <Button class="text-[16px] h-[48px] w-[396px] text-[#FFFFFF] rounded-[7px] font-[Montserrat-Medium] max-w-sm">
            Sign in with your Phone Number
          </Button>
        </div>
        <div class="flex justify-center pt-2">
          <span class="text-[#99A2AB] font-[Montserrat-Medium] text-[12px]">Don’t have an account? </span>
          <span class="ml-1 text-[#145DB8] font-[Montserrat-Medium] text-[12px]">
            <NuxtLink to="/sign-up"> Sign up</NuxtLink>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
