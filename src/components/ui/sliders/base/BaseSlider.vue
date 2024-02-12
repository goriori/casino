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
})
</script>

<template>
  <swiper-container
    :slides-per-view="1"
    :centered-slides="true"
    :pagination="pagination"
    :navigation="navigation"
  >
    <swiper-slide v-for="image in images" :key="image">
      <img :src="image.path" alt="" :class="['slider']" />
    </swiper-slide>
  </swiper-container>
</template>

<style scoped lang="scss">
img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
