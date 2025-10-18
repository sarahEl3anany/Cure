<script setup lang="ts">
import LoginImg from '@/assets/images/sign-in/login.svg'
// import appleLogo from '@/assets/images/sign-in/appleLogo.svg'
import GoogleSignIn from '@/components/sign-in/google-sign-in.vue'
import FacebookLogin from '@/components/sign-in/facebook-login.vue'

definePageMeta({
  layout: 'no-header'
})
</script>

<template>
  <div class="flex flex-col items-center justify-center px-4 text-center">
    <LoginImg class="max-sm:w-3/4 max-sm:h-3/4 w-1/4 h-1/4 mt-1" />
    <div class="gap-4 mt-3 w-1/2 max-xs:w-3/4 max-lg:w-1/2">
      <h3 class="font-georgia text-secondary-500 max-lg:text-2xl max-xs:text-sm">Let’s You In</h3>
    </div>
    <div class="space-y-4 mt-4 gap-4 max-sm:w-full w-1/4">
      <FacebookLogin
        classStyle="text-base max-sm:text-sm max-xs:text-xs text-neutral-700 font-montserratMedium h-12 w-full border-neutral-300 rounded-lg bg-white"
        labelName="Sign in with Facebook" />
      <GoogleSignIn
        classStyle="text-base max-sm:text-sm max-xs:text-xs text-neutral-700 font-montserratMedium h-12 w-full border-neutral-300 rounded-lg bg-white"
        labelName="Sign in with Google" />
      <!-- <Button
        class="w-full text-base h-12 text-neutral-700 border-neutral-300 bg-white rounded-lg font-montserratMedium">
        <span>
          <img :src="appleLogo" alt="apple-icon" />
        </span>
        <span class="text-base max-sm:text-sm max-xs:text-xs text-neutral-700 font-montserratMedium ">
          Sign in with Apple
        </span>
      </Button> -->
      <div class="">
        <Divider align="center" class="w-full text-neutral-500">
          <span class="text-base font-montserratMedium text-neutral-500">or</span>
        </Divider>
      </div>
      <NuxtLink to="/auth/sign-in">
        <Button class="w-full text-base h-12 text-white rounded-lg font-montserratMedium">
          Sign in with your Phone Number
        </Button>
      </NuxtLink>
      <div class="">
        <span class="text-neutral-500 font-montserratMedium text-xs">Don’t have an account? </span>
        <span class=" text-primary-500 font-montserratMedium text-xs">
          <NuxtLink to="/auth/sign-up"> Sign up</NuxtLink>
        </span>
      </div>
    </div>
  </div>
</template>
