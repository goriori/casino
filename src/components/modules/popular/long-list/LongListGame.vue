<script setup>
import GameCard from '@/components/ui/cards/game/GameCard.vue'
import { useGameStore } from '@/store/games/gameStore.js'
import { unAuthorizedCardClick } from '@/components/modules/popular/PopularGameModule.events.js'

defineProps({
  typeGame: {
    type: String,
    default: 'popularGames',
  },
})
const gameStore = useGameStore()
</script>

<template>
  <section class="longList">
    <div class="longList-items">
      <GameCard
        v-for="game in gameStore[typeGame].fullList"
        :key="game"
        :gameItem="game"
        @unauthorized="unAuthorizedCardClick"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";
.longList {
  display: flex;
  flex-direction: column;
  gap: 25px;
  &-items {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 25px;
    @media (max-width: 1640px) {
      gap: 32px;
    }
    @media (max-width: $md2 + px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: $md3 + px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: $md4 + px) {
      gap: 16px;
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: $md5 + px) {
      gap: 8px;
    }
  }
}
</style>
