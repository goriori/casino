import { useProviderStore } from '@/store/providers/providerStore.js'
import { useGameStore } from '@/store/games/gameStore.js'

const gameStore = useGameStore()
const providerStore = useProviderStore()

export const fetchEntityData = async () => {
  // await gameStore.getGames()
  await providerStore.getProviders()
}