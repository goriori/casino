import { useProviderStore } from '@/store/providers/providerStore.js'
import { useGameStore } from '@/store/games/gameStore.js'
import { useSessionStore } from '@/store/session/sessionStore.js'

const gameStore = useGameStore()
const providerStore = useProviderStore()
const sessionStore = useSessionStore()
export const fetchEntityData = async () => {
  const hasToken = sessionStore.session.token
  if (hasToken) {
    await sessionStore.getInfoSession()
    await sessionStore.getStatusPay()
  }
}
