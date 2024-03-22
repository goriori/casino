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
@import 'BaseTooltip';
</style>
