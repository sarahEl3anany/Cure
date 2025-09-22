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
    <div class="gap-4 mt-3 xs:w-3/4 lg:w-1/2">
      <h3 class="font-georgia text-secondary-500 dark:text-primary-50 lg:text-2xl xs:text-sm">Let’s You In</h3>
    </div>
    <div class="space-y-5 mt-12">
      <div class="mx-8 xs:w-80 sm:w-80 md:w-80 lg:w-96">
        <Button class="h-12 w-full border-neutral-300 rounded-lg bg-white">
          <span>
            <img :src="fbLogo" alt="fb-icon" />
          </span>
          <span class="text-base sm:text-sm xs:text-xs text-neutral-700 font-montserratMedium">
            Sign in with Facebook
          </span>
        </Button>
      </div>
      <div class="mx-8 xs:w-80 sm:w-80 md:w-80 lg:w-96">
        <GoogleSignIn classStyle="text-base sm:text-sm xs:text-xs text-neutral-700 font-montserratMedium h-12 w-full border-neutral-300 rounded-lg bg-white" 
        lableName="Sign in with Google"
        />
      </div>
      <div class="mx-8 xs:w-80 sm:w-80 md:w-80 lg:w-96">
        <Button class="h-12 w-full border-neutral-300 rounded-lg bg-white">
          <span>
            <img :src="appleLogo" alt="apple-icon" />
          </span>
          <span class="text-base sm:text-sm xs:text-xs text-neutral-700 font-montserratMedium">
            Sign in with Apple
          </span>
        </Button>
      </div>
      <div class="mx-8 xs:w-80 sm:w-80 md:w-80 lg:w-96">
        <Divider align="center" class="w-full text-neutral-500">
          <span class="text-base font-montserratMedium text-neutral-500">or</span>
        </Divider>
      </div>
      <Button @click="goToLogin" class="text-base sm:text-sm xs:text-xs h-12 mx-8 xs:w-80 sm:w-80 md:w-80 lg:w-96 text-white rounded-lg font-montserratMedium">
        Sign in with your Phone Number
      </Button>
      <div class="mx-8 xs:w-80 sm:w-80 md:w-80 lg:w-96">
        <span class="text-neutral-500 font-montserratMedium text-xs">Don’t have an account? </span>
        <span class="ml-1 text-primary-500 font-montserratMedium text-xs">
          <NuxtLink to="/sign-up"> Sign up</NuxtLink>
        </span>
      </div>
    </div>
  </div>
</template>
