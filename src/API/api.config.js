import { useSessionStore } from '@/store/session/sessionStore.js'


export default {
  token: sessionStorage.getItem('token') || null,
}
