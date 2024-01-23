<script setup>
import WalletIcon from '@/components/ui/icons/other/WalletIcon.vue'
import USDTIcon from '@/components/ui/icons/other/USDTIcon.vue'

const emits = defineEmits(['bank-card'])
</script>

<template>
  <div class="popup-withdrawal-conclusion">
    <div class="deposit">
      <div class="deposit-card">
        <p>Вывод на банковскую карту:</p>
        <div class="deposit-card-pay" @click="emits('bank-card')" v-ripple>
          <WalletIcon />
          <div class="deposit-card-pay-content">
            <h4>Оплата банковской картой</h4>
            <p>Сбербанк, Тинькофф, Райффайзен, СБП</p>
          </div>
        </div>
      </div>
      <div class="deposit-card-help">
        <p>Вывод с помощью криптовалюты:</p>
        <div class="deposit-card-help-items">
          <div
            class="deposit-card-help-item"
            v-for="crypto in 10"
            @click="emits('bank-card')"
            v-ripple
          >
            <USDTIcon />
            <div class="crypto-info">
              <h4>USDT (TRC20)</h4>
              <p>Tron</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'ConclusionScreen';
</style>