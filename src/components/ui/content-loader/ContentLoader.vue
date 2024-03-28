<script setup>
import { ContentLoader } from 'vue-content-loader'
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'none',
  },
  color: {
    type: String,
    default: 'primary',
  },
  animationColor: {
    type: String,
    default: 'primary',
  },
})
const primaryColor = computed(() => {
  const colors = {
    primary: '#1d2345',
  }
  return colors[props.color]
})
const secondaryColor = computed(() => {
  const colors = {
    primary: '#1d2855',
  }
  return colors[props.color]
})

const viewBox = computed(() => {
  const boxes = {
    none: '0 0 200 15',
    'game-card': '0 0 400 560',
  }
  return boxes[props.type]
})
</script>

<template>
  <ContentLoader
    :viewBox="viewBox"
    :speed="1"
    :primaryColor="primaryColor"
    :secondaryColor="secondaryColor"
    class="content__loader"
  >
    <slot />
  </ContentLoader>
</template>

<style scoped lang="scss">
.content__loader {
}
</style>
