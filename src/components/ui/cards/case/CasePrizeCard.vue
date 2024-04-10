<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
const imgUrl = computed(() => {
  return {
    roulette: '/images/cases/prizes/roulette.png',
    balance: '/images/cases/prizes/money.png',
    coin: '/images/cases/prizes/exp.png',
  }[props.type]
})
const color = computed(() => {
  return {
    roulette: 'brown',
    balance: 'green',
    coin: 'orange',
  }[props.type]
})
</script>

<template>
  <article :class="['cardPrize', `${color}`]">
    <img :src="imgUrl" alt="imgPrize" class="cardPrize-img" />
    <h1 class="cardPrize-title">{{ title }}</h1>
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.cardPrize {
  max-width: 167px;
  height: 167px;
  border-radius: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &-img {
  }

  &-title {
    font-size: 16px;
    font-weight: 400;
    color: $white;
  }
}

.brown {
  padding: 28px 42px;
  border-bottom: 2px solid $brown-card;
  background: linear-gradient(180deg, $dark-gray 44.21%, $brown-card 384.43%);
}

.green {
  padding: 29px 25px;
  border-bottom: 2px solid $green-card;
  background: linear-gradient(180deg, $dark-gray 44.21%, $green-card 384.43%);
}

.orange {
  padding: 28px 9px 30px;
  border-bottom: 2px solid $orange-card;
  background: linear-gradient(180deg, $dark-gray 44.21%, $orange-card 384.43%);
}

.light-green {
  padding: 28px 18px 14px;
  border-bottom: 2px solid $light-green-card;
  background: linear-gradient(
    180deg,
    $dark-gray 44.21%,
    $light-green-card 384.43%
  );
}
</style>
