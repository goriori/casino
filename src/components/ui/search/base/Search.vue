<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})
const emits = defineEmits(['update:modelValue', 'onInput', 'onSend'])
const activeSearch = computed(() => props.modelValue.length > 0)
const onInput = (event) => {
  emits('update:modelValue', event.target.value)
  emits('onInput', event.target.value)
}
const onSend = () => {
  emits('onSend')
}
</script>

<template>
  <form class="search" @submit.prevent>
    <input
      :value="modelValue"
      type="search"
      placeholder="Поиск слотов"
      class="search-field"
      @input="onInput"
      @keypress.enter="onSend"
    />
    <div
      :class="['search-icon', { 'active-search': activeSearch }]"
      @click="onSend"
    ></div>
  </form>
</template>

<style scoped lang="scss">
.search {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  &-field {
    width: 100%;
    font-weight: 400;
    font-size: 20px;
    background: none;
    border-bottom: 1px solid #ffffff99;
    padding: 10px;
    color: #ffffff99;

    &:focus {
      transition: 0.2s border-bottom-color ease-in-out;
      border-bottom-color: #d5a848;
    }
  }

  &-icon {
    cursor: pointer;
    position: absolute;
    right: 0;
    background-image: url('/images/icons/search.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    transition: 0.3s all ease-in-out;

    &:hover {
      transition: 0.3s all ease-in-out;
      transform: scale(1.2);
    }
  }
}

input[type='search']::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
}

.active-search {
  transform: scale(1.5);
}
</style>
