import { defineStore } from 'pinia'
import { ref } from 'vue'
import AccountService from '@/API/account/accountService.js'

export const useMailStore = defineStore('mailStore', () => {
  const allMessages = ref([])
  const messages = ref([])

  const getMessages = async () => {
    const response = await AccountService.getMessagesAccount()
    allMessages.value = [...response]
    messages.value = allMessages.value.filter((message) => !message?.view)
  }
  const readMessage = async (messageId) => {
    await AccountService.readMessageAccount(messageId)
  }
  return {
    messages,
    getMessages,
    readMessage,
  }
})
