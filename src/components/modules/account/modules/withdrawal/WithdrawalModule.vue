<script setup>
import {
  translationMessage,
  withdrawalForm,
} from '@/components/modules/account/modules/withdrawal/WithdrawalModule.options.js'
import { onSendWithdrawal } from '@/components/modules/account/modules/withdrawal/WithdrawalModule.events.js'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import CurrencyIcon from '@/components/ui/icons/balance/CurrencyIcon.vue'
import CardIcon from '@/components/ui/icons/other/CardIcon.vue'
import PopupSuccessWithdrawal from '@/components/modules/account/modules/withdrawal/popups/popup-success/PopupSuccessWithdrawal.vue'
import PopupErrorServerWithdrawal from '@/components/modules/account/modules/withdrawal/popups/popup-error-server/PopupErrorServerWithdrawal.vue'
import PopupErrorValidWithdrawal from '@/components/modules/account/modules/withdrawal/popups/popup-error-valid/PopupErrorValidWithdrawal.vue'

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
    <div class="withdrawal-module-info">
      <div class="info-item">
        <h4>Банковская карта</h4>
        <input
          type="text"
          placeholder="Введите номер банковской карты"
          v-model="withdrawalForm.card"
        />
      </div>
      <div class="info-item">
        <h4>Сумма вывода средств</h4>
        <div class="input-currency">
          <input
            type="number"
            placeholder="Введите сумму"
            :min="minCountWithdrawal"
            :max="maxCountWithdrawal"
            v-model="withdrawalForm.sum"
          />
          <div class="input-currency-target">
            <CurrencyIcon />
            <p>RUB</p>
          </div>
        </div>
      </div>
      <div class="info-item">
        <h4>Дата вывода средств</h4>
        <input
          type="date"
          placeholder="Введите дату вывода"
          v-model="withdrawalForm.date"
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
