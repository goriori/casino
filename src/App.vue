<script setup>
import { useRoute } from 'vue-router'
import VLoader from '@/components/VLoader.vue'
import { useStateStore } from '@/store/stateStore'
import {useSessionStore} from '@/store/session/sessionStore.js'
import { useGameStore } from '@/store/games/gameStore.js'
import { useProviderStore } from '@/store/providers/providerStore.js'

const route = useRoute()
const stateStore = useStateStore()
const sessionStore = useSessionStore()
const gameStore = useGameStore()
const providerStore = useProviderStore()
</script>

<template>
  <main class="main">
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <transition name="fade-page" mode="out-in">
          <suspense>
            <component :is="Component" :key="route.fullPath"></component>
          </suspense>
        </transition>
      </template>
    </RouterView>
    <VLoader v-if="stateStore.isLoading" />
  </main>
</template>

<style scoped></style>
