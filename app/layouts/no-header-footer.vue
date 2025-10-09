<script setup lang="ts">
import Footer from './footer.vue';
import { useFooter } from '@/composables/useFooter'
const { showFooter } = useFooter()

</script>

<template>
  <div>
      <slot />
    <Footer v-if="showFooter !== false" />     
  </div>
</template>

<style scoped></style>
