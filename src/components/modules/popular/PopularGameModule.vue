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
  showOrHiddenAll,
  unAuthorizedCardClick,
} from '@/components/modules/popular/PopularGameModule.events.js'

import GameCard from '@/components/ui/cards/game/GameCard.vue'
import PopularIcon from '@/components/ui/icons/popular/PopularIcon.vue'
import ContentLoader from '@/components/ui/content-loader/ContentLoader.vue'

import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import PopularGameFilters from '@/components/modules/popular/filters/PopularGameFilters.vue'

const gameStore = useGameStore()
onMounted(async () => {
  await loadModule()
})
</script>

<template>
  <div class="popular__game-module">
    <Transition name="fade">
      <div class="popular__game-alert" v-if="alertMessage === 'unauthorized'">
        Пожалуйста, войдите в аккаунт
      </div>
    </Transition>
    <PopularGameFilters />
    <div class="popular__game-module-title">
      <PopularIcon />
      <h3>Топ слоты</h3>
      <p>(+ 50000 слотов)</p>
    </div>
    <div class="popular__game-module-items" v-if="!isLoadContent">
      <ContentLoader type="game-card" v-for="item in 15" :key="item">
        <rect width="400" height="500" />
      </ContentLoader>
    </div>
    <Transition name="fade">
      <div
        :class="['popular__game-module-items', { all: isShowAll }]"
        v-if="isLoadContent"
      >
        <GameCard
          v-for="game in gameStore.filteredGame"
          :key="game"
          :gameItem="game"
          @unauthorized="unAuthorizedCardClick"
        />
      </div>
    </Transition>
    <BaseButton color="primary" @click="showOrHiddenAll" id="show_all">
      <p v-if="!isShowAll">Показать все</p>
      <p v-else>Скрыть</p>
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
@import 'PopularGameModule';
</style>
