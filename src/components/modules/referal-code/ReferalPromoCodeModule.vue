<script setup>
import { useBonusSystemStore } from '@/store/bonus-system/bonusSystemStore.js'
import InfoTooltip from '@/components/ui/tooltips/info/InfoTooltip.vue'
import ReferalPromocodeTooltipMessage from '@/components/modules/tooltip-messages/referal-promocode/ReferalPromocodeTooltipMessage.vue'
import { onMounted, ref } from 'vue'
import { useStateStore } from '@/store/stateStore.js'
import { SUCCESS } from '@/configs/success.js'
import { ERRORS } from '@/configs/errors.js'
import ContentLoader from '@/components/ui/content-loader/ContentLoader.vue'
import { useSessionStore } from '@/store/session/sessionStore.js'

const sessionStore = useSessionStore()
const bonusSystemStore = useBonusSystemStore()
const stateStore = useStateStore()
const loadModule = ref(true)
const copyBufferContent = () => {
  if (sessionStore.session.profile?.promo) {
    navigator.clipboard.writeText(sessionStore.session.profile?.promo)
    stateStore.globalPopupMessages.success.show(
      SUCCESS.SUCCESS_COPY_REFERAL_CODE.MESSAGE
    )
  } else {
    stateStore.globalPopupMessages.error.show(
      ERRORS.ERROR_COPY_REFERALE_CODE.MESSAGE
    )
  }
}
const onClick = () => {
  copyBufferContent()
}
onMounted(async () => {
  if (sessionStore.session.profile?.promo) loadModule.value = false
  setTimeout(() => {
    loadModule.value = false
  }, 3000)
})
</script>

<template>
  <div class="referal__code-module">
    <h2>Реферальный код</h2>
    <ContentLoader type="default-card" v-if="loadModule">
      <rect width="400" height="200" />
    </ContentLoader>
    <div class="referal__code-card" @click="onClick" v-else>
      <InfoTooltip :message="ReferalPromocodeTooltipMessage" />
      <p>{{ bonusSystemStore.bonusSystemState?.promo || 'Отсутствует' }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'ReferalPromoCodeModule';
</style>
