<script setup>
import { onMounted, watch } from 'vue'
import {
  onChangeFile,
  onChangeFullName,
  onCheckStatusTranslation,
  onClipboardWrite,
} from '@/components/modules/balance/popups/withdrawal/screens/confirm-translation-screen/ConfirmTranslationScreen.events.js'
import SberbankIcon from '@/components/ui/icons/other/SberbankIcon.vue'
import TimerIcon from '@/components/ui/icons/other/TimerIcon.vue'
import CopyIcon from '@/components/ui/icons/other/CompyIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import AttachIcon from '@/components/ui/icons/other/AttachIcon.vue'
import { useTimer } from '@/utils/useTimer.js'
import {
  fullName,
  screenshot,
} from '@/components/modules/balance/popups/withdrawal/screens/confirm-translation-screen/ConfirmTranslationScreen.options.js'
import { usePaymentStore } from '@/store/payments/paymentStore.js'

const emits = defineEmits(['success', 'error'])
const props = defineProps({
  sum: {
    type: [Number, String],
    default: '0.00',
  },
  numberCardTo: {
    type: String,
    default: '0000 0000 0000 0000',
  },
})

const paymentStore = usePaymentStore()
const { currentTime, isFinished, startTimer } = useTimer(15 * 60 * 1000)

watch(isFinished, (value) => {
  if (value) emits('error')
})

onMounted(() => {
  startTimer()
  onCheckStatusTranslation(emits)
})
</script>

<template>
  <div class="confirm__translation-screen">
    <div class="confirm__translation-screen-title">
      <div class="title-target-bank">
        <SberbankIcon />
        <p>Сбербанк</p>
      </div>
      <div class="title-timer">
        <TimerIcon />
        <p>{{ currentTime || '00:00' }}</p>
      </div>
    </div>
    <div class="confirm__translation-screen-info">
      <h3 class="info-title">Подтверждние перевода</h3>
      <div class="info-confirm">
        <div class="info-confirm-items">
          <div class="info-confirm-item">
            <div class="item-info">
              <p>Сумма перевода</p>
              <h4>{{ paymentStore.replObject.sum }}₽</h4>
            </div>
            <CopyIcon @click="onClipboardWrite(paymentStore.replObject.sum)" />
          </div>
          <div class="info-confirm-item">
            <div class="item-info">
              <p>Номер карты для перевода:</p>
              <h4>{{ paymentStore.replObject.props }}</h4>
            </div>
            <CopyIcon @click="onClipboardWrite(paymentStore.replObject.props)" />
          </div>
        </div>
      </div>
      <p class="info-text">
        Пожалуйста, подтвердите, что вы перевели правильную сумму на указанные
        реквизиты.
      </p>
    </div>
    <div class="confirm__translation-screen-full_name">
      <div class="full_name-field">
        <p>фио отправителя:*</p>
        <input
          type="text"
          placeholder="Фамилия Имя Отчество"
          @change="onChangeFullName"
        />
      </div>
      <BaseButton>
        <div class="btn-attach-file">
          <AttachIcon />
          <p>Прикрепить чек из банка*</p>
          <input
            type="file"
            accept=".jpg,.png"
            @change="onChangeFile"
          />
        </div>
      </BaseButton>
      <p class="attach-rules">
        Чек по операции с номером документа (только PNG и JPG)
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'ConfirmTranslationScreen';
</style>
