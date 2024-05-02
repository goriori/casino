<script setup>
import WalletIcon from '@/components/ui/icons/other/WalletIcon.vue'
import USDTIcon from '@/components/ui/icons/other/USDTIcon.vue'
import { usePaymentStore } from '@/store/payments/paymentStore.js'
import { cryptocurrencyList } from '@/components/modules/replenishment/screens/replenishment-screen/ReplenishmentScreen.options.js'
import { useStateStore } from '@/store/stateStore.js'
import { ERRORS } from '@/configs/errors.js'

const emits = defineEmits(['method'])
const paymentStore = usePaymentStore()
const stateStore = useStateStore()
const onChoiceMethodPayment = (method, crypto) => {
  if (method === 'crypto') {
    stateStore.globalPopupMessages.error.show(
      ERRORS.ERROR_NO_TEMPORARILY_ACCESS_MODULE.MESSAGE
    )
    // paymentStore.replObject.name = crypto.name
    //   paymentStore.replObject.platform = crypto.platform
  } else if (method === 'bank') {
    paymentStore.replObject.type = method
    emits('method', method)
  }
}
</script>

<template>
  <div class="popup-withdrawal-replenishment">
    <div class="deposit">
      <div class="deposit-card">
        <h3>Не отыгранный бонусный баланс обнуляется</h3>
        <p>Депозит с банковской карты:</p>
        <div class="deposit-card-pay" v-ripple>
          <WalletIcon />
          <div
            class="deposit-card-pay-content"
            @click="onChoiceMethodPayment('bank')"
          >
            <h4>Оплата банковской картой</h4>
            <p>Сбербанк, Тинькофф, Райффайзен, СБП</p>
          </div>
        </div>
      </div>
      <div class="deposit-card-help">
        <p>Внести депозит с помощью криптовалюты:</p>
        <div class="deposit-card-help-items">
          <div
            class="deposit-card-help-item"
            v-for="crypto in cryptocurrencyList"
            :key="crypto.id"
            @click="onChoiceMethodPayment('crypto', crypto)"
            v-ripple
          >
            <USDTIcon />
            <div class="crypto-info">
              <h4>{{ crypto.name }}</h4>
              <p>{{ crypto.platform }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'ReplenishmentScreen';
</style>
