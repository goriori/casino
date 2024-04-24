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
  modelValue: {
    type: Boolean,
    default: false,
  },
})
const btnRef = ref(null)
const emits = defineEmits(['update:modelValue'])
const onClick = () => emits('update:modelValue', !props.modelValue)
</script>

<template>
  <div class="balance">
    <BaseButton
      color="balance-primary"
      rounded="full"
      size="small"
      @click="onClick"
      :is-active="modelValue"
    >
      <div class="balance-info">
        <div class="balance-count">{{ Math.floor(balance) }} ₽</div>
        <div class="balance-currency">
          <CurrencyIcon v-if="country === 'ru'" />
        </div>
        <button :class="{ 'arrow-active': modelValue }">
          <ArrowIcon />
        </button>
      </div>
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
@import 'BalanceButton';
</style>
