<script setup>
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import WalletIcon from '@/components/ui/icons/cashier/WalletIcon.vue'
</script>

<template>
  <div class="cashier">
    <BaseButton color="cashier-primary">
      <div class="cashier-content">
        <WalletIcon />
        <p>To Cashier</p>
      </div>
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
@import 'CashierButton';
</style>
