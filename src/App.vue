<script setup>
import { useRoute } from 'vue-router'
import { useStateStore } from '@/store/stateStore'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { useGameStore } from '@/store/games/gameStore.js'
import { useProviderStore } from '@/store/providers/providerStore.js'
import MoveUpModule from '@/components/modules/move-up/MoveUpModule.vue'
import VLoader from '@/components/VLoader.vue'
import { useSettingsStore } from '@/store/settings/settingStore.js'
import PopupConnectNetwork from '@/components/globals/popups/popup-connect-network/PopupConnectNetwork.vue'
import { defineAsyncComponent } from 'vue'
import PopupReplenishment from '@/components/globals/popups/popup-replenishment/PopupReplenishment.vue'
import PopupErrorServer from '@/components/globals/popups/popup-error-server/PopupErrorServer.vue'
import PopupErrorValid from '@/components/globals/popups/popup-error-valid/PopupErrorValid.vue'
import PopupSuccess from '@/components/globals/popups/popup-success/PopupSuccess.vue'

const route = useRoute()

const AuthorizationPopupModule = defineAsyncComponent(() =>
  import('@/components/modules/authorization/AuthorizationPopupModule.vue')
)
const RegistrationPopupModule = defineAsyncComponent(() =>
  import('@/components/modules/registration/RegistrationPopupModule.vue')
)
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
        <PopupConnectNetwork />
      </Transition>
      <Transition>
        <AuthorizationPopupModule
          v-if="stateStore.globalPopupsModules.authorization.visibility"
        />
      </Transition>
      <Transition name="slide">
        <RegistrationPopupModule
          v-if="stateStore.globalPopupsModules.registration.visibility"
        />
      </Transition>
      <Transition name="slide">
        <PopupReplenishment
          v-if="stateStore.globalPopupsModules.replenishment.visibility"
        />
      </Transition>
      <Transition name="slide">
        <PopupErrorServer v-if="stateStore.globalPopupMessages.errorServer" />
      </Transition>
      <Transition name="slide">
        <PopupErrorServer v-if="stateStore.globalPopupMessages.errorServer" />
      </Transition>
      <Transition name="slide">
        <PopupErrorValid v-if="stateStore.globalPopupMessages.errorValid" />
      </Transition>
      <Transition name="slide">
        <PopupSuccess v-if="stateStore.globalPopupMessages.success" />
      </Transition>
    </Teleport>

    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <transition name="fade-page" mode="out-in">
          <suspense>
            <component :is="Component" :key="route.fullPath"></component>
          </suspense>
        </transition>
        <MoveUpModule />
      </template>
    </RouterView>
    <VLoader v-if="stateStore.isLoading" />
  </main>
</template>

<style scoped></style>
