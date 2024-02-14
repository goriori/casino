<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'bankCard',
  },
})
const emits = defineEmits(['choice'])
</script>

<template>
  <div :class="['choice-pay', { active }]" @click="emits('choice', type)">
    <div class="choice-pay-icon">
      <slot name="choice-pay-icon" />
    </div>
    <div class="choice-pay-info">
      <p>{{ title }}</p>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.choice-pay {
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  border-radius: 26px;
  background: #1e1e1e;
  color: #fff;
  transition: 0.1s background-color ease-in-out;
  padding: 15px 39px;

  &.active {
    color: #000;
    background: #d5a748;
  }

  &:hover {
    color: #000;
    background: #d5a748;
  }

  &-info {
    p:nth-child(1) {
      font-size: 14px;
      font-weight: 600;
    }

    p:nth-child(2) {
      font-size: 12px;
      font-weight: 400;
    }
  }
}
</style>
