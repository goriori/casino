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
          item.categories.length > 0 &&
          item.categories[0]?.category_id !== 8
      ),
    ]
    filteredGame.value = games.value
    filterGames(9)
  }

  const filterGames = (categoryPosition) => {
    const filterData = games.value.filter((item) => {
      return item.categories.find(
        (category) => category?.category_id === categoryPosition
      )
    })
    filteredGame.value = [...filterData]
  }

  return { games, filteredGame, getGames, filterGames }
})
