<script setup>
import { ref, watch } from 'vue'
import Search from '@/components/ui/search/base/Search.vue'
import { useGameStore } from '@/store/games/gameStore.js'

const gameStore = useGameStore()
const search = ref('')

const onSearch = async () => {
  if (search.value.trim().length === 0) gameStore.resetFilteredGames()
  else await gameStore.searchGames(search.value)
}
</script>

<template>
  <Search v-model="search" @on-send="onSearch" />
</template>

<style scoped lang="scss"></style>
