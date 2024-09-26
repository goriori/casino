<script setup>
import { onMounted, onUnmounted, watch, ref } from 'vue'
import {
  clearOptions,
  onSubmit,
  onChangeFullName,
  onClipboardWrite,
} from '@/components/modules/balance/popups/withdrawal/screens/confirm-translation-screen/ConfirmTranslationScreen.events.js'
import { useTimer } from '@/utils/useTimer.js'
import { usePaymentStore } from '@/store/payments/paymentStore.js'
import { translationMessages } from '@/components/modules/balance/popups/withdrawal/screens/confirm-translation-screen/ConfirmTranslationScreen.options.js'

import TimerIcon from '@/components/ui/icons/other/TimerIcon.vue'
import CopyIcon from '@/components/ui/icons/other/CompyIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import AttachIcon from '@/components/ui/icons/other/AttachIcon.vue'
import PopupErrorValidConfirmTranslation from '@/components/modules/balance/popups/withdrawal/screens/confirm-translation-screen/popups/popup-error-valid/PopupErrorValidConfirmTranslation.vue'
import PopupErrorServerConfirmTranslation from '@/components/modules/balance/popups/withdrawal/screens/confirm-translation-screen/popups/popup-error-server/PopupErrorServerConfirmTranslation.vue'

const emits = defineEmits(['success', 'error'])
const props = defineProps({
  sum: {
    type: [Number, String],
    default: '0.00',
  },
})

const paymentStore = usePaymentStore()
const { currentTime, isFinished, startTimer } = useTimer(15 * 60 * 1000)

const time = ref('')
const onClick = () => {
  if (time.value.length < 5) {
    // onErrorValid()
    return
  }
  onSubmit(time, emits)
}

watch(isFinished, (value) => {
  if (value) emits('error')
})

onMounted(() => {
  startTimer()
})

onUnmounted(() => clearOptions())
</script>

<template>
  <div class="confirm__translation-screen">
    <div class="confirm__translation-screen-popups">
      <Teleport to="body">
        <Transition name="slide">
          <PopupErrorServerConfirmTranslation
            @close="translationMessages.error = false"
            v-if="translationMessages.error"
          />
        </Transition>
        <Transition name="slide">
          <PopupErrorValidConfirmTranslation
            @close="translationMessages.isValid = false"
            v-if="translationMessages.isValid"
          />
        </Transition>
      </Teleport>
    </div>
    <div class="confirm__translation-screen-title">
      <div class="title-target-bank">
        <img
          :src="
            'https://api.gamesoffutures.ru' +
            paymentStore.targetRequisite.bankIcon
          "
          alt=""
        />
        <p>{{ paymentStore.targetRequisite.bankName }}</p>
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
            <CopyIcon
              @click="onClipboardWrite(paymentStore.replObject.props)"
            />
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
      <div class="full_name-field">
        <p>Время платежа:*</p>
        <input
          v-model="time"
          type="text"
          v-maska="'##:##'"
          name="fullname"
          autocomplete="off"
          placeholder="00:00"
        />
      </div>
      <BaseButton @click="onClick">
        <div class="btn-attach-file">Отправить</div>
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'ConfirmTranslationScreen';
</style>
