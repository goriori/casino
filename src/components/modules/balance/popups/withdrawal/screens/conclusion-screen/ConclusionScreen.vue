<script setup>
import { onSendConclusionForm } from '@/components/modules/balance/popups/withdrawal/screens/conclusion-screen/ConclusionScreen.events.js'
import {
  cnclsnForm,
  statusTranslation,
} from '@/components/modules/balance/popups/withdrawal/screens/conclusion-screen/ConclusionScreen.options.js'
import CurrencyIcon from '@/components/ui/icons/balance/CurrencyIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'

const emits = defineEmits(['bank-card'])
const minCountWithdrawal = window.MESSAGES_POPUP.WITHDRAWAL.MIN_COUNT_WITHDRAWAL
const maxCountWithdrawal = window.MESSAGES_POPUP.WITHDRAWAL.MAX_COUNT_WITHDRAWAL
</script>

<template>
  <div class="popup-withdrawal-conclusion">
    <div class="deposit">
      <div class="deposit-card">
        <p>Вывод на банковскую карту:</p>
      </div>
      <div class="deposit-card-help">
        <div class="info-item">
          <h4>Банковская карта</h4>
          <input
            type="text"
            placeholder="Введите номер банковской карты"
            v-model="cnclsnForm.card"
          />
        </div>
        <div class="info-item">
          <h4>Сумма вывода средств</h4>
          <div class="input-currency">
            <input
              type="number"
              placeholder="Введите сумму. Мин. 500"
              :min="minCountWithdrawal"
              :max="maxCountWithdrawal"
              v-model="cnclsnForm.sum"
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
            v-model="cnclsnForm.date"
          />
        </div>
        <div class="withdrawal-module-action">
          <BaseButton color="primary" @click="onSendConclusionForm">
            <p class="withdrawal-module-action-text">Вывести средства</p>
          </BaseButton>
        </div>
        <div class="popup-withdrawal-alerts">
          <Transition name="fade">
            <div
              class="popup-withdrawal-alert"
              id="alert-success"
              @click="emits('success')"
              v-if="statusTranslation === 'success'"
            >
              Оплачено
            </div>
          </Transition>
          <Transition name="fade">
            <div
              class="popup-withdrawal-alert"
              id="alert-error"
              @click="emits('error')"
              v-if="statusTranslation === 'error'"
            >
              Ошибка
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'ConclusionScreen';
</style>
