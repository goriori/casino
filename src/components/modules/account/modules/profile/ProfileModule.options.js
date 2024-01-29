import { computed, ref } from 'vue'
import { useSessionStore } from '@/store/session/sessionStore.js'

const sessionStore = useSessionStore()
export const fullName = computed(() => {
  return `${
    sessionStore.session.profile?.first_name
      ? sessionStore.session.profile?.first_name
      : 'Не задано'
  } ${
    sessionStore.session.profile?.last_name
      ? sessionStore.session.profile?.last_name
      : ' '
  }`
})


export const promocode = ref('')
export const isEditFullName = ref(false)
export const isEditBirthday = ref(false)
