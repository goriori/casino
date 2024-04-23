<script setup>
import GameCard from '@/components/ui/cards/game/GameCard.vue'
import { useGameStore } from '@/store/games/gameStore.js'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const gameStore = useGameStore()
const route = useRoute()
const { type } = route.query
onMounted(async () => {
  console.log(type)
  await gameStore.getGames()
})
</script>

<template>
  <section class="game-list">
    <GameCard
      v-for="game in gameStore.filteredGames"
      :key="game.id"
      :game-item="game"
    />
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.game {
  &-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    @media (max-width: $md2 + px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: $md3 + px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: $md4 + px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
