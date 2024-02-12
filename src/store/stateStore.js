import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStateStore = defineStore('stateStore', () => {
  const isLoading = ref(false)
  const haveSession = ref(false)
  const globalModules = ref({
    authorization: {
      visibility: false,
    },
    registration: {
      visibility: false,
    },
  })
  return {
    isLoading,
    globalModules,
  }
})
