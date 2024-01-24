<script setup>
import { onMounted } from 'vue'
import {
  stateManipulate,
  stateSum,
} from '@/components/modules/balance/popups/withdrawal/WithdrawalPopup.option.js'
import {
  onSwitchWithdrawalReplenishment,
  onSwitchWithdrawalConclusion,
  onSwitchWithdrawalSum,
  onSwitchWithdrawalSelectBank,
  onSwitchWithdrawalSumTranslation,
  onSwitchWithdrawalConfirm,
  onSwitchWithdrawalMessage,
} from '@/components/modules/balance/popups/withdrawal/WithdrawalPopup.events.js'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import ReplenishmentScreen from '@/components/modules/balance/popups/withdrawal/screens/replenishment-screen/ReplenishmentScreen.vue'
import ConclusionScreen from '@/components/modules/balance/popups/withdrawal/screens/conclusion-screen/ConclusionScreen.vue'
import ArrowBackIcon from '@/components/ui/icons/other/ArrowBackIcon.vue'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'
import SumScreen from '@/components/modules/balance/popups/withdrawal/screens/sum-screen/SumScreen.vue'
import SelectBankScreen from '@/components/modules/balance/popups/withdrawal/screens/select-bank/SelectBankScreen.vue'
import SumTranslationScreen from '@/components/modules/balance/popups/withdrawal/screens/sum-translation-screen/SumTranslationScreen.vue'
import ConfirmTranslationScreen from '@/components/modules/balance/popups/withdrawal/screens/confirm-translation-screen/ConfirmTranslationScreen.vue'
import MessageScreen from '@/components/modules/balance/popups/withdrawal/screens/message-screen/MessageScreen.vue'

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
        <div
          class="popup-withdrawal-balance"
          v-if="
            stateManipulate === 'replenishment' ||
            stateManipulate === 'conclusion'
          "
        >
          <div class="popup-withdrawal-count">
            <p>0.00</p>
            <span>₽</span>
          </div>
        </div>

        <div class="popup-withdrawal-choice">
          <div
            class="choice-items"
            v-if="
              stateManipulate === 'replenishment' ||
              stateManipulate === 'conclusion'
            "
          >
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
          <ReplenishmentScreen
            @bank-card="onSwitchWithdrawalSum"
            v-if="stateManipulate === 'replenishment'"
          />
          <ConclusionScreen
            @bank-card="onSwitchWithdrawalSum"
            v-if="stateManipulate === 'conclusion'"
          />
          <SumScreen
            @replenish="onSwitchWithdrawalSelectBank"
            v-if="stateManipulate === 'sum-screen'"
          />
          <SelectBankScreen
            :sum="stateSum"
            @select-bank="onSwitchWithdrawalSumTranslation"
            v-if="stateManipulate === 'select-bank'"
          />
          <SumTranslationScreen
            :sum="stateSum"
            @success="onSwitchWithdrawalConfirm"
            @error="console.log('error')"
            v-if="stateManipulate === 'sum-translation'"
          />
          <ConfirmTranslationScreen
            :sum="stateSum"
            @success="onSwitchWithdrawalMessage('success')"
            @error="onSwitchWithdrawalMessage('error')"
            v-if="stateManipulate === 'confirm-translation'"
          />
          <MessageScreen
            :sum="stateSum"
            v-if="stateManipulate === 'message-translation'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'WithdrawalPopup';
</style>
