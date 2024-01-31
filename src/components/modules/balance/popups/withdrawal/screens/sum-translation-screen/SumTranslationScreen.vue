<script setup>
import { onMounted, onUnmounted, watch } from 'vue'

import TimerIcon from '@/components/ui/icons/other/TimerIcon.vue'
import CompyIcon from '@/components/ui/icons/other/CompyIcon.vue'
import SberbankIcon from '@/components/ui/icons/other/SberbankIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import {
  clearOptions,
  onCheckStatusPay,
  onClipboardWrite,
} from '@/components/modules/balance/popups/withdrawal/screens/sum-translation-screen/SumTranslationScreen.events.js'
import { statusTranslation } from '@/components/modules/balance/popups/withdrawal/screens/sum-translation-screen/SumTranslationScreen.option.js'
import { useTimer } from '@/utils/useTimer.js'
import { usePaymentStore } from '@/store/payments/paymentStore.js'

const emits = defineEmits(['success', 'error'])
const props = defineProps({
  sum: {
    type: [Number, String],
    default: '0.00',
  },
  fullNameRecipient: {
    type: String,
    default: 'Иванов Иван И. (Сбербанк)',
  },
})
const paymentStore = usePaymentStore()
const { currentTime, isFinished, startTimer } = useTimer(15 * 60 * 1000)

watch(isFinished, (value) => {
  if (value) emits('error')
})
onMounted(() => {
  startTimer()
  onCheckStatusPay(emits)
})
onUnmounted(() => clearOptions())
</script>

<template>
  <div class="sum__translation-screen">
    <div class="sum__translation-screen-title">
      <h4>Переведите по указанным реквизитам</h4>
      <div class="sum__translation-screen-timer">
        <TimerIcon />
        <p>{{ currentTime || '00:00' }}</p>
      </div>
    </div>
    <div class="sum__translation-screen-attention">
      Скопируйте рквизиты, откройте приложение вашего банка и сделайте перевод
      одним платежом. Не оставляйте комментарий к переводу! Реквизиты для оплаты
      меняются с каждым платежом!
    </div>
    <div class="sum__translation-screen-info">
      <div class="sum__translation-screen-info-items">
        <div class="sum__translation-screen-info-item">
          <div class="item-info">
            <p>Сумма перевода</p>
            <h4>{{ paymentStore.replObject.sum }}₽</h4>
          </div>
          <CompyIcon @click="onClipboardWrite(sum)" />
        </div>
        <div class="sum__translation-screen-info-item">
          <div class="item-info">
            <p>Номер карты для перевода</p>
            <h4>{{ paymentStore.replObject.props }}</h4>
          </div>
          <CompyIcon @click="onClipboardWrite(paymentStore.replObject.props)" />
        </div>
        <div class="sum__translation-screen-info-item">
          <div class="item-info">
            <p>Банк получателя</p>
            <div id="toBank">
              <h4>{{ paymentStore.targetRequisite?.bankName }}</h4>
              <img
                :src="
                  'https://api.gamesoffutures.ru' +
                  paymentStore.targetRequisite?.bankIcon
                "
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="sum__translation-screen-info-item">
          <div class="item-info">
            <p>Имя получателя:</p>
            <h4>{{ fullNameRecipient }}</h4>
          </div>
        </div>
      </div>
    </div>
    <BaseButton>
      <div class="btn-copy-number" @click="onClipboardWrite(paymentStore.replObject.props)">
        <CompyIcon />
        <p>Скопировать номер карты</p>
      </div>
    </BaseButton>
    <div class="sum__translation-screen-alerts">
      <div
        class="sum__translation-screen-alert"
        id="alert-success"
        @click="emits('success')"
        v-if="statusTranslation === 'success'"
      >
        Оплачено
      </div>
      <div
        class="sum__translation-screen-alert"
        id="alert-error"
        @click="emits('error')"
        v-if="statusTranslation === 'error'"
      >
        Ошибка
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'SumTranslationScreen';
</style>