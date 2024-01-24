import { useProviderStore } from '@/store/providers/providerStore.js'
import { useGameStore } from '@/store/games/gameStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'

const gameStore = useGameStore()
const providerStore = useProviderStore()
const sessionStore = useSessionStore()
export const fetchEntityData = async () => {
  // await gameStore.getGames()
  // await providerStore.getProviders()
  await sessionStore.getInfoSession()
  await sessionStore.getStatusPay()
}
