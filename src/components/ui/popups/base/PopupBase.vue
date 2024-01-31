<script setup></script>

<template>
  <div class="popup-base">
    <div class="popup-content">
      <slot name="window" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'PopupBase';
</style>
