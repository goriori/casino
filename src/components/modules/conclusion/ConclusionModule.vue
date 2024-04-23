<script setup>
import { useStateStore } from '@/store/stateStore.js'
import { useData } from '@/components/modules/conclusion/ConclusionModule.options.js'
import { useMethods } from '@/components/modules/conclusion/ConclusionModule.events.js'
import { useValid } from '@/components/modules/conclusion/ConclusionModule.valids.js'
import { onKeyPress } from '@/utils/helpers/numberKeyPress.js'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import CardIcon from '@/components/ui/icons/other/CardIcon.vue'
import ChoicePayCard from '@/components/ui/cards/choice-pay/ChoicePayCard.vue'
import CryptoPayIcon from '@/components/ui/icons/pay/CryptoPayIcon.vue'
import BankCardPayIcon from '@/components/ui/icons/pay/BankCardPayIcon.vue'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'

const props = defineProps({
  isPopup: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['success', 'error'])
const minCountWithdrawal = window.MIN_COUNT_WITHDRAWAL
const maxCountWithdrawal = window.MAX_COUNT_WITHDRAWAL
const stateStore = useStateStore()
const { choiceOut, validResults, withdrawalForm, timeClosePopup } = useData()
const {
  validForm,
  setErrorValidWithdrawal,
  setErrorWithdrawal,
  setSuccessWithdrawal,
} = useValid(choiceOut, timeClosePopup, validResults, withdrawalForm)
const { choicePay, onSendWithdrawal } = useMethods(
  choiceOut,
  withdrawalForm,
  setErrorValidWithdrawal,
  setErrorWithdrawal,
  setSuccessWithdrawal,
  validForm
)


</script>

<template>
  <div class="withdrawal-module">
    <div class="withdrawal-module-head" v-if="isPopup">
      <CloseIcon
        @click="stateStore.globalPopupsModules.conclusion.visibility = false"
      />
    </div>
    <div class="withdrawal-module-title">
      <p>Вывод средств</p>
      <CardIcon />
    </div>
    <div class="withdrawal-module-choice">
      <ChoicePayCard
        title="На карту"
        subtitle="Сбербанк, Тинькоф, Райффайзен, СБП"
        type="bankCard"
        :active="choiceOut.bankCard"
        @choice="choicePay"
      >
        <template #choice-pay-icon>
          <BankCardPayIcon />
        </template>
      </ChoicePayCard>
      <ChoicePayCard
        title="На криптокошелек"
        type="crypto"
        :active="choiceOut.crypto"
        @choice="choicePay"
      >
        <template #choice-pay-icon>
          <CryptoPayIcon />
        </template>
      </ChoicePayCard>
    </div>
    <div class="withdrawal-module-info">
      <div class="info-item">
        <h4>Введите сумму вывода:</h4>
        <p v-if="!validResults.sum">min {{ minCountWithdrawal }}</p>
        <div class="input-currency">
          <input
            type="number"
            name="sum"
            autocomplete="off"
            placeholder="Введите сумму"
            :min="minCountWithdrawal"
            :max="maxCountWithdrawal"
            v-model="withdrawalForm.sum"
            @keypress="onKeyPress"
          />
        </div>
      </div>
      <div class="info-item" v-if="choiceOut.bankCard">
        <h4>Банковская карта</h4>
        <input
          type="number"
          name="numberCard"
          autocomplete="off"
          placeholder="Введите номер банковской карты"
          v-model.trim="withdrawalForm.props"
          @keypress="onKeyPress"
        />
      </div>
      <div class="info-item" v-if="choiceOut.crypto">
        <h4>Криптокошелек</h4>
        <input
          type="text"
          name="addressWallet"
          autocomplete="off"
          placeholder="Введите адрес кошелька USDTTRC20"
          v-model.trim="withdrawalForm.props"
        />
      </div>
      <div class="withdrawal-module-action">
        <BaseButton color="primary" @click="onSendWithdrawal">
          <p class="withdrawal-module-action-text">Вывести средства</p>
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'ConclusionModule';
</style>
