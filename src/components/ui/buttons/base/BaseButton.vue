<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'small',
  },
  color: {
    type: String,
    default: 'primary',
  },
  shadow: {
    type: String,
    default: 'primary',
  },
  rounded: {
    type: String,
    default: 'full',
  },
  outline: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div>
    <button
      v-ripple
      :class="[
        'btn',
        {
          'btn-small': props.size === 'small',
          'btn-medium': props.size === 'medium',
          'btn-big': props.size === 'big',
        },
        {
          'btn-primary': props.color === 'primary',
          'btn-secondary': props.color === 'secondary',
          'btn-white': props.color === 'white',
          'btn-balance-primary': props.color === 'balance-primary',
          'btn-cashier-primary': props.color === 'cashier-primary',
          'btn-withdrawal-primary': props.color === 'withdrawal-primary',
          'btn-provider-primary': props.color === 'provider-primary',
        },
        {
          'btn-shadow-primary': props.shadow === 'primary',
        },
        {
          'btn-rounded-small': props.rounded === 'small',
          'btn-rounded-full': props.rounded === 'full',
        },
        {
          'btn-outlined': props.outline,
        },
        {
          'btn-active': props.isActive,
        },
      ]"
      :disabled="disabled"
    >
      <div class="btn-content">
        <slot />
      </div>
    </button>
  </div>
</template>
<style lang="scss">
@import 'BaseButton';
</style>
