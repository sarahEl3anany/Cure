<script setup lang="ts">
import googleLogo from '@/assets/images/sign-in/googleLogo.svg'
import {
  useCodeClient,
  type ImplicitFlowSuccessResponse,
  type ImplicitFlowErrorResponse,
} from "vue3-google-signin";
const props = defineProps({
  classStyle: String,
  lableName: String
});
const toast = useToast();
const { $apiFetch, $successRegister } = useNuxtApp()

const handleOnSuccess = async (response: ImplicitFlowSuccessResponse) => {
const res: {
  data: {
    token: string
    token_type?: string
    user: {
      avatar?: string
      birthdate?: string
      created_at?: string
      email: string
      email_verified_at?: string
      id: number
      name: string
      phone?: string
      updated_at?: string
    }
  }
} = await $apiFetch('register', {
  method: 'POST',
  body: { code: response.code }
})

$successRegister(res)

};

const handleOnError = (errorResponse: ImplicitFlowErrorResponse) => {
  toast.add({
      severity: 'error',
      summary: 'Error',
      detail: errorResponse,
      life: 5000
  })
};

const { isReady, login } = useCodeClient({
  onSuccess: handleOnSuccess,
  onError: handleOnError,
});
</script>

<template>
  <div>
    <Button
        :disabled="!isReady" @click="() => login()"
        :class="classStyle">
        <img :src="googleLogo" class="h-5 w-5" alt="google-icon" />
        {{ lableName }}
    </Button>
  </div>
</template>

<style scoped></style>
