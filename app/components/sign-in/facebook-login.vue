<script setup lang="ts">
import fbLogo from '@/assets/images/sign-in/fbLogo.svg'
const props = defineProps({
    classStyle: String,
    labelName: String
});
const toast = useToast();
// const { $apiFetch, $successRegister } = useNuxtApp()

const loginWithFacebook = (errorResponse: any) => {
  if (!(window as any).FB) {
    toast.add({
        severity: 'error',
        summary: 'Error',
        detail: errorResponse,
        life: 5000
    })
    return
  }

  ;(window as any).FB.login(
    (response: any) => {
      if (response.authResponse) {
        console.log('send request by token', response.authResponse.accessToken);
      } else {
         toast.add({
            severity: 'error',
            summary: 'Error',
            detail: response,
            life: 5000
        })
      }
    },
    { 
        scope: 'email,public_profile',
        fields:"id,name,email,first_name,last_name,birthday"
     }
  )
}

</script>

<template>
    <div>
        <Button :class="classStyle" @click="loginWithFacebook" >
          <img :src="fbLogo" class="h-5 w-5" alt="facebook-icon" />
          {{ labelName }} 
        </Button>
    </div>
</template>

<style scoped></style>