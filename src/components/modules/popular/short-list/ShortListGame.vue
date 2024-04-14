<script setup>
import { unAuthorizedCardClick } from '@/components/modules/popular/PopularGameModule.events.js'
import SeeMoreCard from '@/components/ui/cards/see-more/SeeMoreCard.vue'
import GameCard from '@/components/ui/cards/game/GameCard.vue'
import { useGameStore } from '@/store/games/gameStore.js'
import SeeMoreButton from '@/components/ui/buttons/see-more/SeeMoreButton.vue'

defineProps({
  typeGame: {
    type: String,
    default: 'filteredGame',
  },
})

const gameStore = useGameStore()
</script>

<template>
  <section class="shortlist">
    <div class="shortlist-items">
      <GameCard
        v-for="game in gameStore[typeGame].shortList"
        :key="game"
        :gameItem="game"
        @unauthorized="unAuthorizedCardClick"
      />
      <SeeMoreCard class="see_more" />
    </div>
    <SeeMoreButton
      v-if="gameStore[typeGame].shortList.length > 0"
      class="item-button"
    />
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.shortlist {
  display: flex;
  flex-direction: column;
  gap: 25px;
  &-items {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 25px;
    max-height: 1100px;
    overflow: hidden;
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

.see_more {
  display: none;
  @media (max-width: $md4 + px) {
    display: flex;
  }
}

.item {
  &-button {
    width: 100%;
    margin: 0 auto;
    max-width: 326px;
  }
}
</style>
