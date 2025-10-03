<script setup lang="ts">
// import { HFaceBookLogin } from '@healerlab/vue3-facebook-login';
import  * as FBLogin from '@healerlab/vue3-facebook-login';
const { HFaceBookLogin } = FBLogin;
import fbLogo from '@/assets/images/sign-in/fbLogo.svg'
const props = defineProps({
    classStyle: String,
    lableName: String
});
const toast = useToast();
const { $apiFetch, $successRegister } = useNuxtApp()


const onSuccess = (res: any) => {
    $successRegister(res)
}

const onFailure = () => {
    // logic if auth failed
}


</script>

<template>
    <div>
        <HFaceBookLogin v-slot="fbLogin" app-id="1978077259678528" 
            scope="email,public_profile" @onSuccess="onSuccess"
            @onFailure="onFailure" 
            class="w-full flex justify-center items-center gap-2"
            fields="id,name,email,first_name,last_name,birthday">
            <Button :class="classStyle" @click="fbLogin.initFBLogin" >
                <img :src="fbLogo" class="h-5 w-5" alt="facebook-icon" />
                {{ lableName }}
            </Button>
        </HFaceBookLogin>
    </div>
</template>

<style scoped></style>
