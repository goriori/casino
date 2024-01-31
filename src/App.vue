<script setup>
import { useRoute } from 'vue-router'
import { useStateStore } from '@/store/stateStore'
import {useSessionStore} from '@/store/session/sessionStore.js'
import { useGameStore } from '@/store/games/gameStore.js'
import { useProviderStore } from '@/store/providers/providerStore.js'
import MoveUpModule from '@/components/modules/move-up/MoveUpModule.vue'
import VLoader from '@/components/VLoader.vue'
import { useSettingsStore } from '@/store/settings/settingStore.js'
import PopupConnectNetwork from '@/components/globals/popups/popup-connect-network/PopupConnectNetwork.vue'

const route = useRoute()

const stateStore = useStateStore()
const settingStore = useSettingsStore()
const sessionStore = useSessionStore()
const gameStore = useGameStore()
const providerStore = useProviderStore()


</script>

<template>
  <main class="main">
    <Teleport to="body">
      <Transition name="slide">
        <PopupConnectNetwork/>
      </Transition>
    </Teleport>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <transition name="fade-page" mode="out-in">
          <suspense>
            <component :is="Component" :key="route.fullPath"></component>
          </suspense>
        </transition>
        <MoveUpModule/>
      </template>
    </RouterView>
    <VLoader v-if="stateStore.isLoading" />
  </main>
</template>

<style scoped></style>
