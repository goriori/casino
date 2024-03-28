import { defineStore } from 'pinia'
import { ref } from 'vue'
import AccountService from '@/API/account/accountService.js'

export const useMailStore = defineStore('mailStore', () => {
  const messages = ref([])

  const getMessages = async () => {
    const response = await AccountService.getMessagesAccount()
    messages.value = [...response]
  }

  return {
    messages,
    getMessages,
  }
})
