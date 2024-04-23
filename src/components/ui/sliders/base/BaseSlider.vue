<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { ref } from 'vue'

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
    default: () => {},
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
})
const splide = ref(null)
</script>

<template>
  <div class="slider">
    <Splide
      :options="{
        rewind: true,
        autoplay,
      }"
      ref="splide"
    >
      <SplideSlide v-for="image in images" :key="image">
        <img
          :src="image.path"
          alt=""
          :srcset="image?.srcSet"
          :class="['slider']"
        />
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped lang="scss">
@import 'BaseSlider';
</style>
