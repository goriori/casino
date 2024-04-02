import { computed, ref } from 'vue'
import { useSessionStore } from '@/store/session/sessionStore.js'

export function useData() {
  const sessionStore = useSessionStore()
  const isValid = ref(false)
  const timeClosePopup = ref(15000)
  const balance = ref(0)
  const promo = ref('')
  const bonusBalance = computed(() => {
    if (sessionStore.session.history.length === 0) {
      return (balance.value / 100) * 50
    } else if (sessionStore.session.history.length > 0) {
      return (
        (balance.value / 100) *
        sessionStore.session?.profile?.stair_status?.bonus
      )
    }
  })
  return {
    isValid,
    timeClosePopup,
    balance,
    promo,
    bonusBalance,
  }
}
