<script setup>
import { onMounted } from 'vue'
import {
  historyStateManipulate,
  stateManipulate,
  stateMessage,
  stateSum
} from '@/components/modules/balance/popups/withdrawal/WithdrawalPopup.option.js'
import {
  onSwitchWithdrawalReplenishment,
  onSwitchWithdrawalConclusion,
  onSwitchWithdrawalSum,
  onSwitchWithdrawalSelectBank,
  onSwitchWithdrawalSumTranslation,
  onSwitchWithdrawalConfirm,
  onSwitchWithdrawalMessage,
  onFinishWithdrawal,
  onClose,
  onBack,
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
import { useSessionStore } from '@/store/session/sessionStore.js'
import ReplenishmentCryptocurrencyScreen from '@/components/modules/balance/popups/withdrawal/screens/replenishment-cryptocurrency-screen/ReplenishmentCryptocurrencyScreen.vue'
import { usePaymentStore } from '@/store/payments/paymentStore.js'

const props = defineProps({
  setting: {
    type: Object,
    required: false,
  },
})
const emits = defineEmits(['close'])
const sessionStore = useSessionStore()
const paymentStore = usePaymentStore()
onMounted(async () => {
  await paymentStore.getRequisiteCards()
  stateManipulate.value = props.setting.targetScreen
})
</script>

<template>
  <div class="popup">
    <div class="popup-bg"></div>
    <div class="popup-withdrawal">
      <div class="popup-withdrawal-navigation">
        <div class="navigation-back">
          <BaseButton color="primary" outline @click="onBack" v-if="historyStateManipulate.length !== 0">
            <div class="btn-back-content">
              <ArrowBackIcon />
              <p>Назад</p>
            </div>
          </BaseButton>
        </div>
        <div class="navigation-close" @click="onClose(emits)">
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
            <p>{{ sessionStore.session.profile?.balance }}</p>
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
            @method="onSwitchWithdrawalSum"
            v-if="stateManipulate === 'replenishment'"
          />
          <ReplenishmentCryptocurrencyScreen
            @success="onFinishWithdrawal('success-withdrawal')"
            v-if="stateManipulate === 'replenishment-cryptocurrency'"
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
            :number-card-to="paymentStore.replObject.props"
            :sum="stateSum"
            @success="onSwitchWithdrawalConfirm"
            @error="console.log('error')"
            v-if="stateManipulate === 'sum-translation'"
          />
          <ConfirmTranslationScreen
            :sum="stateSum"
            @success="onSwitchWithdrawalMessage('success-withdrawal')"
            @error="onSwitchWithdrawalMessage('error-withdrawal')"
            v-if="stateManipulate === 'confirm-translation'"
          />
          <MessageScreen
            @close="onClose(emits)"
            :state-message="stateMessage"
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