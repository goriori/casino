import {
  alertMessage,
  isLoad,
  isLoadContent,
} from '@/components/modules/popular/PopularGameModule.options.js'
import { useGameStore } from '@/store/games/gameStore.js'

const gameStore = useGameStore()
export const unAuthorizedCardClick = () => {
  alertMessage.value = 'unauthorized'
  clearAlert()
}
export const clearAlert = () => {
  setTimeout(() => (alertMessage.value = 'none'), 1500)
}

export const loadModule = async () => {
  gameStore.getGames().then(changeLoad).then(changeLoadContent)
}

const changeLoad = () => {
  isLoad.value = !(
    gameStore.games.length > 0 || gameStore.filteredGame.length > 0
  )
}
const changeLoadContent = () => {
  if (gameStore.games.length > 0 || gameStore.filteredGame.length > 0)
    setTimeout(() => (isLoadContent.value = true), 500)
  else isLoadContent.value = false
}
