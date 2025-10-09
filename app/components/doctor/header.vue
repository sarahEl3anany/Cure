<script setup lang="ts">
import doctor1 from '@/assets/images/home/doctors/1.jpg'
import Location from '@/assets/icons/home/location.svg'
</script>
<template>
    <div class="flex items-center gap-2">
      <div class="relative inline-block">
        <img v-if="doctor1"
          class="w-28 h-28 max-sm:w-20 max-sm:h-20 rounded-full border-primary-500 border object-cover" :src="doctor1"
          alt="Doctor avatar" />

        <i
          class="mdi mdi-check-decagram absolute bottom-0 right-1 translate-y-1 max-sm:translate-y-1/4 rounded-full text-primary-500 text-xl p-[2px]"></i>
      </div>

      <div class="flex flex-col flex-1 text-left space-y-2 max-sm:space-y-0 max-sm:pr-2">
        <p class="font-georgia text-secondary-500 dark:text-secondary-50 text-xl max-sm:text-base">
          Dr. Jessica Turner
        </p>
        <div class="flex items-start">
          <div class="flex items-center gap-1">
            <span class="text-neutral-700 text-montserrat text-sm max-sm:text-xs">
              Pulmonologist
            </span>
          </div>
        </div>
        <div class="flex items-center gap-1 mt-1 text-neutral-600 text-sm">
          <Location class="w-3 h-3 text-primary-500" />
          <div class="flex items-start">
            <span class="text-neutral-700 text-montserrat text-sm truncate max-sm:text-xs">129,El-Nasr Street,
              Cairo</span>
          </div>
        </div>
      </div>
      <div
        class="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-50 hover:bg-neutral-100">
        <i class="pi pi-heart text-secondary-500"></i>
      </div>
    </div>
</template>