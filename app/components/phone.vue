<script setup lang="ts">
import { CountryService } from '@/service/country.service'
import type { Country } from 'country-list-with-dial-code-and-flag'

const countries = ref<Country[]>([])
const selectedCountry = ref<any>(null)
const phone = ref('')

onMounted(async () => {
    const data = await CountryService.getCountries()
    countries.value = data
    selectedCountry.value = data.find(c => c.code === 'EG') 
})
</script>
<template>
    <div class="flex items-center rounded-lg bg-neutral-50 px-3 py-1 gap-2">
        <Select v-model="selectedCountry" :options="countries" optionLabel="name" filter placeholder="Select country"
            class="w-32 border-0 bg-neutral-50 text-neutral-700 font-montserratMedium text-sm focus:ring-0 focus:outline-none">
            <template #option="slotProps">
                <div class="flex items-center gap-2">
                    <span>{{ slotProps.option.flag }}</span>
                    <span>{{ slotProps.option.name }}</span>
                    <span class="text-secondary-500 text-xs ml-auto">{{ slotProps.option.dial_code }}</span>
                </div>
            </template>

            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex items-center gap-2">
                    <span>{{ slotProps.value.flag }}</span>
                    <span>{{ slotProps.value.dial_code }}</span>
                </div>
                <span v-else class="text-neutral-400">Select Country</span>
            </template>
        </Select>
        <InputText v-model="phone" placeholder="Phone" name="phone"
            class="w-full font-montserratMedium border-none text-neutral-500 bg-neutral-50 outline-none focus:ring-0 focus:outline-none" />
    </div>
</template>