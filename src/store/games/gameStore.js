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
  const gamesCategories = ref({})
  const getGames = async () => {
    const { data } = await GamesService.getGames()
    const { isMobile } = useDeviceType()
    // if (isMobile) games.value = [...filterGameDevice(typesDevice.mobile, data)]
    // else games.value = [...filterGameDevice(typesDevice.desktop, data)]
    games.value = [...data]
  }
  const filterGameDevice = (device, games) => {
    return games.filter((game) => game.view && game.device === device)
  }
  return {
    games,
    gamesCategories,
    getGames,
  }
})
