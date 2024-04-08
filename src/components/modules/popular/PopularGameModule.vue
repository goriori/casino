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
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import SeeMoreButton from '@/components/ui/buttons/see-more/SeeMoreButton.vue'
import SeeMoreCard from '@/components/ui/cards/see-more/SeeMoreCard.vue'

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
      </div>
      <div class="popular__game-module-items" v-if="!isLoadContent">
        <ContentLoader type="game-card" v-for="item in 5" :key="item">
          <rect width="400" height="500" />
        </ContentLoader>
      </div>
      <Transition name="fade">
        <div v-if="isLoadContent" class="popular__game-module-item">
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
            <SeeMoreCard
              @click="
                linkToGames({
                  category: 17,
                  title: 'Топ слоты',
                  entity: 'filteredGame',
                })
              "
              class="see_more"
            />
          </div>
          <div v-else>Ничего не найдено</div>
          <SeeMoreButton
            v-if="gameStore.filteredGame.shortList.length > 0"
            @click="
              linkToGames({
                category: 17,
                title: 'Топ слоты',
                entity: 'filteredGame',
              })
            "
            class="item-button"
          />
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
            :class="['popular__game-module-items', { all: isShowAll }]"
            v-if="gameStore.popularGames.shortList.length > 0"
          >
            <GameCard
              v-for="game in gameStore.popularGames.shortList"
              :key="game"
              :gameItem="game"
              @unauthorized="unAuthorizedCardClick"
            />
            <SeeMoreCard
              @click="
                linkToGames({
                  category: 5,
                  title: 'Популярные',
                  entity: 'popularGames',
                })
              "
              class="see_more"
            />
          </div>
          <div v-else>Ничего не найдено</div>
          <SeeMoreButton
            v-if="gameStore.popularGames.shortList.length > 0"
            @click="
              linkToGames({
                category: 5,
                title: 'Популярные',
                entity: 'popularGames',
              })
            "
            class="item-button"
          />
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
            :class="['popular__game-module-items', { all: isShowAll }]"
            v-if="gameStore.retroGames.shortList.length > 0"
          >
            <GameCard
              v-for="game in gameStore.retroGames.shortList"
              :key="game"
              :gameItem="game"
              @unauthorized="unAuthorizedCardClick"
            />
            <SeeMoreCard
              @click="
                linkToGames({
                  category: 1,
                  title: 'Ретро слоты',
                  entity: 'retroGames',
                })
              "
              class="see_more"
            />
          </div>
          <div v-else>Ничего не найдено</div>
          <SeeMoreButton
            v-if="gameStore.retroGames.shortList.length > 0"
            @click="
              linkToGames({
                category: 1,
                title: 'Ретро слоты',
                entity: 'retroGames',
              })
            "
            class="item-button"
          />
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
            :class="['popular__game-module-items', { all: isShowAll }]"
            v-if="gameStore.newGames.shortList.length > 0"
          >
            <GameCard
              v-for="game in gameStore.newGames.shortList"
              :key="game"
              :gameItem="game"
              @unauthorized="unAuthorizedCardClick"
            />
            <SeeMoreCard
              @click="
                linkToGames({
                  category: 2,
                  title: 'Новинки',
                  entity: 'newGames',
                })
              "
              class="see_more"
            />
          </div>
          <div v-else>Ничего не найдено</div>
          <SeeMoreButton
            v-if="gameStore.newGames.shortList.length > 0"
            @click="
              linkToGames({ category: 2, title: 'Новинки', entity: 'newGames' })
            "
            class="item-button"
          />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'PopularGameModule';
</style>
