<script setup lang="ts">
import ProfileHeader from '@/components/doctor/header.vue';
import ProfileFooter from '@/components/doctor/footer.vue';
const doctorID = useRoute().params.id

</script>

<template>
    <div>
        <ProfileHeader />
        <ProfileFooter labelText="Pay" :navigateTo="`/doctor/${doctorID}/finishPay`" />
    </div>
</template>