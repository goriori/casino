<script setup>
import { onSendConclusionForm } from '@/components/modules/balance/popups/withdrawal/screens/conclusion-screen/ConclusionScreen.events.js'

import { cnclsnForm } from '@/components/modules/balance/popups/withdrawal/screens/conclusion-screen/ConclusionScreen.options.js'
import CurrencyIcon from '@/components/ui/icons/balance/CurrencyIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'

const emits = defineEmits(['bank-card'])
</script>

<template>
  <div class="popup-withdrawal-conclusion">
    <div class="deposit">
      <div class="deposit-card">
        <p>Вывод на банковскую карту:</p>
        <!--        <div class="deposit-card-pay" @click="emits('bank-card')" v-ripple>-->
        <!--          <WalletIcon />-->
        <!--          <div class="deposit-card-pay-content">-->
        <!--            <h4>Оплата банковской картой</h4>-->
        <!--            <p>Сбербанк, Тинькофф, Райффайзен, СБП</p>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
      <div class="deposit-card-help">
        <div class="info-item">
          <h4>ID пользователя</h4>
          <input
            type="text"
            placeholder="Введите ID"
            v-model="cnclsnForm.tg_id"
          />
        </div>
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
              placeholder="Введите сумму. Мин. 1000"
              min="1000"
              max="1000000000"
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
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'ConclusionScreen';
</style>