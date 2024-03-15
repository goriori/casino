<script setup>
import { ref } from 'vue'


const showMessage = ref(false)
</script>

<template>
  <div class="tooltip">
    <div
      class="tooltip-content"
      @mouseover="showMessage = true"
      @mouseleave="showMessage = false"
    >
      <slot name="content" />
    </div>
    <Transition name="fade">
      <div class="tooltip-message" v-if="showMessage ">
        <slot name="message" />
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.tooltip {
  position: relative;

  &-message {
    position: absolute;
    right: 0;
    border-radius: 26px;
    padding: 30px 40px;
    background: #1e1e1e;
    font-size: 14px;
  }
}
</style>
