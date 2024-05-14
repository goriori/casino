<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useStateStore } from '@/store/stateStore'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { useGameStore } from '@/store/games/gameStore.js'
import { useProviderStore } from '@/store/providers/providerStore.js'
import { useBonusSystemStore } from '@/store/bonus-system/bonusSystemStore.js'
import { usePaymentStore } from '@/store/payments/paymentStore.js'
import { useReloadInterval } from '@/utils/useReloadInterval.js'
import MoveUpModule from '@/components/modules/move-up/MoveUpModule.vue'
import VLoader from '@/components/VLoader.vue'
import PopupsGlobal from '@/components/globals/popups/PopupsGlobal.vue'

const route = useRoute()
const stateStore = useStateStore()
const sessionStore = useSessionStore()
const gameStore = useGameStore()
const providerStore = useProviderStore()
const bonusSystemStore = useBonusSystemStore()
const pyamentStore = usePaymentStore()

const fetchEntityData = async () => {
  const hasToken = sessionStore.session.token
  if (!hasToken) return
  Promise.all([
    sessionStore.getInfoSession(),
    sessionStore.getStatusPay(),
    pyamentStore.getRequisiteCards(),
  ]).then(() =>
    bonusSystemStore.onInitBonusSystemAccount(sessionStore.session.profile)
  )
}


useReloadInterval()
onMounted(async () => {
  await fetchEntityData()
})
</script>

<template>
  <main class="main">
    <PopupsGlobal />
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
