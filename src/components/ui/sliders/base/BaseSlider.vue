<script setup>
import { register } from 'swiper/element/bundle'

register()
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
    <swiper-container
      :slides-per-view="1"
      :centered-slides="true"
      :pagination="pagination"
      :navigation="navigation"
      :breakpoints="{ ...breakpoints }"
    >
      <swiper-slide v-for="image in images" :key="image">
        <img :src="image.path" alt="" :class="['slider']" />
      </swiper-slide>
    </swiper-container>
  </div>

</template>

<style scoped lang="scss">
img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


</style>
