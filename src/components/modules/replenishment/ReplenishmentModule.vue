<script setup>
import { useMethods } from '@/components/modules/replenishment/ReplenishmentModule.events.js'
import { useData } from '@/components/modules/replenishment/ReplenishmentModule.options.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import ReplenishmentScreen from '@/components/modules/replenishment/screens/replenishment-screen/ReplenishmentScreen.vue'
import ReplenishmentCryptocurrencyScreen from '@/components/modules/replenishment/screens/replenishment-cryptocurrency-screen/ReplenishmentCryptocurrencyScreen.vue'
import SumScreen from '@/components/modules/replenishment/screens/sum-screen/SumScreen.vue'
import SelectBankScreen from '@/components/modules/replenishment/screens/select-bank/SelectBankScreen.vue'
import SumTranslationScreen from '@/components/modules/replenishment/screens/sum-translation-screen/SumTranslationScreen.vue'
import ConfirmTranslationScreen from '@/components/modules/replenishment/screens/confirm-translation-screen/ConfirmTranslationScreen.vue'
import MessageScreen from '@/components/modules/replenishment/screens/message-screen/MessageScreen.vue'
import ArrowBackIcon from '@/components/ui/icons/other/ArrowBackIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'
import { usePaymentStore } from '@/store/payments/paymentStore.js'
import { onMounted } from 'vue'

const { historyStateManipulate, stateManipulate, stateMessage, stateSum } =
  useData()
const {
  onBack,
  onClose,
  onFinishWithdrawal,
  onSwitchWithdrawalConfirm,
  onSwitchWithdrawalMessage,
  onSwitchWithdrawalReplenishment,
  onSwitchWithdrawalSelectBank,
  onSwitchWithdrawalSum,
  onSwitchWithdrawalSumTranslation,
} = useMethods(historyStateManipulate, stateManipulate, stateMessage, stateSum)

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
          <BaseButton
            color="primary"
            outline
            @click="onBack"
            v-if="historyStateManipulate.length !== 0"
          >
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
          </div>
          <ReplenishmentScreen
            @method="onSwitchWithdrawalSum"
            v-if="stateManipulate === 'replenishment'"
          />
          <ReplenishmentCryptocurrencyScreen
            @success="onFinishWithdrawal('success-withdrawal')"
            v-if="stateManipulate === 'replenishment-cryptocurrency'"
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
@import 'ReplenisshmentModule';
</style>
