<script setup>
import { useProviderStore } from '@/store/providers/providerStore.js'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useGameStore } from '@/store/games/gameStore.js'
import GameCard from '@/components/ui/cards/game/GameCard.vue'
import SeeMoreButton from '@/components/ui/buttons/see-more/SeeMoreButton.vue'
import PopularIcon from '@/components/ui/icons/popular/PopularIcon.vue'
import SeeMoreCard from '@/components/ui/cards/see-more/SeeMoreCard.vue'

const categoriesId = [27, 28, 29]
const providerStore = useProviderStore()
const gamesStore = useGameStore()
const router = useRouter()
const categoriesGames = ref()
const seeMoreGames = (type) => {
  router.push(`/?type=${type}`)
}
const onClick = (type) => {
  seeMoreGames(type)
}

const getCategories = () => {
  return categoriesId.map((categoryId) =>
    providerStore.providers.find((provider) =>
      provider.id === categoryId ? provider : false
    )
  )
}
const getGamesCategory = (categoryId) => {
  return gamesStore.deviceGames
    .map((game) => {
      const { categories } = game
      const findCategory = categories.filter((categoryGame) => {
        if (categoryGame.category_id === categoryId) return categoryGame
      })
      if (findCategory.length > 0) return game
    })
    .filter((game) => game)
}
const buildCategoryList = () => {
  const categories = getCategories()
  categoriesGames.value = categories.map((category) => ({
    ...category,
    games: getGamesCategory(category.id),
  }))
}
onMounted(async () => {
  await providerStore.getProviders()
  await gamesStore.getGames()
  buildCategoryList()
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
            class="item-card"
          />
          <SeeMoreCard class="action-card" @click="onClick(category.type)" />
        </div>
        <SeeMoreButton class="action-button" @click="onClick(category.type)" />
      </section>
    </article>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

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
    @media (max-width: $md4 + px) {
      font-size: 20px;
    }
  }

  &-shortlist {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 25px;
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

.action {
  &-button {
    max-width: 326px;
    margin: 0 auto;
    @media (max-width: $md4 + px) {
      display: none;
    }
  }

  &-card {
    display: none;
    height: 120px;
    @media (max-width: $md4 + px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
