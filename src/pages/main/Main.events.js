import { useSessionStore } from '@/store/session/sessionStore.js'

const sessionStore = useSessionStore()
export const fetchEntityData = async () => {
  const hasToken = sessionStore.session.token
  if (hasToken) {
    await sessionStore.getInfoSession()
    await sessionStore.getStatusPay()
  }
}
