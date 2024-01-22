<script setup>
import ProviderButton from '@/components/ui/buttons/provider/ProviderButton.vue'
import ProviderMainIcon from '@/components/ui/icons/provider/ProviderMainIcon.vue'
</script>

<template>
  <div class="providers-module">
    <div class="providers-module-title">
      <ProviderMainIcon />
      <h3>Провайдеры</h3>
    </div>
    <div class="providers-module-items">
      <ProviderButton v-for="provider in 28" key="provider" class="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.providers {
  &-module {
    display: flex;
    flex-direction: column;
    gap: 36px;

    &-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      font-size: 32px;
    }

    &-items {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      background: #1d2345;
      padding: 36px 54px;
      border-radius: 26px;
    }
  }
}
</style>
