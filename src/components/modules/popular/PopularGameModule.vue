<script setup>
import { onMounted, ref } from 'vue'
import { useGameStore } from '@/store/games/gameStore.js'
import GameCard from '@/components/ui/cards/game/GameCard.vue'
import PopularIcon from '@/components/ui/icons/popular/PopularIcon.vue'
import ComposeSpiner from '@/components/ui/spiners/Compose/ComposeSpiner.vue'

const gameStore = useGameStore()
const alertMessage = ref('none')
const unAuthorizedCardClick = () => {
  alertMessage.value = 'unauthorized'
  clearAlert()
}
const clearAlert = () => {
  setTimeout(() => (alertMessage.value = 'none'), 1500)
}
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
    <Transition name="fade">
      <div class="popular__game-alert" v-if="alertMessage === 'unauthorized'">
        Пожалуйста, войдите в аккаунт
      </div>
    </Transition>
    <div class="popular__game-module-title">
      <PopularIcon />
      <h3>Популярные</h3>
    </div>
    <Transition name="fade">
      <div class="popular__game-module-items" v-if="gameStore.games.length > 0">
        <GameCard
          v-for="game in gameStore.filteredGame"
          :key="game"
          :gameItem="game"
          @unauthorized="unAuthorizedCardClick"
        />
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@import 'PopularGameModule';
</style>
