<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import WithdrawalModule from '@/components/modules/account/modules/withdrawal/WithdrawalModule.vue'
</script>

<template>
  <PopupBase>
    <template #window>
      <WithdrawalModule isPopup />
    </template>
  </PopupBase>
</template>

<style scoped lang="scss"></style>
