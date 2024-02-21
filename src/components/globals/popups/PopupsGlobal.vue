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
    <Transition name="slide">
      <PopupApplicationProcessing
        v-if="stateStore.globalPopupMessages.application"
      />
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss"></style>
