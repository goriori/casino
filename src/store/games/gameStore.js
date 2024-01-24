import { ref } from 'vue'
import { defineStore } from 'pinia'
import GamesService from '@/API/games/gameService.js'

export const useGameStore = defineStore('gameStore', () => {
  const games = ref([])
  const getGames = async () => {
    const { data } = await GamesService.getGames()
    games.value = [...data.filter((item) => item.view === 1 && item.category.length > 0)]
  }
  return { games, getGames }
})
