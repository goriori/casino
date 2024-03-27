<script setup>
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import { useRoute, useRouter } from 'vue-router'
import GameCard from '@/components/ui/cards/game/GameCard.vue'
import { useStateStore } from '@/store/stateStore.js'
import { useGameStore } from '@/store/games/gameStore.js'

const stateStore = useStateStore()
const gameStore = useGameStore()
const router = useRouter()
const route = useRoute()
const {title , entity } = route.query
const unAuthorizedCardClick = () => {
  stateStore.globalPopupsModules.authorization.visibility = true
}
</script>

<template>
  <div class="page">
    <Header />
    <div class="page-container container">
      <h2 class="page-title">
        {{title }}
      </h2>
      <div class="page-game-list">
        <GameCard
          v-for="game in gameStore[entity].longList"
          :key="game"
          :gameItem="game"
          @unauthorized="unAuthorizedCardClick"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.page {
  color: $white;

  &-game-list {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-content: start;
    align-items: center;
    gap: 20px;
  }
}
</style>
