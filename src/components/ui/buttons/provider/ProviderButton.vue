<script setup>
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import ProviderIcon from '@/components/ui/icons/provider/ProviderIcon.vue'
</script>

<template>
  <div class="provider">
    <BaseButton
      rounded="small"
      color="provider-primary"
      size="big"
      class="provider-button"
      shadow="none"
    >
      <div class="provider-content">
        <ProviderIcon />
      </div>
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
@import 'ProviderButton';
</style>
