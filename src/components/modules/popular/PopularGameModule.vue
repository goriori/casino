<script setup>
import { onMounted } from 'vue'
import { useGameStore } from '@/store/games/gameStore.js'
import {
  alertMessage,
  isLoadContent,
  isShowAll,
} from '@/components/modules/popular/PopularGameModule.options.js'
import {
  loadModule,
  unAuthorizedCardClick,
} from '@/components/modules/popular/PopularGameModule.events.js'

import GameCard from '@/components/ui/cards/game/GameCard.vue'
import PopularIcon from '@/components/ui/icons/popular/PopularIcon.vue'
import ContentLoader from '@/components/ui/content-loader/ContentLoader.vue'

import PopularGameFilters from '@/components/modules/popular/filters/PopularGameFilters.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const gameStore = useGameStore()
const linkToGames = ({ category, title = '', entity = 'popularGames' }) => {
  router.push(`/games?categoryId=${category}&title=${title}&entity=${entity}`)
}
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
          <p>(+ 50000 слотов)</p>
        </div>
        <span
          class="more"
          @click="
            linkToGames({
              category: 17,
              title: 'Топ слоты',
              entity: 'filteredGame',
            })
          "
          >Еще</span
        >
      </div>
      <div class="popular__game-module-items" v-if="!isLoadContent">
        <ContentLoader type="game-card" v-for="item in 5" :key="item">
          <rect width="400" height="500" />
        </ContentLoader>
      </div>
      <Transition name="fade">
        <div v-if="isLoadContent">
          <div
            :class="['popular__game-module-items', { all: isShowAll }]"
            v-if="gameStore.filteredGame.shortList.length > 0"
          >
            <GameCard
              v-for="game in gameStore.filteredGame.shortList"
              :key="game"
              :gameItem="game"
              @unauthorized="unAuthorizedCardClick"
            />
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
        <span
          class="more"
          @click="
            linkToGames({
              category: 5,
              title: 'Популярные',
              entity: 'popularGames',
            })
          "
          >Еще</span
        >
      </div>
      <div class="popular__game-module-items" v-if="!isLoadContent">
        <ContentLoader type="game-card" v-for="item in 5" :key="item">
          <rect width="400" height="500" />
        </ContentLoader>
      </div>
      <Transition name="fade">
        <div v-if="isLoadContent">
          <div
            :class="['popular__game-module-items', { all: isShowAll }]"
            v-if="gameStore.popularGames.shortList.length > 0"
          >
            <GameCard
              v-for="game in gameStore.popularGames.shortList"
              :key="game"
              :gameItem="game"
              @unauthorized="unAuthorizedCardClick"
            />
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
        <span
          class="more"
          @click="
            linkToGames({
              category: 1,
              title: 'Ретро слоты',
              entity: 'retroGames',
            })
          "
          >Еще</span
        >
      </div>
      <div class="popular__game-module-items" v-if="!isLoadContent">
        <ContentLoader type="game-card" v-for="item in 5" :key="item">
          <rect width="400" height="500" />
        </ContentLoader>
      </div>
      <Transition name="fade">
        <div v-if="isLoadContent">
          <div
            :class="['popular__game-module-items', { all: isShowAll }]"
            v-if="gameStore.retroGames.shortList.length > 0"
          >
            <GameCard
              v-for="game in gameStore.retroGames.shortList"
              :key="game"
              :gameItem="game"
              @unauthorized="unAuthorizedCardClick"
            />
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
        <span
          class="more"
          @click="
            linkToGames({ category: 2, title: 'Новинки', entity: 'newGames' })
          "
          >Еще</span
        >
      </div>
      <div class="popular__game-module-items" v-if="!isLoadContent">
        <ContentLoader type="game-card" v-for="item in 5" :key="item">
          <rect width="400" height="500" />
        </ContentLoader>
      </div>
      <Transition name="fade">
        <div v-if="isLoadContent">
          <div
            :class="['popular__game-module-items', { all: isShowAll }]"
            v-if="gameStore.newGames.shortList.length > 0"
          >
            <GameCard
              v-for="game in gameStore.newGames.shortList"
              :key="game"
              :gameItem="game"
              @unauthorized="unAuthorizedCardClick"
            />
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
