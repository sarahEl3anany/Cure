<script setup lang="ts">
import loginImg from '@/assets/images/sign-in/login.svg'
import fbLogo from '@/assets/images/sign-in/fbLogo.svg'
import appleLogo from '@/assets/images/sign-in/appleLogo.svg'
import GoogleSignIn from '@/components/sign-in/google-sign-in.vue'
const goToLogin = () => {
    navigateTo('/sign-in')
}
</script>

<template>
  <div>
    <div class="flex flex-col items-center text-center w-full">
      <img :src="loginImg" alt="Login" class="w-[306px] h-[310px] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl" />
      <h3 class="font-[Georgia] text-secondary-500 text-2xl">Let’s You In</h3>
      <div class="mx-10">
        <div class="flex justify-center pt-5">
          <Button class="text-base h-12 w-[396px] text-neutral-700 bg-white border-neutral-300 rounded-[10px] font-[Montserrat-Medium] max-w-sm pr-[16px] pl-3">
            <span>
              <img :src="fbLogo" alt="fb-icon" />
            </span>
            Sign in with Facebook
          </Button>
        </div>
        <div class="flex justify-center pt-2">
          <GoogleSignIn classStyle="text-base h-12 w-[396px] text-neutral-700 bg-white border-neutral-300 rounded-[10px] font-[Montserrat-Medium] max-w-sm pr-[16px] pl-3" 
          lableName="Sign in with Google"
          />
        </div>
        <div class="flex justify-center pt-2">
          <Button class="text-base h-12 w-[396px] text-neutral-700 bg-white border-neutral-300 rounded-[10px] font-[Montserrat-Medium] max-w-sm pr-[16px] pl-3">
            <span>
              <img :src="appleLogo" alt="apple-icon" />
            </span>
            Sign in with Apple
          </Button>
        </div>
        <Divider align="center" class="w-[396px] text-neutral-500">
          <span class="text-neutral-500 text-base font-[Montserrat-Medium]">or</span>
        </Divider>
        <div class="flex justify-center">
          <Button @click="goToLogin" class="text-base h-12 w-[396px] text-white rounded-[7px] font-[Montserrat-Medium] max-w-sm">
            Sign in with your Phone Number
          </Button>
        </div>
        <div class="flex justify-center mt-2">
          <span class="text-neutral-500 font-[Montserrat-Medium] text-xs">Don’t have an account? </span>
          <span class="ml-1 text-primary-500 font-[Montserrat-Medium] text-xs">
            <NuxtLink to="/sign-up"> Sign up</NuxtLink>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
