import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStateStore = defineStore('stateStore', () => {
  const isLoading = ref(false)
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
    roulette: {
      visibility: false,
    },
    winnPrize: {
      visibility: false,
    },
    casePrize: {
      visibility: false,
    },
    caseOpen: {
      caseId: null,
      prizes: [],
      visibility: false,
    },
  })
  const globalPopupMessages = ref({
    error: {
      errorText: '',
      visibility: false,
      show: function (message) {
        this.errorText = message
        this.visibility = true
      },
      close: function () {
        this.visibility = false
        this.errorText = ''
      },
    },
    success: {
      successText: '',
      visibility: false,
      show: function (message) {
        this.successText = message
        this.visibility = true
      },
      close: function () {
        this.visibility = false
        this.successText = ''
      },
    },
    application: false,
    exchangeCoin: false,
  })

  return {
    isLoading,
    globalPopupsModules,
    globalPopupMessages,
  }
})
