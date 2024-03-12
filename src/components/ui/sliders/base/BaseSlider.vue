<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
const props = defineProps({
  images: {
    type: Array,
    default: [],
  },
  pagination: {
    type: Boolean,
    default: false,
  },
  navigation: {
    type: Boolean,
    default: false,
  },
  breakpoints: {
    type: Object,
    default: {},
  },
})
</script>

<template>
  <div class="slider">
    <Splide>
      <SplideSlide v-for="image in images" :key="image">
        <img :src="image.path" alt="" :class="['slider']" />
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped lang="scss">

img {
  border-radius: 8px;
  width: 100%;
  object-fit: cover;
}
</style>
