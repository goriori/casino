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
  //display: flex;
  //align-items: center;
  //align-self: stretch;
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

  &::-webkit-calendar-picker-indicator {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%23bbbbbb" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>');
  }
}

.rounded {
  border-radius: 8px;
}
</style>
