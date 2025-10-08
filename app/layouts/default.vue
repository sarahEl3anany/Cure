<script setup lang="ts">
import Header from './header.vue';
import Footer from './footer.vue';
import { useHeader } from '@/composables/useHeader'
import { useFooter } from '@/composables/useFooter'
const { showHeader, backRoute, headerTitle, headerIcon, routeHeaderIcon } = useHeader()
const { showFooter } = useFooter()

</script>

<template>
  <div>
    <Header v-if="showHeader !== false" :title="headerTitle" 
    :backRoute="backRoute" :headerIcon="headerIcon" :routeHeaderIcon="routeHeaderIcon" />
      <slot />
    <Footer v-if="showFooter !== false" />     
  </div>
</template>

<style scoped></style>
