<script setup>
import GameCard from '@/components/ui/cards/game/GameCard.vue'
import PopularIcon from '@/components/ui/icons/popular/PopularIcon.vue'
import { useGameStore } from '@/store/games/gameStore.js'
import { onMounted } from 'vue'
import VLoader from '@/App.vue'

const gameStore = useGameStore()
onMounted(async () => {
  await gameStore.getGames()
})
</script>

<template>
  <div class="popular__game-module">
    <div class="popular__game-module-title">
      <PopularIcon />
      <h3>Популярные</h3>
    </div>
    <div class="popular__game-module-items">
      <GameCard
        v-for="game in 34"
        :key="game"
        :gameItem="game"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

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

        @media (max-width: $md4 + px) {
          font-size: 20px;
        }
      }

      &-items {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 52px;

        @media (max-width: 1640px) {
          gap: 32px;
        }
        @media (max-width: $md2 + px) {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: $md4 + px) {
          gap: 16px;
        }
      }
    }
  }
}
</style>