<script setup>
import { useData } from '@/components/modules/replenishment/ReplenishmentModule.options.js'
import { useMethods } from '@/components/modules/replenishment/ReplenishmentModule.events.js'

const emits = defineEmits(['replenish'])
const minCountPay = window.MESSAGES_POPUP.SUM_SCREEN.MIN_COUNT_PAY
const { balance, isValid } = useData()
const { onChangeSlotBalance, onConfirmSum } = useMethods(balance)
</script>

<template>
  <div class="popup-screen">
    <div class="popup-screen-sum">
      <div class="popup-screen-title">
        <h3>Введите сумму пополнения:</h3>
        <p v-if="isValid">Min. {{ minCountPay }} ₽</p>
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
