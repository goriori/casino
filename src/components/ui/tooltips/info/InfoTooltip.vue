<script setup>
import BaseTooltip from '@/components/ui/tooltips/base/BaseTooltip.vue'
import InfoIcon from '@/components/ui/icons/other/InfoIcon.vue'

const props = defineProps({
  message: {
    type: Object,
    default: () => {},
  },
})
</script>

<template>
  <BaseTooltip :message="message" class="tooltip__info">
    <template #content>
      <InfoIcon />
    </template>
    <template #message>
      <component :is="message" />
    </template>
  </BaseTooltip>
</template>

<style scoped lang="scss">
@import 'InfoTooltip';
</style>
