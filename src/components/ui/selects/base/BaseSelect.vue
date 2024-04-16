<script setup>
import { ref } from 'vue'
import ArrowSelectIcon from '@/components/ui/icons/other/ArrowSelectIcon.vue'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  icon: {
    type: Object,
    default: () => {},
  },
  items: {
    type: Array,
    default: [],
  },
  active: {
    type: Boolean,
    default: false,
  },
  handler: {
    type: Function,
    required: false,
  },
  defaultTargetElement: {
    type: String,
    default: 'Не выбрано',
  },
})
const targetElement = ref(props.defaultTargetElement)
const emits = defineEmits(['changeActive', 'clear'])
const onSelect = (e) => {
  console.log(e)
  emits('changeActive', props.name)
}
const onChange = (category) => {
  if (category !== -1 && props.handler) {
    props.handler(category.position, category.title)
    targetElement.value = category.title
  }
}
const onClear = () => {
  targetElement.value = 'Не выбрано'
  emits('clear')
}
</script>

<template>
  <div class="select" @click="onSelect">
    <div class="select-title">
      <div class="select-title-container">
        <component v-if="icon" :is="icon" />
        <p>{{ targetElement }}</p>
      </div>
      <ArrowSelectIcon
        v-if="targetElement === 'Не выбрано'"
      />
      <CloseIcon
        v-if="targetElement !== 'Не выбрано'"
        @click="onClear"
      />
    </div>
    <Transition name="bounce">
      <div class="select-list" v-if="active">
        <p
          class="select-list-item"
          v-for="item in items"
          :key="item"
          @click="onChange(item)"
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
  cursor: pointer;
  width: 100%;
  height: 100%;
  background: #303030;
  padding: 20px 28px;
  border-radius: 4px;

  &-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;

    &-container {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }

  &-list {
    position: absolute;
    z-index: 100;
    width: 100%;
    border-radius: 8px;
    left: 0;
    max-height: 372px;
    overflow: auto;
    background: #303030;
    margin: 30px 0 0 0;
    padding: 10px;
  }

  &-list-item {
    padding: 28px 36px;
    border-bottom: 1px solid #fff;
    width: 100%;
    transition: 0.15s all ease-in-out;

    &:hover {
      background: #d5a748;
    }
  }
}
</style>
