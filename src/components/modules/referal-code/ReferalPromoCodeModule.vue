<script setup>
import InfoIcon from '@/components/ui/icons/other/InfoIcon.vue'
import { useBonusSystemStore } from '@/store/bonus-system/bonusSystemStore.js'
import InfoTooltip from '@/components/ui/tooltips/info/InfoTooltip.vue'
import ReferalPromocodeTooltipMessage from '@/components/modules/tooltip-messages/referal-promocode/ReferalPromocodeTooltipMessage.vue'

const bonusSystemStore = useBonusSystemStore()
</script>

<template>
  <div class="referal__code-module">
    <h2>Реферальный код</h2>
    <div class="referal__code-card">
      <InfoTooltip :message="ReferalPromocodeTooltipMessage" />
      <p>{{ bonusSystemStore.bonusSystemState.promo || 'Отсутствует' }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'ReferalPromoCodeModule';
</style>
