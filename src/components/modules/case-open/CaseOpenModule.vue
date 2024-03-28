<script setup>
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import CasePrizeCard from '@/components/ui/cards/case/CasePrizeCard.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const props = defineProps({
  price: {
    required: true,
    default: '7000₽',
  },
})

const splideOption = {
  type: 'loop',
  rewind: false,
  perPage: 10,
  wheel: true,
  breakpoints: {
    1240: {
      perPage: 2,
    },
    600: {
      perPage: 1,
    },
  },
}

const prizes = [
  {
    id: 1,
    color: 'green',
    title: '7 000₽',
    img: 'money.svg',
  },
  {
    id: 2,
    color: 'orange',
    title: '1 Колесо фортуны',
    img: 'roulette.png',
  },
  {
    id: 2,
    color: 'orange',
    title: '1 Колесо фортуны',
    img: 'roulette.png',
  },
  {
    id: 2,
    color: 'orange',
    title: '1 Колесо фортуны',
    img: 'roulette.png',
  },
  {
    id: 3,
    color: 'brown',
    title: 'Опыт 300',
    img: 'experience.svg',
  },
  {
    id: 3,
    color: 'brown',
    title: 'Опыт 300',
    img: 'experience.svg',
  },
  {
    id: 4,
    color: 'light-green',
    title: 'Множитель х2 на час',
    img: 'exp.png',
  },
  {
    id: 4,
    color: 'light-green',
    title: 'Множитель х2 на час',
    img: 'exp.png',
  },
]
</script>

<template>
  <div class="case">
    <div class="case-head">Ультра кейс</div>
    <div class="case-fortune">
      <img class="case-winner" src="/images/cases/prizes/winner.svg" />
      <div class="case-card">
        <Splide :options="splideOption">
          <SplideSlide v-for="prize in prizes" :key="prize.id" class="slide">
            <CasePrizeCard
              :color="prize.color"
              :url="prize.img"
              :title="prize.title"
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
    <div class="case-action">
      <div class="case-price">{{ price }}</div>
      <BaseButton size="small" class="case-btn">Крутить</BaseButton>
    </div>
    <div class="case-about">
      <div class="case-about-title">Содержание кейса</div>
      <div class="case-about-body">
        <CasePrizeCard
          v-for="prize in prizes"
          :key="prize.id"
          :color="prize.color"
          :url="prize.img"
          :title="prize.title"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'CaseOpenModule';
</style>
