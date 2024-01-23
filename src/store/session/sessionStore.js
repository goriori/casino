import { defineStore } from 'pinia'
import { ref } from 'vue'
import AuthorizationService from '@/API/authorization/authorizationService.js'
import AccountService from '@/API/account/accountService.js'

export const useSessionStore = defineStore('sessionStore', () => {
  const session = ref({})
  const authorization = async (formAuth) => {
    const { token } = await AuthorizationService.authorization(formAuth)
    window.TEST_TOKEN_AUTH = token
  }

  const registration = async (formReg) => {
    const response = await AuthorizationService.registration(formReg)
    console.log(response)
  }

  const getInfoSession = async () => {
    const response = await AccountService.getInfoAccount()
    console.log(response)
  }

  const getStatusPay = async () => {
    const response = await AccountService.getInfoStatusPay()
    console.log(response)
  }
  return {
    session,
    authorization,
    registration,
    getInfoSession,
    getStatusPay,
  }
})
