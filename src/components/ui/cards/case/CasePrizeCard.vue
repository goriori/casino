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
  width: 90%;
  height: 167px;
  border-radius: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 28px 42px;
  gap: 25px;

  @media (max-width: $md4 + px) {
    width: 90px;
    height: 90px;
    padding: 10px 11px;
    border-radius: 12px;
    gap: 8px;
  }

  &-img {
    width: 95px;
    max-height: 65px;
    @media (max-width: $md4 + px) {
      width: 36px;
      max-height: 25px;
    }
  }

  &-title {
    font-size: 16px;
    line-height: 120%;
    font-weight: 400;
    color: $white;
    @media (max-width: $md4 + px) {
      font-size: 10px;
    }
  }
}

.brown {
  border-bottom: 2px solid $brown-card;
  background: linear-gradient(180deg, $dark-gray 44.21%, $brown-card 384.43%);
}

.green {
  border-bottom: 2px solid $green-card;
  background: linear-gradient(180deg, $dark-gray 44.21%, $green-card 384.43%);
}

.orange {
  border-bottom: 2px solid $orange-card;
  background: linear-gradient(180deg, $dark-gray 44.21%, $orange-card 384.43%);
}

.light-green {
  border-bottom: 2px solid $light-green-card;
  background: linear-gradient(
    180deg,
    $dark-gray 44.21%,
    $light-green-card 384.43%
  );
}
</style>
