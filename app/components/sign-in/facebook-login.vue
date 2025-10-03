<script setup lang="ts">
const config = useRuntimeConfig();
import  {HFaceBookLogin} from '@healerlab/vue3-facebook-login';
import fbLogo from '@/assets/images/sign-in/fbLogo.svg'
const props = defineProps({
    classStyle: String,
    lableName: String
});
const toast = useToast();
// const { $apiFetch, $successRegister } = useNuxtApp()


const onSuccess = (res: any) => {
    // $successRegister(res)
    console.log('send request by token', res.authResponse.accessToken);
}

const onFailure = (errorResponse: any) => {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: errorResponse,
      life: 5000
  })
}
const fbReady = ref(false);

onMounted(() => {
  const checkFB = setInterval(() => {
    if ((window as any).FB) {
      fbReady.value = true;
      clearInterval(checkFB);
    }
  }, 300);
});


</script>

<template>
    <div>
        <HFaceBookLogin v-slot="fbLogin" :app-id="config.public.facebookAppId" 
            scope="email,public_profile" @onSuccess="onSuccess"
            @onFailure="onFailure" 
            class="w-full flex justify-center items-center gap-2"
            fields="id,name,email,first_name,last_name,birthday">
            <Button :class="classStyle" @click="fbLogin.initFBLogin" 
            :disabled="!fbReady"
             >
                <img :src="fbLogo" class="h-5 w-5" alt="facebook-icon" />
                {{ lableName }} 
            </Button>
        </HFaceBookLogin>
    </div>
</template>

<style scoped></style>
