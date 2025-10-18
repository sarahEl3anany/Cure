<script setup lang="ts">
import { useHeader } from '@/composables/useHeader'
const { headerTitle, backRoute, showHeader } = useHeader()
onMounted(() => {
    headerTitle.value = 'FAQs'
    backRoute.value = '/user/profile'
    showHeader.value = true
})
definePageMeta({
    layout: 'header-no-footer'
})
const activeIndex = ref(null)
</script>
<template>
    <div class="px-6 w-full space-y-4 mt-6">
        <div class="flex items-center rounded-lg p-4 bg-neutral-50">
            <Accordion v-model:value="activeIndex" expandIcon="pi pi-plus" collapseIcon="pi pi-minus" class="w-full">
                <AccordionPanel value="0">
                    <AccordionHeader>
                        <div class="gap-2 w-full">
                            <span class="font-georgia text-2xl whitespace-nowrap">What is this app used for?</span>
                        </div>
                    </AccordionHeader>
                    <AccordionContent>
                        <p class="mt-4">
                            This app allows you to search for doctors, book appointments, and consult in person easily from your phone.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>
        <div class="flex items-center rounded-lg p-4 bg-neutral-50">
            <Accordion v-model:value="activeIndex" expandIcon="pi pi-plus" collapseIcon="pi pi-minus" class="w-full">
                <AccordionPanel value="0">
                    <AccordionHeader>
                        <div class="gap-2 w-full">
                            <span class="font-georgia text-2xl whitespace-nowrap">Is the app free to use?</span>
                        </div>
                    </AccordionHeader>
                    <AccordionContent>
                        <p class="mt-4"></p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>
        <div class="flex items-center rounded-lg p-4 bg-neutral-50">
            <Accordion v-model:value="activeIndex" expandIcon="pi pi-plus" collapseIcon="pi pi-minus" class="w-full">
                <AccordionPanel value="0">
                    <AccordionHeader>
                        <div class="gap-2 w-full">
                            <span class="font-georgia text-2xl whitespace-nowrap">How can I find a doctor?</span>
                        </div>
                    </AccordionHeader>
                    <AccordionContent>
                        <p class="mt-4"></p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>
        <div class="flex items-center rounded-lg p-4 bg-neutral-50">
            <Accordion v-model:value="activeIndex" expandIcon="pi pi-plus" collapseIcon="pi pi-minus" class="w-full">
                <AccordionPanel value="0">
                    <AccordionHeader>
                        <div class="gap-2 w-full">
                            <span class="font-georgia text-2xl whitespace-nowrap">Can I cancel my appointment?</span>
                        </div>
                    </AccordionHeader>
                    <AccordionContent>
                        <p class="mt-4"></p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>
        <div class="flex items-center rounded-lg p-4 bg-neutral-50">
            <Accordion v-model:value="activeIndex" expandIcon="pi pi-plus" collapseIcon="pi pi-minus" class="w-full">
                <AccordionPanel value="0">
                    <AccordionHeader>
                        <div class="gap-2 w-full">
                            <span class="font-georgia text-2xl whitespace-nowrap">What payment are supported</span>
                        </div>
                    </AccordionHeader>
                    <AccordionContent>
                        <p class="mt-4"></p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>
        <div class="flex items-center rounded-lg p-4 bg-neutral-50">
            <Accordion v-model:value="activeIndex" expandIcon="pi pi-plus" collapseIcon="pi pi-minus" class="w-full">
                <AccordionPanel value="0">
                    <AccordionHeader>
                        <div class="gap-2 w-full">
                            <span class="font-georgia text-2xl whitespace-nowrap">How do I edit my profile?</span>
                        </div>
                    </AccordionHeader>
                    <AccordionContent>
                        <p class="mt-4"></p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>
    </div>
</template>