<script setup lang="ts">
import { useHeader } from '@/composables/useHeader'
import { useFooter } from '@/composables/useFooter'
import SearchBox from '~/components/home/searchBox.vue'
import d1 from '/assets/images/home/doctors/3.jpg'
import d2 from '/assets/images/home/doctors/4.png'
import d3 from '/assets/images/home/doctors/5.png'
import d4 from '/assets/images/home/doctors/6.png'

const { showHeader, backRoute, headerTitle, headerActions, headerActionKey } = useHeader()
const { showFooter } = useFooter()
onMounted(() => {
    showHeader.value = true
    showFooter.value = true
    backRoute.value = '/home'
    headerTitle.value = 'Chat'
})
definePageMeta({
    layout: 'default'
})

const tabs = [
    { key: 'all', label: 'All' },
    { key: 'unread', label: 'Unread' },
    { key: 'favorites', label: 'Favorites' }
]
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

const selectedIds = ref<number[]>([])

function enterSelectionMode(firstId?: number) {
    if (firstId && !selectedIds.value.includes(firstId)) selectedIds.value.push(firstId)
    headerTitle.value = `${selectedIds.value.length}`
    // set header actions (icon class, key)
    headerActions.value = [
        { icon: 'mdi mdi-trash-can-outline', key: 'delete' },
        { icon: 'pi pi-thumbtack', key: 'pin' },
        { icon: 'mdi mdi-volume-off', key: 'mute' },
        { icon: 'pi pi-ellipsis-v', key: 'more' }
    ]
}

function exitSelectionMode() {
    selectedIds.value = []
    headerTitle.value = 'Chat'
    backRoute.value = '/home'
    headerActions.value = []
    headerActionKey.value = ''
}

watch(headerActionKey, (key) => {
    if (!key) return
    if (key === 'delete') {
        chats.value = chats.value.filter(c => !selectedIds.value.includes(c.id))
        exitSelectionMode()
    }
    headerActionKey.value = ''
})

function toggleSelection(id: number) {
    const idx = selectedIds.value.indexOf(id)
    if (idx === -1) selectedIds.value.push(id)
    else selectedIds.value.splice(idx, 1)
    headerTitle.value = `${selectedIds.value.length}`
    if (selectedIds.value.length === 0) exitSelectionMode()
}

function handleLongPress(id?: number) {
    enterSelectionMode(id)
}
</script>
<template>
    <SearchBox labelText="Search for chat, doctor" searchRoute="/chat/searchChat" />
    <div class="mt-4 px-2">
        <div class="flex gap-3">
            <button v-for="tab in tabs" :key="tab.key" @click="selectedTab = tab.key"
                :class="['px-3 py-1 rounded-md text-sm', selectedTab === tab.key ? 'bg-primary-500 text-white' : 'text-neutral-500']"
                class="transition-colors font-montserratMedium">
                {{ tab.label }}
            </button>
        </div>

        <ul class="space-y-3 pt-3">
            <li v-for="chat in filteredChats" :key="chat.id" @contextmenu.prevent="handleLongPress(chat.id)"
                @click="selectedIds.length ? toggleSelection(chat.id) : null">
                <NuxtLink :to="`/chat/${chat.id}`">
                    <div :class="['p-3 flex items-center gap-3 rounded-xl', selectedIds.includes(chat.id) ? 'border-2 border-neutral-500 bg-neutral-50' : 'bg-neutral-50']">
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
</template>