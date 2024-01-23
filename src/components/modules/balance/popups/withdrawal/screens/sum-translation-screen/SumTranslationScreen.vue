<script setup>
import { onMounted } from 'vue'

import TimerIcon from '@/components/ui/icons/other/TimerIcon.vue'
import CompyIcon from '@/components/ui/icons/other/CompyIcon.vue'
import SberbankIcon from '@/components/ui/icons/other/SberbankIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import { onCheckStatusPay } from '@/components/modules/balance/popups/withdrawal/screens/sum-translation-screen/SumTranslationScreen.events.js'
import { statusTranslation } from '@/components/modules/balance/popups/withdrawal/screens/sum-translation-screen/SumTranslationScreen.option.js'
import { useTimer } from '@/utils/useTimer.js'

const emits = defineEmits(['success', 'error'])
const { currentTime, isFinished, startTimer } = useTimer(15 * 60 * 1000)
onMounted(() => {
  startTimer()
  onCheckStatusPay(emits)
})
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
            <h4>1000₽</h4>
          </div>
          <CompyIcon />
        </div>
        <div class="sum__translation-screen-info-item">
          <div class="item-info">
            <p>Номер карты для перевода</p>
            <h4>0000 0000 0000 0000</h4>
          </div>
          <CompyIcon />
        </div>
        <div class="sum__translation-screen-info-item">
          <div class="item-info">
            <p>Банк получателя</p>
            <h4>Сбербанк</h4>
          </div>
          <SberbankIcon />
        </div>
        <div class="sum__translation-screen-info-item">
          <div class="item-info">
            <p>Имя получателя:</p>
            <h4>Иванов Иван И. (Сбербанк)</h4>
          </div>
        </div>
      </div>
    </div>
    <BaseButton>
      <div class="btn-copy-number">
        <CompyIcon />
        <p>Скопировть номер карты</p>
      </div>
    </BaseButton>
    <div class="sum__translation-screen-alerts">
      <div
        class="sum__translation-screen-alert"
        id="alert-success"
        v-if="statusTranslation === 'success'"
      >
        Оплачено
      </div>
      <div
        class="sum__translation-screen-alert"
        id="alert-error"
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
