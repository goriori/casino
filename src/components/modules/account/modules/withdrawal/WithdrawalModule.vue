<script setup>
import {
  choiceOut,
  translationMessage,
  withdrawalForm,
} from '@/components/modules/account/modules/withdrawal/WithdrawalModule.options.js'
import {
  choicePay,
  onSendWithdrawal,
} from '@/components/modules/account/modules/withdrawal/WithdrawalModule.events.js'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import CurrencyIcon from '@/components/ui/icons/balance/CurrencyIcon.vue'
import CardIcon from '@/components/ui/icons/other/CardIcon.vue'
import PopupSuccessWithdrawal from '@/components/modules/account/modules/withdrawal/popups/popup-success/PopupSuccessWithdrawal.vue'
import PopupErrorServerWithdrawal from '@/components/modules/account/modules/withdrawal/popups/popup-error-server/PopupErrorServerWithdrawal.vue'
import PopupErrorValidWithdrawal from '@/components/modules/account/modules/withdrawal/popups/popup-error-valid/PopupErrorValidWithdrawal.vue'
import ChoicePayCard from '@/components/ui/cards/choice-pay/ChoicePayCard.vue'
import CryptoPayIcon from '@/components/ui/icons/pay/CryptoPayIcon.vue'
import BankCardPayIcon from '@/components/ui/icons/pay/BankCardPayIcon.vue'

const emits = defineEmits(['success', 'error'])
const minCountWithdrawal = window.MESSAGES_POPUP.WITHDRAWAL.MIN_COUNT_WITHDRAWAL
const maxCountWithdrawal = window.MESSAGES_POPUP.WITHDRAWAL.MAX_COUNT_WITHDRAWAL
</script>

<template>
  <div class="withdrawal-module">
    <div class="authorization-popups">
      <Teleport to="body">
        <Transition name="slide">
          <PopupSuccessWithdrawal
            v-if="translationMessage.success"
            @close="translationMessage.success = false"
          />
        </Transition>
        <Transition name="slide">
          <PopupErrorServerWithdrawal
            v-if="translationMessage.error"
            @close="translationMessage.error = false"
          />
        </Transition>
        <Transition name="slide">
          <PopupErrorValidWithdrawal
            v-if="translationMessage.isValid"
            @close="translationMessage.isValid = false"
          />
        </Transition>
      </Teleport>
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
        <div class="input-currency">
          <input
            type="number"
            placeholder="Введите сумму"
            :min="minCountWithdrawal"
            :max="maxCountWithdrawal"
            v-model="withdrawalForm.sum"
          />
        </div>
      </div>
      <div class="info-item" v-if="choiceOut.bankCard">
        <h4>Банковская карта</h4>
        <input
          type="number"
          placeholder="Введите номер банковской карты"
          v-model="withdrawalForm.card"
        />
      </div>
      <div class="info-item" v-if="choiceOut.crypto">
        <h4>Криптокошелек</h4>
        <input
          type="text"
          placeholder="Введите адрес кошелька USDTTRC20"
          v-model="withdrawalForm.cryptoWallet"
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
@import 'WithdrawalModule';
</style>
