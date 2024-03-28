<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'default',
  },
})
</script>

<template>
  <div
    :class="[
      'popup-base',
      {
        'popup-fullsize': size === 'full',
        'popup-default': size === 'default',
      },
    ]"
  >
    <div class="popup-content">
      <slot name="window" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'PopupBase';
</style>
