<script setup lang="ts">
import { useHeader } from '@/composables/useHeader'
import { useFooter } from '@/composables/useFooter'
import SearchBox from '~/components/home/searchBox.vue'
import Tags from '@/components/home/tags.vue';
import type { Tag } from '@/types/tag'
import d1 from '@/assets/images/home/doctors/3.jpg'
import d2 from '@/assets/images/home/doctors/4.png'
import d3 from '@/assets/images/home/doctors/5.png'
import d4 from '@/assets/images/home/doctors/6.png'
import History from '@/assets/icons/home/history.svg'

const { showHeader, backRoute, headerTitle } = useHeader()
const { showFooter } = useFooter()
onMounted(() => {
    showHeader.value = true
    showFooter.value = true
    backRoute.value = '/chat'
    headerTitle.value = 'Search'
})
definePageMeta({
    layout: 'default'
})

const selectedTab = ref('all')

const chats = ref([
    {
        id: 1,
        name: 'Dr. Robert Lewis',
        avatar: d1,
        lastMessage: "It's been around six.....",
        time: '5:30 PM',
        unreadCount: 3,
        favorite: false
    },
    {
        id: 2,
        name: 'Dr. Jana',
        avatar: d2,
        lastMessage: 'you: ok i will do it like...',
        time: '1:25 PM',
        unreadCount: 0,
        favorite: true
    },
    {
        id: 3,
        name: 'Dr. Jessica Turner',
        avatar: d3,
        lastMessage: "It's been around six.....",
        time: 'Yesterday',
        unreadCount: 0,
        favorite: false
    },
    {
        id: 4,
        name: 'Dr. Jessica',
        avatar: d4,
        lastMessage: "It's been around six.....",
        time: '2 days',
        unreadCount: 0,
        favorite: false
    }
])

const filteredChats = computed(() => {
    if (selectedTab.value === 'all') return chats.value
    if (selectedTab.value === 'unread') return chats.value.filter(c => c.unreadCount && c.unreadCount > 0)
    if (selectedTab.value === 'favorites') return chats.value.filter(c => c.favorite)
    return chats.value
})
const allHistory = ref<Tag[]>([
    {
        name: 'robert',
        img: History
    },
    {
        name: 'jessica',
        img: History
    },
])
</script>
<template>
    <SearchBox labelText="Search for chat, doctor" searchRoute="/chat/searchChat" />
    <div class="mt-4 px-2">
        <div class="w-full mt-3">
            <div class="font-georgia text-xl text-black mt-2 text-left mb-5">History</div>
        </div>
        <Tags :tag="allHistory" :showAll="true" class="text-neutral-900" />
        <div class="mt-4">
            <ul class="space-y-3">
                <li v-for="chat in filteredChats" :key="chat.id">
                    <NuxtLink :to="`/chat/${chat.id}`">
                        <div class=" p-3 flex items-center gap-3 bg-neutral-50 rounded-xl">
                            <img :src="chat.avatar" alt="avatar" class="w-14 h-14 rounded-full object-cover" />
                            <div class="flex-1">
                                <div class="flex justify-between items-center">
                                    <h4 class="font-semibold text-gray-800">{{ chat.name }}</h4>
                                    <div class="text-sm text-gray-500">{{ chat.time }}</div>
                                </div>
                                <p class="text-sm text-gray-500 truncate">{{ chat.lastMessage }}</p>
                            </div>
                            <div class="flex flex-col items-center gap-2">
                                <Badge v-if="chat.unreadCount && chat.unreadCount > 0"
                                    class="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                    {{ chat.unreadCount }}
                                </Badge>
                            </div>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>