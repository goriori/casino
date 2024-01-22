<script setup>
import ArrowUpIcon from '@/components/ui/icons/footer/ArrowUpIcon.vue'
</script>

<template>
  <div class="move-up">
    <ArrowUpIcon />
  </div>
</template>

<style scoped lang="scss">
.move-up {
  position: fixed;
  z-index: 10;
  right: 48px;
  bottom: 50px;
  cursor: pointer;
  width: 100%;
  max-width: 86px;
  min-height: 86px;
  background: #3e4c9d;
  border-radius: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>