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
      <ProviderButton v-for="provider in 10" key="provider" class="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.providers {
  &-module {
    display: flex;
    flex-direction: column;
    gap: 36px;

    @media (max-width: $md2 + px) {
      gap: 24px;
    }

    &-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 16px;
      font-size: 32px;

      @media (max-width: $md4 + px) {
        font-size: 20px;
      }
    }

    &-items {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      gap: 26px;
      background: #1d2345;
      padding: 42px 18px;
      border-radius: 26px;
      filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25));

      @media (max-width: 1600px) {
        grid-template-columns: repeat(5, 1fr);
      }
      @media (max-width: $md3 + px) {
        gap: 6px;
        padding: 12px 16px;
      }
    }
  }
}
</style>
