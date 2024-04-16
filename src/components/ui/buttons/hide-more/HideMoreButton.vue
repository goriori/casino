<script setup>
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import SeeMoreIcon from '@/components/ui/icons/other/SeeMoreIcon.vue'
</script>

<template>
  <BaseButton id="see-more-button">
    <p class="button-title">Скрыть</p>
    <SeeMoreIcon class="button-icon" />
  </BaseButton>
</template>

<style scoped lang="scss">
::v-deep(.btn-content) {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.button-icon {
  max-width: 24px;
  max-height: 15px;
}
</style>
