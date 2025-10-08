<script setup lang="ts">
import type { Information } from '@/types/information'

const props = defineProps({
  infoCard: {
    type: Array as PropType<Information[]>
  }
})
</script>
<template>
  <div class="w-full space-y-3">
    <div
      v-for="(value, key) in infoCard"
      :key="key"
      class="flex items-center border bg-white rounded-2xl shadow-md gap-3 h-20 "
    >
      <img
        :src="value.img"
        alt="tag"
        class="w-16 max-sm:w-20 h-full object-cover rounded-l-xl"
      />

      <div class="flex flex-col flex-1 text-left space-y-2 max-sm:space-y-0 max-sm:pr-2">
        <span class="font-georgia text-lg max-sm:text-base text-black truncate">
          {{ value.name }}
        </span>
        <p class="font-montserrat text-sm max-sm:text-xs text-neutral-700 truncate">
          {{ value.specialty }} | {{ value.location }}
        </p>

        <div class="flex items-center gap-3 mt-1">
          <div class="flex items-center gap-1">
            <i class="pi pi-star-fill text-yellow-400 text-sm max-sm:text-xs"></i>
            <span class="font-montserratMedium text-sm max-sm:text-xs text-secondary-400">
              {{ value.rating }}
            </span>
          </div>

          <div class="flex items-center gap-1">
            <i class="pi pi-clock text-neutral-400 text-sm max-sm:text-xs"></i>
            <span class="font-montserratMedium text-sm max-sm:text-xs text-secondary-400">
              {{ value.time }}
            </span>
          </div>
        </div>
      </div>
      <button
        class="p-2 max-sm:p-3 rounded-full hover:bg-secondary-100 shrink-0"
      >
        <i
          :class="
            value.isFavorite
              ? 'pi pi-heart-fill text-red-500'
              : 'pi pi-heart text-secondary-500'
          "
        ></i>
      </button>
    </div>
  </div>
</template>
