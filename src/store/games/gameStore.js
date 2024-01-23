import { defineStore } from 'pinia'
import { ref } from 'vue'
import GamesService from '@/API/games/gameService.js'

export const useGameStore = defineStore('gameStore', () => {
  const games = ref({})
  const getGames = async () => await GamesService.getGames()
  return { games, getGames }
})
