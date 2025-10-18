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
        class="items-center gap-2 px-4 py-2 rounded-xl border 
               cursor-pointer hover:bg-neutral-50 w-auto"
        :class="[
          showVertically ? 'flex flex-col rounded-xl border-neutral-500' : 'flex border-neutral-300 hover:bg-neutral-50' 
          , value.selected ? 'bg-primary-500 ' : (showVertically ? 'bg-neutral-50 hover:bg-white' : 'bg-white')]"
      >
        <component
          v-if="value.img"
          :is="value.img"
          class="w-4 h-4"
          :class="[
            showVertically ? 'mx-auto' : '',
            value.selected ? 'text-white' : 'text-neutral-900'
          ]"
        />
        <span class=" text-sm font-montserrat"
        :class="value.selected ? 'text-white' : 'text-neutral-900'"
        >{{ value.name }}</span>
      </div>
    </div>
  </div> 
</template>

