import { computed, ref } from 'vue'
import { useSessionStore } from '@/store/session/sessionStore.js'

const sessionStore = useSessionStore()
export const dateStart = ref()
export const dateEnd = ref()

export const filteredHistory = computed(() => {
  if (dateStart.value && dateEnd.value) {
    const filteredCopyHistory = [...sessionStore.session.history]
    const history = filteredCopyHistory.filter(
      (item) =>
        new Date(item.created_at).toLocaleDateString() >= dateStart.value
    )
    return history
  }
  return sessionStore.session.history
})
