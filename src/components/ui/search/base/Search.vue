<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})
const emits = defineEmits(['update:modelValue', 'onChange'])
const onChange = (event) => {
  emits('update:modelValue', event.target.value)
  emits('onChange', event.target.value)
}
</script>

<template>
  <form class="search">
    <input
      type="search"
      placeholder="Поиск слотов"
      class="search-field"
      @change="onChange"
    />
    <div class="search-icon"></div>
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
  }
}

input[type='search']::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
}
</style>
