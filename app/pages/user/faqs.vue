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
</script>
<template>
    <div class="px-6 w-full space-y-4 mt-6">
        <div class="flex items-center rounded-lg p-4 bg-neutral-50">
            <Accordion class="custom-accordion" value="0" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
                <AccordionPanel value="0">
                    <AccordionHeader>
                        <div class="gap-2 w-full">
                            <span class="font-georgia text-2xl whitespace-nowrap">What is this app used for?</span>
                            <Divider class="flex-grow text" />
                        </div>
                    </AccordionHeader>
                    <AccordionContent>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>
    </div>
</template>