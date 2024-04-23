import { useSessionStore } from '@/store/session/sessionStore.js'
import { useRouter } from 'vue-router'

export const useValidSession = () => {
  const sessionStore = useSessionStore()
  const router = useRouter()
  const haveToken = sessionStore.session?.token !== null
  const haveProfileData = sessionStore.session?.profile !== undefined
  if (!haveToken && !haveProfileData) router.push('/')
}
