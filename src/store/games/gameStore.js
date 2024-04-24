import { ref } from 'vue'
import { defineStore } from 'pinia'
import GamesService from '@/API/games/gameService.js'
import { useDeviceType } from '@/utils/useDeviceType.js'

export const useGameStore = defineStore('gameStore', () => {
  const TYPES_DEVICE = {
    MOBILE: 0,
    DESKTOP: 1,
    MOBILE_AND_DESKTOP: 2,
    ALL: '',
  }
  const games = ref([])
  const deviceGames = ref([])
  const filteredGames = ref([])
  const gamesCategories = ref({})
  const getGames = async () => {
    const { data } = await GamesService.getGames()
    const { isMobile } = useDeviceType()
    if (isMobile)
      deviceGames.value = [...filterGameDevice(TYPES_DEVICE.MOBILE, data)]
    else deviceGames.value = [...filterGameDevice(TYPES_DEVICE.DESKTOP, data)]
    filteredGames.value = [...deviceGames.value]
    games.value = [...data]
    console.log(filteredGames.value.find((game) => game.id === 3))
  }
  const filterGameDevice = (device, games) => {
    const mobileAndDesktopGames = games.filter(
      (game) => game.view && game.device === TYPES_DEVICE.MOBILE_AND_DESKTOP
    )
    const deviceGames = games.filter(
      (game) => game.view && game.device === device
    )
    return [...deviceGames, ...mobileAndDesktopGames]
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
