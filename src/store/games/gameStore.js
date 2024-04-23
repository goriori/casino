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
  const deviceGames = ref([])
  const filteredGames = ref([])
  const gamesCategories = ref({})
  const getGames = async () => {
    const { data } = await GamesService.getGames()
    const { isMobile } = useDeviceType()
    if (isMobile)
      deviceGames.value = [...filterGameDevice(typesDevice.mobile, data)]
    else deviceGames.value = [...filterGameDevice(typesDevice.desktop, data)]
    filteredGames.value = [...deviceGames.value]
    games.value = [...data]
  }
  const filterGameDevice = (device, games) => {
    return games.filter((game) => game.view && game.device === device)
  }
  const filterGameCategory = (categoryId) => {
    filteredGames.value = games.value.filter((game) => {
      const haveCategory = game.categories.find(
        (category) => category.category_id === categoryId
      )
      if (haveCategory) return game
    })
  }

  const searchGames = (searchValue) => {
    filteredGames.value = deviceGames.value.filter((game) => {
      const searchInTitle = game.title
        .toLowerCase()
        .includes(searchValue.toLowerCase())
      if (searchInTitle) return game
    })
  }

  const resetFilteredGames = () => {
    filteredGames.value = [...deviceGames.value]
  }
  return {
    games,
    deviceGames,
    filteredGames,
    gamesCategories,
    getGames,
    filterGameCategory,
    resetFilteredGames,
    searchGames,
  }
})
