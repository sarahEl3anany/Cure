<script setup lang="ts">
import type { Tag } from '@/types/tag'

const props = defineProps({
  tag: {
    type: Array as PropType<Tag[]>
  },
  showAll: {
    type: Boolean,
    default: false
  },
  showVertically: {
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
        class="items-center gap-2 px-4 py-2 rounded-full border 
               cursor-pointer hover:bg-neutral-50 w-auto"
        :class="showVertically ? 'flex flex-col rounded-xl bg-neutral-50 hover:bg-white border-neutral-500' : 'flex border-neutral-300 bg-white hover:bg-neutral-50' "
      >
        <img :src="value.img" alt="icon" class="w-4 h-4" v-if="value.img" :class="showVertically ? 'mx-auto' : ''" />
        <span class="text-neutral-900 text-sm font-montserrat">{{ value.name }}</span>
      </div>
    </div>
  </div> 
</template>

