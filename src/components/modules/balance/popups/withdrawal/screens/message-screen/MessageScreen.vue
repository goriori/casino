<script setup>
import { alertTarget } from '@/components/modules/balance/popups/withdrawal/screens/message-screen/MessageScreen.options.js'
import ErrorIcon from '@/components/ui/icons/other/ErrorIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import FeedBackIcon from '@/components/ui/icons/other/FeedBackIcon.vue'
import SuccessIcon from '@/components/ui/icons/other/SuccessIcon.vue'

const props = defineProps({
  sum: {
    type: [Number, String],
    default: '0.00',
  },
  stateMessage: {
    type: String,
    default: 'error-withdrawal',
  },
})
const emits = defineEmits(['close'])
</script>

<template>
  <div class="message-screen">
    <div class="message-screen-error-withdrawal" v-if="stateMessage === 'error-withdrawal' ">
      <div class="error-icon">
        <ErrorIcon />
      </div>
      <div class="error-withdrawal-title">Ошибка платежа</div>
      <div class="error-withdrawal-description">
        Если вы сделали перевод по верным реквизитам, но платеж так и не прошел,
        то вам необходимо обратиться в службу поддержки - и мы поможем
        разобраться с ситуацией.
        <br /><br />
        Не переживайте - деньги не потеряны!
      </div>
      <div class="error-withdrawal-sum-translation">
        <p>Сумма пополнения:</p>
        <strong>{{ sum }} ₽</strong>
      </div>
      <div class="error-withdrawal-feedback">
        <BaseButton>
          <div class="btn-feedback">
            <FeedBackIcon />
            <p>Связаться с нами</p>
          </div>
        </BaseButton>
      </div>
    </div>

    <div class="message-screen-success-withdrawal" v-if="stateMessage === 'success-withdrawal' ">
      <div class="success-withdrawal-icon">
        <SuccessIcon />
      </div>
      <div class="success-withdrawal-title">Ваш платеж прошел успешно</div>
      <div class="success-withdrawal-description">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
        латинице с начала XVI века. В то время некий безымянный печатник создал
        большую коллекцию размеров и форм шрифтов, используя
      </div>
      <div class="success-withdrawal-sum-translation">
        <p>Сумма пополнения:</p>
        <strong>{{ sum }} ₽</strong>
      </div>
    </div>

    <div class="message-screen-alerts">
      <div
        class="message-screen-alert"
        id="to-chair-alert"
        v-if="alertTarget === 'to-chair'"
        @click="emits('close')"
        v-ripple
      >
        В кассу
      </div>
      <div
        class="message-screen-alert"
        id="to-repeat-alert"
        v-if="alertTarget === 'to-repeat'"
        v-ripple
      >
        Повторить еще раз
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'MessageScreen';
</style>
