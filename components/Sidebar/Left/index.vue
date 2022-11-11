<script setup>
import { HomeIcon } from "@heroicons/vue/24/solid"
import { ArchiveBoxIcon, HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, EllipsisHorizontalIcon, ChevronDownIcon } from "@heroicons/vue/24/outline"

const user = useSupabaseUser()
const client = useSupabaseClient()
const colorMode = useColorMode()

const { defaultTransition } = useTailwindConfig()

const colorModeIcon = computed(() => colorMode.preference === 'dark' ? 'heroicons-outline:moon' : 'heroicons-outline:sun')

const toggleDark = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const logout = async () => {
    await client.auth.signOut()
}

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="h-screen flex flex-col bg-red-400">
        <div class="p-2 my-2 rounded-full hover:bg-blue-100 w-min dark:hover:bg-white/20" :class="defaultTransition">
            <nuxt-link to="/">
                <div class="w-8 h-8">
                    <LogoTwitter />
                </div>
            </nuxt-link>
        </div>
        <div class="mt-2 space-y-3">
            <SidebarLeftTab active>
                <template v-slot:icon>
                    <HomeIcon />
                </template>
                <template v-slot:name>
                    Home
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <ArchiveBoxIcon />
                </template>
                <template v-slot:name>
                    Productos
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <BellIcon />
                </template>
                <template v-slot:name>
                    Notifications
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <InboxIcon />
                </template>
                <template v-slot:name>
                    Messages
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <BookmarkIcon />
                </template>
                <template v-slot:name>
                    Bookmarks
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <DocumentTextIcon />
                </template>
                <template v-slot:name>
                    List
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <UserIcon />
                </template>
                <template v-slot:name>
                    Profile
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab @click="logout">
                <template v-slot:icon>
                    <EllipsisHorizontalIcon />
                </template>
                <template v-slot:name>
                    More
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab v-if="!user">
                <template v-slot:icon>
                    <EllipsisHorizontalIcon />
                </template>
                <template v-slot:name>
                    Sign in
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab v-if="user" @click="logout">
                <template v-slot:icon>
                    <EllipsisHorizontalIcon />
                </template>
                <template v-slot:name>
                    Logout
                </template>
            </SidebarLeftTab>
            <UButton variant="transparent" :icon="colorModeIcon" @click="toggleDark" />
        </div>


        <div class="flex flex-row items-center justify-center px-2 py-2 mx-auto mt-auto mb-5 rounded-full cursor-pointer w-14 xl:w-full hover:bg-gray-100 dark:hover:bg-dim-800"
            :class="defaultTransition" @click="logout">
    
            <div class="flex flex-row">
                <img :src="props.user.profileImage" class="w-10 h-10 rounded-full">
                <div class="flex-col hidden ml-2 xl:block">
                    <h1 class="text-sm font-bold text-gray-800 dark:text-white">
                        {{ user.email.split('@')[0] }}
                    </h1>
                    <p class="text-sm text-gray-400">
                        {{ user.email.split('@')[0] }}
                    </p>
                </div>
    
            </div>
    
            <!-- ICON -->
            <div class="hidden ml-auto xl:block">
                <div class="w-6 h-6">
                    <ChevronDownIcon />
                </div>
            </div>
    
    
    
        </div>
    </div>
</template>

