<script setup>
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import { ref } from 'vue'
import { usePaymentStore } from '@/store/payments/paymentStore.js'
import CoinsIcon from '@/components/ui/icons/other/CoinsIcon.vue'

const promocode = ref('')
const paymentStore = usePaymentStore()
const onSendPromocode = () => {
  paymentStore.sendPromocode(promocode.value)
  promocode.value = ''
}
</script>

<template>
  <div class="promocode__module">
    <h2>Промокд</h2>
    <div class="promocode__module-icon">
      <CoinsIcon />
    </div>
    <div class="personal__bonuses-promo">
      <input type="text" placeholder="Введите промокод" v-model="promocode" />
      <BaseButton color="white" id="send-promo" @click="onSendPromocode">
        <p>Применить</p>
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.promocode__module {
  display: flex;
  flex-direction: column;
  &-icon {
    position: relative;
    top: 40px;
  }
}
.personal__bonuses {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &-promo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 75px;
    padding: 90px 40px 40px 20px;
    background: #d5a748;
    border-radius: 36px;
    color: #fff;
    flex: 0 0 190px;
    max-width: 587px;
    @media (max-width: $md4 + px) {
      flex-direction: column;
      gap: 10px;
      width: 100%;
    }

    input {
      background: none;
      border-bottom: 1px solid white;
      color: #fff;
      font-size: 20px;
      padding: 0 0 16px 0;

      &::placeholder {
        color: #fff;
      }
    }
  }
}
</style>
