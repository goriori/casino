<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import CurrencyIcon from '@/components/ui/icons/balance/CurrencyIcon.vue'
import ArrowIcon from '@/components/ui/icons/other/ArrowIcon.vue'

const btnActive = ref(false)
const btnRef = ref(null)

const buttonHandler = () => {
  btnActive.value = !btnActive.value
  btnActive.value
    ? btnRef.value.classList.remove('arrow-active')
    : btnRef.value.classList.add('arrow-active')
}
</script>

<template>
  <div class="balance">
    <BaseButton
      color="balance-primary"
      @click="buttonHandler"
      :is-active="btnActive"
    >
      <div class="balance-info">
        <div class="balance-count">0.00 ₽</div>
        <div class="balance-currency">
          <CurrencyIcon />
        </div>
        <button ref="btnRef">
          <ArrowIcon />
        </button>
      </div>
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
@import 'BalanceButton';
</style>
