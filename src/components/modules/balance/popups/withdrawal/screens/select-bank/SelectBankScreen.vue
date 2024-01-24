<script setup>
import USDTIcon from '@/components/ui/icons/other/USDTIcon.vue'

const props = defineProps({
  sum: {
    type: [String, Number],
    default: 0,
  },
})
const emits = defineEmits(['select-bank'])
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
          v-for="bank in 10"
          @click="emits('select-bank')"
          v-ripple
        >
          <USDTIcon />
          <h4>Сбербанк</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'SelectBankScreen';
</style>