<script setup>
import { usePaymentStore } from '@/store/payments/paymentStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'
import CryptoWalletQRCode from '@/components/modules/replenishment/screens/replenishment-cryptocurrency-screen/CryptoWalletQRCode.vue'

const emits = defineEmits(['success'])
const paymentStore = usePaymentStore()
const sessionStore = useSessionStore()
const hashWallet = 'TGSET4qe8Pq9jQXwxSWShFqxmGQ1eYQn2J'
paymentStore.replObject.user_id = sessionStore.session.profile?.id
paymentStore.replObject.fullname = ''
paymentStore.replObject.props = hashWallet

const confirmPayment = async (emits) => {
  await paymentStore.sendReplenishment()
  emits('success')
}
</script>

<template>
  <div class="replenishment-cryptocurrency-screen">
    <section class="content">
      <div class="replenishment-cryptocurrency-screen-title">
        <img src="/images/icons/arrow-down-circle.svg" alt="" />
        <p>Пополнение криповалютой</p>
      </div>
      <div class="replenishment-cryptocurrency-screen-qrcode">
        <CryptoWalletQRCode />
      </div>
      <div class="replenishment-cryptocurrency-screen-text">
        На этот адрес отправляйте только USDT (Tron). Cумма меньше минимальной
        НЕ будет зачислена и НЕ подлежит возврату!
      </div>
      <div class="replenishment-cryptocurrency-screen-info">
        <div class="replenishment-cryptocurrency-screen-info-items">
          <div class="replenishment-cryptocurrency-screen-info-item">
            <div class="item-info">
              <p>Ваш одноразовый адрес USDTTRC20</p>
              <h4>{{ hashWallet }}</h4>
            </div>
          </div>
          <div class="replenishment-cryptocurrency-screen-info-item">
            <div class="item-info">
              <p>Минимальная сумма пополнения:</p>
              <h4>5$</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="replenishment-cryptocurrency-screen-alerts">
        <div
          class="replenishment-cryptocurrency-screen-alert"
          @click="confirmPayment(emits)"
          v-ripple
        >
          Оплачено
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import 'ReplenishmentCryptocurrencyScreen';
</style>
