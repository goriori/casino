<script setup>
import { computed, onMounted, ref } from 'vue'
import { useBonusSystemStore } from '@/store/bonus-system/bonusSystemStore.js'
import { useStateStore } from '@/store/stateStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { ERRORS } from '@/configs/errors.js'
import { SUCCESS } from '@/configs/success.js'
import InfoTooltip from '@/components/ui/tooltips/info/InfoTooltip.vue'
import ProfileStatusTooltipMessage from '@/components/modules/tooltip-messages/profile-status/ProfileStatusTooltipMessage.vue'
import TextTooltip from '@/components/ui/tooltips/text/TextTooltip.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import ContentLoader from '@/components/ui/content-loader/ContentLoader.vue'

const bonusSystemStore = useBonusSystemStore()
const sessionStore = useSessionStore()
const stateStore = useStateStore()
const bonusOut = ref(0)
const loadModule = ref(true)
const validBonusOut = async () => {
  if (bonusOut.value < 10) throw false
  return true
}
const onExchange = () => {
  validBonusOut()
    .then(() => bonusSystemStore.onExchangeCoins(bonusOut.value))
    .then(() => {
      stateStore.globalPopupMessages.success.show(
        SUCCESS.SUCCESS_EXCHANGE_COIN.MESSAGE
      )
    })
    .catch((e) => {
      console.log(e)
      stateStore.globalPopupMessages.error.show(ERRORS.ERROR_SERVER.MESSAGE)
    })
    .finally(() => (bonusOut.value = 0))
}

const convertateCoins = computed(() => {
  const ratioAccountTarget = sessionStore.session.profile?.stair_status?.ratio
  return bonusOut.value / ratioAccountTarget
})

onMounted(() => {
  setTimeout(() => {
    if (bonusSystemStore.bonusSystemStat?.bonus) loadModule.value = false
    else loadModule.value = false
  }, 2800)
})
</script>

<template>
  <div v-if="loadModule">
    <ContentLoader type="default-card">
      <rect width="1000" height="800" />
    </ContentLoader>
  </div>
  <div class="exchange__points-module" v-else>
    <h2>Обмен баллов</h2>
    <div class="exchange__points-card">
      <InfoTooltip :message="ProfileStatusTooltipMessage" />
      <form class="exchange__points-form" @submit.prevent>
        <h3 class="form-title">
          Ваши баллы: <span>{{ bonusSystemStore.bonusSystemState.coins }}</span>
        </h3>
        <div class="form-links">
          <TextTooltip
            text="История платежей"
            message="Пока здесь нет ничего"
            class="tooltip"
          />
        </div>
        <div class="form-field">
          <input
            type="number"
            placeholder="Количество баллов"
            v-model="bonusOut"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
          >
            <path
              d="M1.93365 13L7.93365 7L1.93365 1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>{{ convertateCoins }} Р</p>
        </div>
        <BaseButton id="exchange_button" @click="onExchange">
          <p>Обменять</p>
        </BaseButton>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'ExchangePointsModule';
</style>
