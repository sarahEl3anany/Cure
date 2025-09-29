<script setup lang="ts">
const { $apiFetch, $successRegisterSession } = useNuxtApp()
let verifyMsg = ''
try {
    const values = useRoute().query
    const res: { data: { token: string }, message: string, user: any }
        = await $apiFetch('auth/verify', {
            method: 'GET',
            params: values
        }) as { data: { token: string }, message: string, user: any }
    verifyMsg = res.message
    setTimeout(() => {
        $successRegisterSession(res.user)
    }, 5000);
} catch (err: any) {
    const apiError = err?.response?._data || {}
    const message = apiError.message || JSON.stringify(apiError)
    verifyMsg = message
    setTimeout(() => {
        navigateTo('/')
    }, 5000);
}
</script>

<template>
    <div class="flex flex-col items-center justify-center px-4 text-center">
        <Toast />
        <div class="w-full mt-5 justify-center">
            <div class="flex-1 text-center">
                <h3 class="font-georgia text-secondary-500 dark:text-primary-50 text-3xl">{{ verifyMsg }} , and you will be redirected to the home page</h3>
            </div>
        </div>
    </div>
</template>
