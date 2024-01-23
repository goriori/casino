<script setup>
import ProviderMainIcon from '@/components/ui/icons/provider/ProviderMainIcon.vue'
import GameCard from '@/components/ui/cards/game/GameCard.vue'
import PopularIcon from '@/components/ui/icons/popular/PopularIcon.vue'
</script>

<template>
  <div class="popular__game-module">
    <div class="popular__game-module-title">
      <PopularIcon />
      <h3>Популярные</h3>
    </div>
    <div class="popular__game-module-items">
      <GameCard v-for="game in 28" key="game" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.popular {
  &__game {
    &-module {
      display: flex;
      flex-direction: column;
      gap: 36px;

      &-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 16px;
        font-size: 32px;
      }

      &-items {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        //max-height: 605px;
        //overflow-y: scroll;
        gap: 52px;
      }
    }
  }
}
</style>
