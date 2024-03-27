<script setup>
import BaseTooltip from '@/components/ui/tooltips/base/BaseTooltip.vue'

const props = defineProps({
  text: {
    type: String,
    default: 'Опозноательного сообщения нет',
  },
  message: {
    type: String,
    default: 'Опозноательного сообщения нет',
  },
})
</script>

<template>
  <BaseTooltip :message="message" class="tooltip__text">
    <template #content>
      <p>{{ text }}</p>
    </template>
    <template #message>
      <div class="tooltip-message">{{ message }}</div>
    </template>
  </BaseTooltip>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

p {
  text-decoration: underline;
  cursor: pointer;
  text-align: end;
}

.tooltip__text {
  font-weight: 400;
  font-size: 14px;
  color: $light-gray;
  line-height: 120%;
}
</style>
