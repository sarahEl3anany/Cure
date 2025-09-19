<script setup lang="ts"></script>
<template>
  <div> 
    <div class="splash fixed w-full h-full grid place-items-center bg-[#145DB8] z-[9999]">
      <div class="splash-container bg-[#145DB8] overflow-hidden">
        <img
          class="splash-icon absolute top-1/2 left-1/2 w-[60px] h-[60px]  "
          alt="Heart pulse icon"
          src="/bs-heart-pulse.svg"
          loading="lazy"
        />

        <div class="progress-indicator absolute bottom-[77px] left-1/2 flex gap-1 items-center justify-center" aria-label="Progress dots">
          <span class="dot dot-lg bg-[#FFFFFF] inline-block origin-center" />
          <span class="dot dot-md bg-[#FFFFFF] inline-block origin-center" />
          <span class="dot dot-sm bg-[#FFFFFF] inline-block origin-center" />
          <span class="dot dot-xs bg-[#FFFFFF] inline-block origin-center" />
          <span class="dot dot-xxs bg-[#FFFFFF] inline-block origin-center" />
        </div>

        <div class="home-indicator absolute bottom-0 left-0 w-full h-[32x] flex items-center justify-center px-[8px] py-[10px] " aria-hidden="true">
          <div class="bg-[#FFFFFF] rounded-[100px] w-[134px] h-[5px]" />
        </div>
      </div>  
    </div>
  </div>
</template>
<style scoped>
    @import '@/assets/css/SplashScreen.css';
</style>

