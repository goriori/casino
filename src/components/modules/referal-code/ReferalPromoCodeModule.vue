<script setup>
import { useBonusSystemStore } from '@/store/bonus-system/bonusSystemStore.js'
import InfoTooltip from '@/components/ui/tooltips/info/InfoTooltip.vue'
import ReferalPromocodeTooltipMessage from '@/components/modules/tooltip-messages/referal-promocode/ReferalPromocodeTooltipMessage.vue'
import { ref } from 'vue'
import { useStateStore } from '@/store/stateStore.js'
import { SUCCESS } from '@/configs/success.js'
import { ERRORS } from '@/configs/errors.js'

const bonusSystemStore = useBonusSystemStore()
const stateStore = useStateStore()
const referalCode = ref(bonusSystemStore.bonusSystemState.promo || null)
const copyBufferContent = () => {
  if (referalCode.value) {
    navigator.clipboard.writeText(referalCode.value)
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
</script>

<template>
  <div class="referal__code-module">
    <h2>Реферальный код</h2>
    <div class="referal__code-card" @click="onClick">
      <InfoTooltip :message="ReferalPromocodeTooltipMessage" />
      <p>{{ referalCode || 'Отсутствует' }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'ReferalPromoCodeModule';
</style>
