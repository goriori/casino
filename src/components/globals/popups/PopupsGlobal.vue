<script setup>
import PopupApplicationProcessing from '@/components/globals/popups/popup-application-processing/PopupApplicationProcessing.vue'
import PopupErrorServer from '@/components/globals/popups/popup-error-server/PopupErrorServer.vue'
import PopupConnectNetwork from '@/components/globals/popups/popup-connect-network/PopupConnectNetwork.vue'
import PopupReplenishment from '@/components/globals/popups/popup-replenishment/PopupReplenishment.vue'
import PopupSuccess from '@/components/globals/popups/popup-success/PopupSuccess.vue'
import PopupConclusion from '@/components/globals/popups/popup-conclusion/PopupConclusion.vue'
import PopupErrorValid from '@/components/globals/popups/popup-error-valid/PopupErrorValid.vue'
import { useStateStore } from '@/store/stateStore.js'
import { defineAsyncComponent } from 'vue'
import PopupProfileEdit from '@/components/globals/popups/popup-profile-edit/PopupProfileEdit.vue'
import PopupStatusList from '@/components/globals/popups/popup-status-list/PopupStatusList.vue'
import PopupExchangeCoins from '@/components/globals/popups/popup-exchange-coins/PopupExchangeCoins.vue'
import PopupErrorVerification from '@/components/globals/popups/popup-error-verification/PopupErrorVerification.vue'
import PopupRoulette from '@/components/globals/popups/popup-roulette/PopupRoulette.vue'
import PopupError from '@/components/globals/popups/popup-error/PopupError.vue'
import PopupWinnPrize from '@/components/globals/popups/popup-win-prize/PopupWinnPrize.vue'

const stateStore = useStateStore()
const PopupAuthorization = defineAsyncComponent(() =>
  import(
    '@/components/globals/popups/popup-authorization/PopupAuthorization.vue'
  )
)
const PopupRegistration = defineAsyncComponent(() =>
  import('@/components/globals/popups/popup-registration/PopupRegistration.vue')
)
</script>

<template>
  <Teleport to="body">
    <Transition name="slide">
      <PopupConnectNetwork />
    </Transition>
    <Transition>
      <PopupAuthorization
        v-if="stateStore.globalPopupsModules.authorization.visibility"
      />
    </Transition>
    <Transition name="slide">
      <PopupRegistration
        v-if="stateStore.globalPopupsModules.registration.visibility"
      />
    </Transition>
    <Transition name="slide">
      <PopupReplenishment
        @close="stateStore.globalPopupsModules.replenishment.visibility = false"
        v-if="stateStore.globalPopupsModules.replenishment.visibility"
      />
    </Transition>
    <Transition name="slide">
      <PopupConclusion
        v-if="stateStore.globalPopupsModules.conclusion.visibility"
      />
    </Transition>
    <Transition name="slide">
      <PopupProfileEdit
        @close="stateStore.globalPopupsModules.profileEdit.visibility = false"
        v-if="stateStore.globalPopupsModules.profileEdit.visibility"
      />
    </Transition>
    <Transition name="slide">
      <PopupStatusList
        @close="stateStore.globalPopupsModules.statusesList.visibility = false"
        v-if="stateStore.globalPopupsModules.statusesList.visibility"
      />
    </Transition>
    <Transition name="slide">
      <PopupRoulette
        @close="stateStore.globalPopupsModules.roulette.visibility = false"
        v-if="stateStore.globalPopupsModules.roulette.visibility"
      />
    </Transition>
    <Transition name="slide">
      <PopupWinnPrize
        @close="stateStore.globalPopupsModules.winnPrize.visibility = false"
        v-if="stateStore.globalPopupsModules.winnPrize.visibility"
      />
    </Transition>
    <Transition name="slide">
      <PopupError v-if="stateStore.globalPopupMessages.error.visibility" />
    </Transition>
    <Transition name="slide">
      <PopupErrorServer v-if="stateStore.globalPopupMessages.errorServer" />
    </Transition>
    <Transition name="slide">
      <PopupErrorVerification
        v-if="stateStore.globalPopupMessages.errorVerification"
      />
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
    <Transition name="slide">
      <PopupApplicationProcessing
        v-if="stateStore.globalPopupMessages.application"
      />
    </Transition>
    <Transition name="slide">
      <PopupExchangeCoins v-if="stateStore.globalPopupMessages.exchangeCoin" />
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss"></style>
