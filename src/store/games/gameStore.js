import { ref } from 'vue'
import { defineStore } from 'pinia'
import GamesService from '@/API/games/gameService.js'
import { useDeviceType } from '@/utils/useDeviceType.js'

export const useGameStore = defineStore('gameStore', () => {
  const typesDevice = {
    mobile: 0,
    desktop: 1,
    mobileAndDesktop: 2,
    all: '',
  }
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
  const storeList = [games, filteredGame, popularGames, retroGames, newGames]
  const getGames = async () => {
    const { data } = await GamesService.getGames()
    const { isMobile } = useDeviceType()
    console.log(isMobile)
    if (isMobile) games.value = [...filterGameDevice(typesDevice.mobile, data)]
    else games.value = [...filterGameDevice(typesDevice.desktop, data)]
    storeList.forEach((store) => {
      store.value.shortList = [...filterGames(store.value.categoryId, true)]
      store.value.fullList = [...filterGames(store.value.categoryId, false)]
    })
  }

  const filterGameDevice = (device, games) => {
    return games.filter((game) => game.view && game.device === device)
  }
  const filterGames = (categoryPosition, shortList = false) => {
    const filteredGames = games.value.filter((item) => {
      return item.category.find((category) => category === categoryPosition)
    })
    return shortList ? filteredGames.slice(0, 5) : filteredGames
  }
  const filterGameCategories = (categoryPosition) => {
    storeList.forEach((store) => {
      store.value.fullList = games.value
        .filter((item) => {
          return item.category.find((category) => category === categoryPosition)
        })
        .slice(0, 5)
    })
  }
  const searchGames = (searchValue = '') => {
    storeList.forEach((store) => {
      store.value.fullList = games.value.filter((item) => {
        return item.title.includes(searchValue)
      })
    })
  }
  return {
    games,
    filteredGame,
    popularGames,
    retroGames,
    newGames,
    getGames,
    filterGames,
    filterGameCategories,
    searchGames,
  }
})
