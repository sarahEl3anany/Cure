<script setup lang="ts">
setTimeout(() => {
    navigateTo('/')
}, 5000);
</script>
<template>
    <div class="flex flex-col items-center justify-center px-4 text-center">
        <Toast />
        <div class="w-full mt-5 justify-center">
            <div class="flex-1 text-center">
                <h3 class="font-georgia text-secondary-500 dark:text-primary-50 text-3xl">Please check your email to verify your account</h3>
            </div>
        </div>
    </div>
</template>
