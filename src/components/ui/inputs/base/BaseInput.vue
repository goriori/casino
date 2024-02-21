<script setup>
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: 'Логин',
  },

  rounded: {
    type: Boolean,
    required: false,
  },
})
const onInput = (e) => {
  emits('update:modelValue', e.target.value)
}
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    @input="onInput"
    class="v-input"
    :value="modelValue"
    :class="{ rounded }"
  />
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.v-input {
  width: 100%;
  display: flex;
  align-items: center;
  align-self: stretch;
  padding: 15px;
  border-bottom: 1px solid #ffffff;
  background: none;
  color: #d5a748;
  font-size: 20px;
  font-weight: 400;
  line-height: 155%;

  &::placeholder {
    color: #d5a748;
  }
}

.rounded {
  border-radius: 8px;
}
</style>
