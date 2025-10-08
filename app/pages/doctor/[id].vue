<script setup lang="ts">
import { useHeader } from '~/composables/useHeader'
import { useFooter } from '~/composables/useFooter'
const { showFooter } = useFooter()
const { showHeader, backRoute, headerTitle } = useHeader()
onMounted(() => {
  showFooter.value = false
  showHeader.value = true
  backRoute.value = '/home'
  headerTitle.value = 'Doctor details'
})
</script>
<template>
</template>