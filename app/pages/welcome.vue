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
  <div class="flex flex-col items-center justify-center w-screen h-screen px-4 text-center mt-1/5">
      <img :src="loginImg" alt="Login" class="w-4/5 h-1/3 mx-1/5" />
      <div class="gap-4 xs:w-3/4 lg:w-1/2">
        <h3 class="font-georgia text-secondary-500 lg:text-2xl xs:text-sm">Let’s You In</h3>
      </div>
      <div class="mx-8 mt-5 font-montserratMedium bg-white">
        <Button class="text-base h-12 w-80 text-neutral-700  border-neutral-300 rounded-lg max-w-sm pr-4 pl-3">
          <span>
            <img :src="fbLogo" alt="fb-icon" />
          </span>
          Sign in with Facebook
        </Button>
        <div class="pt-2">
          <GoogleSignIn classStyle="text-base h-12 w-80 text-neutral-700 bg-white border-neutral-300 rounded-[10px] max-w-sm pr-[16px] pl-3" 
          lableName="Sign in with Google"
          />
        </div>
        <div class="pt-2">
          <Button class="text-base h-12 w-[396px] text-neutral-700 bg-white border-neutral-300 rounded-[10px] max-w-sm pr-[16px] pl-3">
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
</template>
