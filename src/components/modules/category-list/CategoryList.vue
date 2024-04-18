<script setup>
import { useProviderStore } from '@/store/providers/providerStore.js'
import { onMounted, ref } from 'vue'
import { useGameStore } from '@/store/games/gameStore.js'
import GameCard from '@/components/ui/cards/game/GameCard.vue'
import SeeMoreButton from '@/components/ui/buttons/see-more/SeeMoreButton.vue'
import PopularIcon from '@/components/ui/icons/popular/PopularIcon.vue'
import { useRouter } from 'vue-router'

const categories = window.CATEGORIES
const providerStore = useProviderStore()
const gamesStore = useGameStore()
const router = useRouter()
const categoriesGames = ref([])
const seeMoreGames = () => {
  router.push('/')
}
const onClick = () => {
  seeMoreGames()
}
const buildCategoriesGameData = () => {
  categories.forEach((category) => {
    categoriesGames.value.push({
      title: category.title,
      games: category.games
        .map((id) => {
          return gamesStore.games.find((game) => game.id === id)
        })
        .filter((item) => item),
    })
  })
}
onMounted(async () => {
  await providerStore.getProviders()
  await gamesStore.getGames()
  buildCategoriesGameData()
})
</script>

<template>
  <section class="category-list">
    <article
      class="category-item"
      v-for="category in categoriesGames"
      :key="category.id"
    >
      <section class="item">
        <h3 class="item-title">
          <PopularIcon />
          {{ category.title }}
        </h3>
        <div class="item-shortlist">
          <GameCard
            v-for="game in category?.games"
            :key="game.id"
            :game-item="game"
          />
        </div>
        <SeeMoreButton class="action" @click="onClick" />
      </section>
    </article>
  </section>
</template>

<style scoped lang="scss">
.category {
  &-list {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}

.item {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &-title {
    display: flex;
    align-items: center;
    gap: 16px;
    font-weight: 700;
    font-size: 32px;
  }

  &-shortlist {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 25px;
  }
}

.action {
  max-width: 326px;
  margin: 0 auto;
}
</style>
