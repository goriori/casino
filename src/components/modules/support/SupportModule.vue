<script setup>
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
</script>

<template>
  <div class="support-module">
    <BaseButton rounded="full" color="secondary">
      <div class="support-content">
        <img src="/images/icons/email.svg" alt="" />
        <div class="support-text">
          <p class="support-text-title">Поддержка</p>
          <p>support@casino.games</p>
        </div>
      </div>
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.support {
  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  &-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    gap: 12px;
    font-size: 20px;
    font-weight: 600;
    color: $white;

    &-title {
      color: #bbb;
    }
  }
}
</style>
