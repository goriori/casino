<script setup>
import {
  balance,
  sumMessages,
} from '@/components/modules/balance/popups/withdrawal/screens/sum-screen/SumScreen.options.js'
import {
  onChangeSlotBalance,
  onConfirmSum,
} from '@/components/modules/balance/popups/withdrawal/screens/sum-screen/SumScreen.events.js'
import PopupErrorValidSum from '@/components/modules/balance/popups/withdrawal/screens/sum-screen/popups/popup-error-valid/PopupErrorValidSum.vue'

const emits = defineEmits(['replenish'])
const minCountPay = window.MESSAGES_POPUP.SUM_SCREEN.MIN_COUNT_PAY
</script>

<template>
  <div class="popup-screen">
    <div class="popup-screen-popups">
      <Teleport to="body">
        <Transition name="slide">
          <PopupErrorValidSum
            @close="sumMessages.isValid = false"
            v-if="sumMessages.isValid"
          />
        </Transition>
      </Teleport>
    </div>
    <div class="popup-screen-sum">
      <div class="popup-screen-title">
        <h3>Введите сумму пополнения:</h3>
        <p>Min. {{ minCountPay }} ₽</p>
        <div class="popup-screen-field">
          <input type="number" v-model.number="balance" min="1" max="100" />
          <p>₽</p>
        </div>
      </div>
      <div class="popup-screen-fastCount">
        <div
          class="popup-screen-count-item"
          @click="onChangeSlotBalance(500)"
          v-ripple
        >
          500Р
        </div>
        <div
          class="popup-screen-count-item"
          @click="onChangeSlotBalance(1000)"
          v-ripple
        >
          1000Р
        </div>
        <div
          class="popup-screen-count-item"
          @click="onChangeSlotBalance(2000)"
          v-ripple
        >
          2000Р
        </div>
        <div
          class="popup-screen-count-item"
          @click="onChangeSlotBalance(3000)"
          v-ripple
        >
          3000Р
        </div>
        <div
          class="popup-screen-count-item"
          @click="onChangeSlotBalance(5000)"
          v-ripple
        >
          5000Р
        </div>
        <div
          class="popup-screen-count-item"
          @click="onChangeSlotBalance(10000)"
          v-ripple
        >
          10000Р
        </div>
      </div>
    </div>
    <div class="popup-screen-alerts">
      <div class="popup-screen-alert" @click="onConfirmSum(emits)" v-ripple>
        Пополнить
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'SumScreen';
</style>
