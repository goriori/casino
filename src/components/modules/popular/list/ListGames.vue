<script setup>
import { ref } from 'vue'
import { isLoadContent } from '@/components/modules/popular/PopularGameModule.options.js'
import { useGameStore } from '@/store/games/gameStore.js'
import ShortListGame from '@/components/modules/popular/short-list/ShortListGame.vue'
import LongListGame from '@/components/modules/popular/long-list/LongListGame.vue'
import PopularIcon from '@/components/ui/icons/popular/PopularIcon.vue'
import ContentLoader from '@/components/ui/content-loader/ContentLoader.vue'
import SeeMoreButton from '@/components/ui/buttons/see-more/SeeMoreButton.vue'
import HideMoreButton from '@/components/ui/buttons/hide-more/HideMoreButton.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Топ слоты',
  },
  typeGame: {
    type: String,
    default: 'filteredGame',
  },
})
const gameStore = useGameStore()
const showAll = ref(false)

const onShowAll = () => (showAll.value = true)
const onHideAll = () => (showAll.value = false)
  </script>

<template>
  <section class="list">
    <div class="title">
      <PopularIcon />
      <h3>{{ title }}</h3>
    </div>
    <div v-if="!isLoadContent" class="loader-content">
      <ContentLoader type="game-card" v-for="item in 5" :key="item">
        <rect width="400" height="500" />
      </ContentLoader>
    </div>
    <div
      v-if="gameStore[typeGame].shortList.length > 0 && !showAll"
      class="list-short"
    >
      <ShortListGame :type-game="typeGame" />
      <SeeMoreButton class="item-button" @click="onShowAll" />
    </div>
    <div
      v-if="
        gameStore[typeGame].shortList.length === 0 ||
        gameStore[typeGame].fullList.length === 0
      "
    >
      Ничего не найдено
    </div>
    <div
      class="list-long"
      v-if="gameStore[typeGame].fullList.length > 0 && showAll"
    >
      <LongListGame :type-game="typeGame" />
      <HideMoreButton class="item-button" @click="onHideAll" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

@mixin spaceItems() {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.list {
  @include spaceItems();

  &-short {
    @include spaceItems();
  }

  &-long {
    @include spaceItems();
  }
}

.title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  font-size: 32px;

  @media (max-width: $md4 + px) {
    font-size: 20px;
  }
}

.loader {
  &-content {
    @include spaceItems();
  }
}

.item {
  &-button {
    width: 100%;
    margin: 0 auto;
    max-width: 326px;
  }
}
</style>
