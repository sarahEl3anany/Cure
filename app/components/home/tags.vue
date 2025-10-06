<script setup lang="ts">
import type { Tag } from '~/types/tag'

const props = defineProps({
  tag: {
    type: Array as PropType<Tag[]>
  },
  showAll: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div class="w-full">
    <div class="flex flex-wrap gap-2 mt-2">
      <div
        v-for="(value, key) in tag"
        :key="key"
        class="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 bg-white 
               cursor-pointer hover:bg-neutral-50 w-auto"
      >
        <img :src="value.img" alt="icon" class="w-4 h-4" v-if="value.img" />
        <span class="text-neutral-900 text-sm font-montserrat">{{ value.name }}</span>
      </div>
    </div>
  </div> 
</template>

