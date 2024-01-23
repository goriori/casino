<script setup>
import { alertTarget } from '@/components/modules/balance/popups/withdrawal/screens/message-screen/MessageScreen.options.js'
import ErrorIcon from '@/components/ui/icons/other/ErrorIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import FeedBackIcon from '@/components/ui/icons/other/FeedBackIcon.vue'
</script>

<template>
  <div class="message-screen">
    <div class="message-screen-error">
      <div class="error-icon">
        <ErrorIcon />
      </div>
      <div class="error-title">Ошибка платежа</div>
      <div class="error-description">
        Если вы сделали перевод по верным реквизитам, но платеж так и не прошел,
        то вам необходимо обратиться в службу поддержки - и мы поможем
        разобраться с ситуацией.
        <br /><br />
        Не переживайте - деньги не потеряны!
      </div>
      <div class="error-sum-translation">
        <p>Сумма пополнения:</p>
        <strong>1000 ₽</strong>
      </div>
      <div class="error-feedback">
        <BaseButton>
          <div class="btn-feedback">
            <FeedBackIcon />
            <p>Связаться с нами</p>
          </div>
        </BaseButton>
      </div>
    </div>

    <div class="message-screen-alerts">
      <div
        class="message-screen-alert"
        id="to-chair-alert"
        v-if="alertTarget === 'to-chair'"
        v-ripple
      >
        В кассу
      </div>
      <div class="message-screen-alert" id="to-repeat-alert" v-if="alertTarget === 'to-repeat'" v-ripple>
        Повторить еще раз
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'MessageScreen';
</style>
