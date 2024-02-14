import {
  alertMessage,
  isLoad,
  isLoadContent,
  isShowAll,
  searchValue,
} from '@/components/modules/popular/PopularGameModule.options.js'
import { useGameStore } from '@/store/games/gameStore.js'
import { useStateStore } from '@/store/stateStore.js'

const gameStore = useGameStore()
const stateStore = useStateStore()
export const unAuthorizedCardClick = () => {
  stateStore.globalModules.authorization.visibility = true
}

export const showOrHiddenAll = () => {
  isShowAll.value = !isShowAll.value
}
export const clearSearch = () => {
  searchValue.value = ''
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
