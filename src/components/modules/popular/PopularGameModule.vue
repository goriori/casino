<script setup>
import { onMounted } from 'vue'
import { useGameStore } from '@/store/games/gameStore.js'
import GameCard from '@/components/ui/cards/game/GameCard.vue'
import PopularIcon from '@/components/ui/icons/popular/PopularIcon.vue'
import ComposeSpiner from '@/components/ui/spiners/Compose/ComposeSpiner.vue'

const gameStore = useGameStore()
onMounted(async () => {
  await gameStore.getGames()
})
</script>

<template>
  <div class="popular__game-module">
    <Transition name="fade">
      <div class="popular__game-loader" v-if="gameStore.games.length === 0">
        <ComposeSpiner />
      </div>
    </Transition>
    <div class="popular__game-module-title">
      <PopularIcon />
      <h3>Популярные</h3>
    </div>
    <Transition name="fade">
      <div class="popular__game-module-items" v-if="gameStore.games.length > 0">
        <GameCard
          v-for="game in gameStore.games"
          :key="game"
          :gameItem="game"
        />
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@import 'PopularGameModule';
</style>
