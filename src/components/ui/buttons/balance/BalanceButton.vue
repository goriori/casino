<script setup>
import { computed, ref } from 'vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import CurrencyIcon from '@/components/ui/icons/balance/CurrencyIcon.vue'
import ArrowIcon from '@/components/ui/icons/other/ArrowIcon.vue'

const props = defineProps({
  balance: {
    type: String,
    default: '0.00',
  },
  country: {
    type: String,
    default: 'ru',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
})
const btnActive = ref(props.isActive)
const btnRef = ref(null)
const emits = defineEmits(['isActive'])
const buttonHandler = () => {
  btnActive.value = !btnActive.value
  emits('isActive', btnActive.value)
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
        <div class="balance-count">{{ balance }} ₽</div>
        <div class="balance-currency">
          <CurrencyIcon v-if="country === 'ru'" />
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
