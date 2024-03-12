<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css';
import CaseCard from '@/components/ui/cards/case/CaseCard.vue'
</script>

<template>
  <section class="cases__module">
    <div class="cases__module-list">
      <Splide :options="{ rewind: false, perPage:3 }" aria-label="My Favorite Images" >
        <SplideSlide v-for="caseItem in 10" :key="caseItem" class="slide">
          <CaseCard class="cases__module-item" />
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins';

::v-deep(.splide__track){
  transition: all 0.3s ease;
  padding: 30px;
}
.slide {
  padding: 20px;
}
.cases__module {
  width: 100%;

  &-list {
  }

  &-item {
  }
}
</style>
