import { ref } from 'vue'
import { defineStore } from 'pinia'
import GamesService from '@/API/games/gameService.js'
import { useDeviceType } from '@/utils/useDeviceType.js'
import { checkDeviceType } from '@/utils/helpers/checkDeviceType.js'

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
    const userAgent = navigator.userAgent
    const isMobile = checkDeviceType(userAgent)
    games.value = clearDuplicateGames([...data])
    if (isMobile) deviceGames.value = [...filterGameDevice(TYPES_DEVICE.MOBILE, games.value)]
    else deviceGames.value = [...filterGameDevice(TYPES_DEVICE.DESKTOP, games.value)]
    filteredGames.value = [...deviceGames.value]
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
    filteredGames.value = deviceGames.value.filter((game) => {
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

  const clearDuplicateGames = (games) => {
    return Object.values(
      games.reduce((acc, val) => {
        acc[val.id] = Object.assign(acc[val.id] ?? {}, val)
        return acc
      }, {})
    )
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
