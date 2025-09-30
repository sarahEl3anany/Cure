<script setup lang="ts">
import userAvatar from '@/assets/images/home/defaultUser.svg'
let avatar = process.client ? sessionStorage.getItem('avatar') : undefined;
if(!avatar) {
    avatar = useCookie('avatar').value ? useCookie('avatar').value : undefined
    if(!avatar) {
        avatar = userAvatar
    }
}
</script>
<template>
    <div class="flex flex-col items-center justify-center px-4 text-center">
        <div class="header h-10 justify-between" >
            <div>
                <img :src="avatar" alt="Login" class="w-10 h-10 mx-1/5" />
            </div>
            <div>

            </div>
            <div>
                <div>
                    Welcome back, {{ userName }}
                </div>
            </div>
        </div>
    </div>
</template>