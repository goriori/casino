<script setup>
import { onMounted, ref, defineModel } from 'vue'
import ArrowSelectIcon from '@/components/ui/icons/other/ArrowSelectIcon.vue'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'
import { is } from 'date-fns/locale'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  titles: {
    type: Array,
    default: () => [],
  },
  icon: {
    type: Object,
    default: () => {},
  },
})
const emits = defineEmits(['update:modelValue'])
const isOpen = ref(false)
const list = ref([
  {
    id: 0,
    title: 'Не выбрано',
    isSelect: false,
    onSelect: function () {
      this.isSelect = true
    },
  },
])
const openSelect = () => (isOpen.value = !isOpen.value)
const onSelect = (item) => {
  const { id } = item
  list.value.find((listItem) => listItem.id === id).onSelect()
  isOpen.value = false
}
const buildSelectData = () => {
  list.value.push(
    ...props.titles.map((title, index) => {
      return {
        id: index + 1,
        title,
        isSelect: false,
        onSelect: function () {
          this.isSelect = true
          emits('update:modelValue', this.title)
        },
      }
    })
  )
  emits('update:modelValue', list.value[0].title)
}


onMounted(() => {
  buildSelectData()
})
</script>

<template>
  <div class="select">
    <div class="select-title" @click="openSelect">
      <component v-if="icon" :is="icon" />
      <p>{{ modelValue }}</p>
      <ArrowSelectIcon />
    </div>
    <Transition name="bounce">
      <div class="select-list" v-if="isOpen">
        <p
          class="select-list-item"
          v-for="item in list"
          :key="item"
          @click="onSelect(item)"
        >
          {{ item.title }}
        </p>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.select {
  position: relative;
  width: 100%;

  &-title {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #303030;
    padding: 20px 28px;
    border-radius: 5px;
  }

  &-list {
    width: 100%;
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #303030;
    padding: 20px 28px;
  }

  &-list-item {
    cursor: pointer;
    width: 100%;

    &:hover {
      transition: 0.2s opacity ease-in-out;
      opacity: 0.7;
    }

    &:active {
      transition: 0.2s opacity ease-in-out;
      opacity: 0.5;
    }
  }
}
</style>
