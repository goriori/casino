import { ref } from 'vue'
import { defineStore } from 'pinia'
import GamesService from '@/API/games/gameService.js'

export const useGameStore = defineStore('gameStore', () => {
  const games = ref([])
  const filteredGame = ref({
    categoryId: 17,
    shortList: [],
    fullList: [],
  })
  const popularGames = ref({
    categoryId: 5,
    shortList: [],
    fullList: [],
  })
  const retroGames = ref({
    categoryId: 1,
    shortList: [],
    fullList: [],
  })
  const newGames = ref({
    categoryId: 2,
    shortList: [],
    fullList: [],
  })
  const getGames = async () => {
    const storeList = [filteredGame, popularGames, retroGames, newGames]
    const { data } = await GamesService.getGames()
    games.value = [...data]
    storeList.forEach((store) => {
      store.value.shortList = [...filterGames(store.value.categoryId, true)]
      store.value.fullList = [...filterGames(store.value.categoryId, false)]
    })
  }

  const filterGames = (categoryPosition, shortList = false) => {
    const filteredGames = games.value.filter((item) => {
      return item.category.find((category) => category === categoryPosition)
    })
    return shortList ? filteredGames.slice(0, 5) : filteredGames
  }
  const searchGames = (searchValue = '') => {
    const searchData = games.value.filter((game) =>
      game.title.includes(searchValue)
    )
    filteredGame.value = [...searchData]
  }
  return {
    games,
    filteredGame,
    popularGames,
    retroGames,
    newGames,
    getGames,
    filterGames,
    searchGames,
  }
})
