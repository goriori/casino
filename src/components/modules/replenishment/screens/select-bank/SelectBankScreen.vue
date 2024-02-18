<script setup>
import { usePaymentStore } from '@/store/payments/paymentStore.js'
import {
 useMethods
} from '@/components/modules/replenishment/screens/select-bank/SelectBankScreen.events.js'

const props = defineProps({
  sum: {
    type: [String, Number],
    default: 0,
  },
})
const emits = defineEmits(['select-bank'])
const paymentStore = usePaymentStore()
const { onSelectBank } = useMethods()
</script>

<template>
  <div class="select__bank-screen">
    <div class="select__bank-screen-sum">
      <p>Сумма пополнения</p>
      <p>{{ sum }} Р</p>
    </div>
    <div class="select__bank-screen-select">
      <p>Выберите ваш банк для перевода</p>
      <div class="select__bank-screen-items">
        <div
          class="select__bank-screen-item"
          v-for="bank in paymentStore.requisites"
          @click="onSelectBank(bank, emits)"
          v-ripple
        >
          <img :src="'https://api.gamesoffutures.ru' + bank.icon" alt="">
          <h4>{{ bank.title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'SelectBankScreen';
</style>