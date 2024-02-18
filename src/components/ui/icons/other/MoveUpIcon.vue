<script setup>
import ArrowUpIcon from '@/components/ui/icons/footer/ArrowUpIcon.vue'
</script>

<template>
  <div class="move-up">
    <ArrowUpIcon />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.move-up {
  position: fixed;
  z-index: 9;
  right: 48px;
  bottom: 50px;
  cursor: pointer;
  width: 100%;
  max-width: 86px;
  min-height: 86px;
  background: #d5a748;
  border-radius: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: $md2 + px) {
    right: 24px;
    bottom: 24px;
  }

  @media (max-width: $md4 + px) {
    max-width: 64px;
    min-height: 64px;
  }
}
</style>