<script setup lang="ts">
</script>
<template>
  <div class="flex justify-center w-full mt-5 px-2">
      <div class="flex items-center  rounded-md bg-neutral-50 md:w-full sm:w-[396px] px-1 shadow-sm ">
        <NuxtLink to="/home/search">
          <i class="pi pi-search w-3 text-neutral-500 mr-2 border-none"></i>
        </NuxtLink>
        <InputText 
          placeholder="Search for specialty, doctor" 
          name="search"
          class="w-full text-sm font-montserratMedium border-none text-neutral-700 bg-neutral-50 outline-none focus:ring-0 focus:outline-none" 
        />
      </div>
    </div>
</template>