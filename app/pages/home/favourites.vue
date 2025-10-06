<script setup lang="ts">
import empty from '@/assets/images/home/favourites/empty.svg'
import infoCard from '@/components/home/infoCard.vue';
import doctor1 from '@/assets/images/home/doctors/1.jpg'
import hospitals1 from '@/assets/images/home/hospitals/1.jpg'
import hospitals2 from '@/assets/images/home/hospitals/2.jpg'
import type { Information } from '@/types/information'
const activeIndex = ref(0)
const doctorsCard = ref<Information[]>([
  {
    name: 'Dr. Ahmed',
    img: doctor1,
    id: 1,
    isFavorite: true,
    specialty: 'Dentist',
    location: 'El-Nasr Hospital',
    time: '10:00 - 11:00',
    rating: 4.8,
  }
])
const hospitalsCard = ref<Information[]>([
  {
    name: 'El-Nasr Hospital',
    img: hospitals1,
    id: 1,
    isFavorite: true,
    specialty: 'Dentist',
    location: 'El-Nasr Hospital',
    time: '10:00 - 11:00',
    rating: 4.8,
  },
  {
    name: 'Cairo Clinic',
    img: hospitals2,
    id: 2,
    isFavorite: true,
    specialty: 'Cardiologist',
    location: 'Cairo Clinic',
    time: '12:00 - 13:00',
    rating: 4.6,
  },
])
</script>

<template>
  <div class="flex flex-col items-center justify-center  text-center"> 
    <div class="flex flex-row items-center w-full mt-3">
      <NuxtLink to="/home">
        <i class="pi pi-arrow-left justify-start ml-3"></i> 
      </NuxtLink>
      <div class="text-center mx-auto">
        <h3 class="font-georgia text-black dark:text-primary-50 text-2xl">Your Favorite</h3>
      </div>
    </div>
    <div v-if="doctorsCard.length > 0 || hospitalsCard.length > 0" class="flex flex-col w-full" >
      <TabView v-model:activeIndex="activeIndex">
        <TabPanel header="Doctors" value="doctors" :pt="{ headerAction: { class: 'font-georgia font-normal '+(activeIndex === 0 ? 'text-primary-500' : 'text-secondary-500') } }">
          <div> 
            <infoCard :infoCard="doctorsCard" />
          </div>
        </TabPanel>
        <TabPanel header="Hospitals" value="hospitals" :pt="{ headerAction: { class: 'font-georgia font-normal '+(activeIndex === 1 ? 'text-primary-500' : 'text-secondary-500') } }">
          <div>
            <infoCard :infoCard="hospitalsCard" />
          </div>
        </TabPanel>
      </TabView>
    </div>
    <div v-else>
      <div class="flex flex-col items-center justify-center px-4 text-center">
        <img :src="empty" alt="Favourites" class="mx-1/5 pt-4 max-w-sm max-h-sm" />
        <div class="gap-4 mt-3">
          <h3 class="font-georgia text-black dark:text-primary-50 lg:text-2xl xs:text-base">Your favorite!</h3>
          <p class="font-montserrat text-neutral-700 dark:text-secondary-50 text-base xs:text-sm mt-1">
            Add your favorite to find it easily
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
