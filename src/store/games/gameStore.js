import { ref } from 'vue'
import { defineStore } from 'pinia'
import GamesService from '@/API/games/gameService.js'

export const useGameStore = defineStore('gameStore', () => {
  const games = ref([])
  const filteredGame = ref([])
  const getGames = async () => {
    const { data } = await GamesService.getGames()

    games.value = [
      ...data.filter(
        (item) =>
          item.view === 1 &&
          item.category.length > 0 &&
          item.category[0] !== 8
      ),
    ]
    filteredGame.value = games.value
    filterGames(9)
  }

  const filterGames = (categoryPosition) => {
    const filterData = games.value.filter((item) => {
      return item.category.find(
        (category) => category === categoryPosition
      )
    })
    filteredGame.value = [...filterData]
  }

  return { games, filteredGame, getGames, filterGames }
})
