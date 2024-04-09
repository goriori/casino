<script setup>
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import { useRoute, useRouter } from 'vue-router'
import GameCard from '@/components/ui/cards/game/GameCard.vue'
import { useStateStore } from '@/store/stateStore.js'
import { useGameStore } from '@/store/games/gameStore.js'
import { onBeforeMount, onMounted } from 'vue'

const stateStore = useStateStore()
const gameStore = useGameStore()
const router = useRouter()
const route = useRoute()
const { title, entity } = route.query
const unAuthorizedCardClick = () => {
  stateStore.globalPopupsModules.authorization.visibility = true
}
const onValidQueries = () => {
  if (!title || !entity) return router.push('/')
}
const validOnGamesEmpty = () => {
  return gameStore[entity].fullList.length > 0
}
onBeforeMount(async () => {
  window.scroll(0, 0)
  await onValidQueries()
  if (!validOnGamesEmpty()) {
    Promise.resolve()
      .then(() => (stateStore.isLoading = true))
      .then(() => gameStore.getGames())
      .finally(() => (stateStore.isLoading = false))
  }
})
</script>

<template>
  <div class="page">
    <Header />
    <div class="page-container container">
      <h2 class="page-title">
        {{ title }}
      </h2>
      <div class="page-game-list">
        <GameCard
          v-for="game in gameStore[entity]?.fullList"
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
  display: flex;
  flex-direction: column;
  gap: 50px;

  &-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &-game-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: start;
    align-items: center;
    gap: 20px;
    @media (max-width: $md4 + px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: $md5 + px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
