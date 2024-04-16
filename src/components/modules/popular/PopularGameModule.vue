<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/store/games/gameStore.js'
import { isLoadContent } from '@/components/modules/popular/PopularGameModule.options.js'
import { loadModule } from '@/components/modules/popular/PopularGameModule.events.js'
import PopularGameFilters from '@/components/modules/popular/filters/PopularGameFilters.vue'
import ListGames from '@/components/modules/popular/list/ListGames.vue'
import FilterListGame from '@/components/modules/popular/filter-list/FilterListGame.vue'

const router = useRouter()
const gameStore = useGameStore()
const listCategory = ref([
  {
    id: 1,
    title: 'Топ слоты',
    typeGame: 'filteredGame',
  },
  {
    id: 2,
    title: 'Популярные',
    typeGame: 'popularGames',
  },
  {
    id: 3,
    title: 'Ретро слоты',
    typeGame: 'retroGames',
  },
  {
    id: 4,
    title: 'Новинки',
    typeGame: 'newGames',
  },
])
const isFiltered = ref(false)
const onFilter = () => {
  isFiltered.value = true
}
const onClear = () => {
  isFiltered.value = false
}
onMounted(async () => {
  await loadModule()
})
</script>

<template>
  <div class="popular__game-module">
    <PopularGameFilters @onFilter="onFilter" @onClear="onClear" />
    <Transition name="fade">
      <div v-if="!isFiltered" class="popular__game-module-items">
        <div
          v-for="category in listCategory"
          :key="category.id"
        >
          <Transition name="fade">
            <div v-if="isLoadContent" class="popular__game-module-item">
              <ListGames
                :title="category.title"
                :type-game="category.typeGame"
              />
            </div>
          </Transition>
        </div>
      </div>
    </Transition>

    <Transition name="fade">
      <div v-if="isFiltered" class="popular__game-module-filter-list">
        <FilterListGame  />
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@import 'PopularGameModule';
</style>
