import { ref } from 'vue'
import { defineStore } from 'pinia'
import GamesService from '@/API/games/gameService.js'

export const useGameStore = defineStore('gameStore', () => {
  const games = ref([])
  const filteredGame = ref([])
  const getGames = async () => {
    const { data } = await GamesService.getGames()
    games.value = [...data]
    filteredGame.value = games.value
    filterGames(17)
  }

  const filterGames = (categoryPosition) => {
    const filterData = games.value.filter((item) => {
      return item.category.find((category) => category === categoryPosition)
    })
    filteredGame.value = [...filterData]
  }
  const searchGames = (searchValue = '') => {
    const searchData = games.value.filter((game) =>
      game.title.includes(searchValue)
    )
    console.log(searchData)
    filteredGame.value = [...searchData]
  }
  return { games, filteredGame, getGames, filterGames, searchGames }
})
