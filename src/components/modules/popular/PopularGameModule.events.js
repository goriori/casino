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

const changeLoad = () => (isLoad.value = !isLoad.value)
const changeLoadContent = () =>
  setTimeout(() => (isLoadContent.value = !isLoadContent.value), 500)


