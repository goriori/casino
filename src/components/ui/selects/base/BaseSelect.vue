<script setup>
import { ref } from 'vue'
import ArrowSelectIcon from '@/components/ui/icons/other/ArrowSelectIcon.vue'

const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
  active: {
    type: Boolean,
    default: false,
  },
})
const activeSelect = ref(props.active)
const targetElement = ref(props.items[0].title || 'None')
const onSelect = () => {
  activeSelect.value = !activeSelect.value
}
const onChange = (e) => {
  targetElement.value = e.target.innerText
}
</script>

<template>
  <div class="select" @click="onSelect">
    <div class="select-title">
      <p>{{ targetElement }}</p>
      <ArrowSelectIcon />
    </div>
    <Transition name="bounce">
      <div class="select-list" v-if="activeSelect">
        <p
          class="select-list-item"
          v-for="item in items"
          :key="item"
          @click="onChange"
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
  min-width: 424px;
  position: relative;
  cursor: pointer;
  height: 100%;
  background: #303030;
  padding: 20px 28px;
  border-radius: 4px;

  @media (max-width: $md1 + px) {
    min-width: 343px;
  }
  @media (max-width: $md2 + px) {
    min-width: 243px;
  }

  &-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }

  &-list {
    position: absolute;
    z-index: 100;
    width: 560px;
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
