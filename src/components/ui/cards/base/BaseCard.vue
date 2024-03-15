<script setup>
import InfoIcon from '@/components/ui/icons/other/InfoIcon.vue'

const props = defineProps({
  infoMessage: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="card">
    <div class="card-head" v-if="infoMessage !== ''">
      <InfoIcon />
    </div>
    <div class="card-content">
      <slot name="content" />
    </div>
    <div class="card-actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  background: #2c2c2c;
  padding: 36px 18px;
  border-radius: 36px;

  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
}
</style>
