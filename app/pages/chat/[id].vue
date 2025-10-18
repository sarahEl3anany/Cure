<script setup lang="ts">
import { useHeader } from '@/composables/useHeader'
import { useFooter } from '@/composables/useFooter'
import { ref, onMounted, nextTick } from 'vue'
const { showHeader, backRoute, headerTitle, headerActions, headerActionKey } = useHeader()
const { showFooter } = useFooter()
onMounted(() => {
    showHeader.value = true
    showFooter.value = true
    backRoute.value = '/chat'
    headerTitle.value = 'Chat'
})
definePageMeta({
    layout: 'default'
})

const messages = ref<Array<{ id: number; fromMe: boolean; text: string; time: string; unread?: boolean }>>([
    { id: 1, fromMe: false, text: "Hi seif it's been a while", time: '10:00', unread: false },
    { id: 2, fromMe: true, text: 'Hi doctor that right', time: '10:01', unread: false },
    { id: 3, fromMe: true, text: 'i was okey,\nbut now i suffer form issues', time: '10:02', unread: false },
    { id: 4, fromMe: false, text: 'I feel bad', time: '10:20', unread: true },
    { id: 5, fromMe: false, text: 'What about you visit me', time: '10:21', unread: true },
    { id: 6, fromMe: false, text: "i free tomorrow,\nIt's been around six PM", time: '10:22', unread: true }
])

const newMessage = ref('')
const containerRef = ref<HTMLElement | null>(null)

function scrollToBottom() {
    nextTick(() => {
        if (containerRef.value) containerRef.value.scrollTop = containerRef.value.scrollHeight
    })
}

onMounted(() => scrollToBottom())

function sendMessage() {
    if (!newMessage.value.trim()) return
    messages.value.push({ id: Date.now(), fromMe: true, text: newMessage.value.trim(), time: 'Now' })
    newMessage.value = ''
    scrollToBottom()
}

function handleAttach() {
    alert('Attach action')
}

</script>

<template>
    <div class="h-[70vh] flex flex-col">
        <!-- messages -->
        <div ref="containerRef" class="flex-1 overflow-auto px-4 py-4" style="background:#f8fafb">
            <div class="space-y-3 max-w-xl mx-auto">
                <div v-for="msg in messages" :key="msg.id" class="w-full">
                    <div v-if="msg.unread" class="text-center text-sm text-gray-500 py-2">Unread messages</div>
                    <div :class="[ 'flex', msg.fromMe ? 'justify-end' : 'justify-start' ]">
                        <div :class="[ 'px-4 py-2 rounded-lg', msg.fromMe ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-800' ]" style="max-width:70%">
                            <div v-html="msg.text.replace(/\n/g, '<br/>')"></div>
                            <div class="text-xs text-gray-400 mt-1 text-right">{{ msg.time }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="p-3 border-t bg-white">
            <div class="flex items-center gap-3">
                <button @click="handleAttach" class="p-2 rounded-full bg-neutral-100">
                    <i class="pi pi-paperclip"></i>
                </button>
                <input v-model="newMessage" @keyup.enter="sendMessage" type="text" placeholder="Message" class="flex-1 px-4 py-2 border rounded-xl" />
                <button @click="sendMessage" class="ml-2 p-3 bg-primary-500 text-white rounded-full">
                    <i class="pi pi-send"></i>
                </button>
            </div>
        </div>
    </div>
</template>