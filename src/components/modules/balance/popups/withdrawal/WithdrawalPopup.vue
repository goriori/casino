<script setup>
import { onMounted } from 'vue'
import { stateManipulate } from '@/components/modules/balance/popups/withdrawal/WithdrawalPopup.option.js'
import {
  onSwitchWithdrawalReplenishment,
  onSwitchWithdrawalConclusion,
} from '@/components/modules/balance/popups/withdrawal/WithdrawalPopup.events.js'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import ReplenishmentScreen from '@/components/modules/balance/popups/withdrawal/screens/replenishment-screen/ReplenishmentScreen.vue'
import ConclusionScreen from '@/components/modules/balance/popups/withdrawal/screens/conclusion-screen/ConclusionScreen.vue'
import ArrowBackIcon from '@/components/ui/icons/other/ArrowBackIcon.vue'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'

const props = defineProps({
  setting: {
    type: Object,
    required: false,
  },
})
const emits = defineEmits(['close'])
onMounted(() => (stateManipulate.value = props.setting.targetScreen))
</script>

<template>
  <div class="popup">
    <div class="popup-bg"></div>
    <div class="popup-withdrawal">
      <div class="popup-withdrawal-navigation">
        <div class="navigation-back">
          <BaseButton color="primary" outline>
            <div class="btn-back-content">
              <ArrowBackIcon />
              <p>Назад</p>
            </div>
          </BaseButton>
        </div>
        <div class="navigation-close" @click="emits('close')">
          <CloseIcon />
        </div>
      </div>
      <div class="popup-withdrawal-content">
        <div class="popup-withdrawal-balance">
          <div class="popup-withdrawal-count">
            <p>0.00</p>
            <span>₽</span>
          </div>
        </div>
        <div class="popup-withdrawal-choice">
          <div class="choice-items">
            <div
              :class="[
                'choice-item ',
                {
                  active: stateManipulate === 'replenishment',
                },
              ]"
              @click="onSwitchWithdrawalReplenishment"
            >
              Пополнение
            </div>
            <div
              :class="[
                'choice-item ',
                {
                  active: stateManipulate === 'conclusion',
                },
              ]"
              @click="onSwitchWithdrawalConclusion"
            >
              Вывод
            </div>
          </div>
          <ReplenishmentScreen v-if="stateManipulate === 'replenishment'" />
          <ConclusionScreen v-if="stateManipulate === 'conclusion'" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'WithdrawalPopup';
</style>
