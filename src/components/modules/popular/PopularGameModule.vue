<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/store/games/gameStore.js'
import {
  isLoadContent,
  isShowAll,
} from '@/components/modules/popular/PopularGameModule.options.js'
import { loadModule } from '@/components/modules/popular/PopularGameModule.events.js'
import PopularIcon from '@/components/ui/icons/popular/PopularIcon.vue'
import ContentLoader from '@/components/ui/content-loader/ContentLoader.vue'
import PopularGameFilters from '@/components/modules/popular/filters/PopularGameFilters.vue'
import ShortListGame from '@/components/modules/popular/short-list/ShortListGame.vue'

const router = useRouter()
const gameStore = useGameStore()
onMounted(async () => {
  await loadModule()
})
</script>

<template>
  <div class="popular__game-module">
    <PopularGameFilters />
    <div class="popular__game-module-item">
      <div class="popular__game-module-title">
        <div class="title">
          <PopularIcon />
          <h3>Топ слоты</h3>
        </div>
      </div>
      <div class="popular__game-module-items" v-if="!isLoadContent">
        <ContentLoader type="game-card" v-for="item in 5" :key="item">
          <rect width="400" height="500" />
        </ContentLoader>
      </div>
      <Transition name="fade">
        <div v-if="isLoadContent" class="popular__game-module-item">
          <div
            :class="{ all: isShowAll }"
            v-if="gameStore.filteredGame.shortList.length > 0"
          >
            <ShortListGame type-game="filteredGame" />
          </div>
          <div v-else>Ничего не найдено</div>
        </div>
      </Transition>
    </div>
    <div class="popular__game-module-item">
      <div class="popular__game-module-title">
        <div class="title">
          <PopularIcon />
          <h3>Популярные</h3>
        </div>
      </div>
      <div class="popular__game-module-items" v-if="!isLoadContent">
        <ContentLoader type="game-card" v-for="item in 5" :key="item">
          <rect width="400" height="500" />
        </ContentLoader>
      </div>
      <Transition name="fade">
        <div v-if="isLoadContent" class="popular__game-module-item">
          <div
            :class="{ all: isShowAll }"
            v-if="gameStore.popularGames.shortList.length > 0"
          >
            <ShortListGame type-game="popularGames" />
          </div>
          <div v-else>Ничего не найдено</div>
        </div>
      </Transition>
    </div>
    <div class="popular__game-module-item">
      <div class="popular__game-module-title">
        <div class="title">
          <PopularIcon />
          <h3>Ретро слоты</h3>
        </div>
      </div>
      <div class="popular__game-module-items" v-if="!isLoadContent">
        <ContentLoader type="game-card" v-for="item in 5" :key="item">
          <rect width="400" height="500" />
        </ContentLoader>
      </div>
      <Transition name="fade">
        <div v-if="isLoadContent" class="popular__game-module-item">
          <div
            :class="{ all: isShowAll }"
            v-if="gameStore.retroGames.shortList.length > 0"
          >
            <ShortListGame type-game="retroGames" />
          </div>
          <div v-else>Ничего не найдено</div>
        </div>
      </Transition>
    </div>
    <div class="popular__game-module-item">
      <div class="popular__game-module-title">
        <div class="title">
          <PopularIcon />
          <h3>Новинки</h3>
        </div>
      </div>
      <div class="popular__game-module-items" v-if="!isLoadContent">
        <ContentLoader type="game-card" v-for="item in 5" :key="item">
          <rect width="400" height="500" />
        </ContentLoader>
      </div>
      <Transition name="fade">
        <div v-if="isLoadContent" class="popular__game-module-item">
          <div
            :class="{ all: isShowAll }"
            v-if="gameStore.newGames.shortList.length > 0"
          >
            <ShortListGame type-game="newGames" />
          </div>
          <div v-else>Ничего не найдено</div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'PopularGameModule';
</style>
