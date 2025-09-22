<template>
  <div> 
    <div class="splash fixed w-full h-full grid place-items-center bg-primary-500 z-[9999]">
      <div class="splash-container bg-primary-500 overflow-hidden">
        <img
          class="splash-icon absolute top-1/2 left-1/2 w-14 h-14"
          alt="Heart pulse icon"
          src="/bs-heart-pulse.svg"
          loading="lazy"
        />

        <div class="progress-indicator absolute bottom-20 left-1/2 flex gap-1 items-center justify-center" aria-label="Progress dots">
          <span class="dot dot-lg bg-white inline-block origin-center" />
          <span class="dot dot-md bg-white inline-block origin-center" />
          <span class="dot dot-sm bg-white inline-block origin-center" />
          <span class="dot dot-xs bg-white inline-block origin-center" />
          <span class="dot dot-xxs bg-white inline-block origin-center" />
        </div>

        <div class="home-indicator absolute bottom-0 left-0 w-full h-8 flex items-center justify-center px-2 py-[10px] " aria-hidden="true">
          <div class="bg-white rounded-[100px] w-[134px] h-1" />
        </div>
      </div>  
    </div>
  </div>
</template>
<style scoped>
    @import '@/assets/css/SplashScreen.css';
</style>

