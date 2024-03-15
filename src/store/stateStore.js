import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStateStore = defineStore('stateStore', () => {
  const isLoading = ref(false)
  const haveSession = ref(false)
  const globalPopupsModules = ref({
    authorization: {
      visibility: false,
    },
    registration: {
      visibility: false,
    },
    replenishment: {
      visibility: false,
    },
    conclusion: {
      visibility: false,
    },
    profileEdit: {
      visibility: false,
    },
    statusesList: {
      visibility: false,
    },
  })
  const globalPopupMessages = ref({
    errorServer: false,
    errorValid: false,
    success: false,
    application: false,
    exchangeCoin: false,
  })

  return {
    isLoading,
    globalPopupsModules,
    globalPopupMessages,
  }
})
