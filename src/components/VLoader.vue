<script setup>
import ComposeSpiner from '@/components/ui/spiners/Compose/ComposeSpiner.vue'
import { onBeforeUnmount, onMounted } from 'vue'

const onLockScrollEvent = () => {
  document.body.style.overflowY = 'hidden'
}
const onUnLockScrollEvent = () => {
  document.body.style.overflowY = 'scroll'
}
onMounted(onLockScrollEvent)
onBeforeUnmount(onUnLockScrollEvent)
</script>

<template>
  <div class="loader">
    <ComposeSpiner />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.loader {
  position: fixed;
  z-index: 100;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(30, 30, 30, 0.54);
}
</style>
