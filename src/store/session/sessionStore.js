import { defineStore } from 'pinia'
import { ref } from 'vue'
import AuthorizationService from '@/API/authorization/authorizationService.js'
import AccountService from '@/API/account/accountService.js'

export const useSessionStore = defineStore('sessionStore', () => {
  const session = ref({
    token: sessionStorage.getItem('token') || null,
  })
  const authorization = async (formAuth) => {
    const { token } = await AuthorizationService.authorization(formAuth)
    sessionStorage.setItem('token', token)
    session.value.token = token
  }

  const registration = async (formReg) => {
    await AuthorizationService.registration(formReg)
  }

  const getInfoSession = async () => {
    const response = await AccountService.getInfoAccount()
    session.value.profile = { ...response }
  }

  const getStatusPay = async () => {
    const { data } = await AccountService.getInfoStatusPay()
    session.value.history = [...data]
  }

  const updateInfoAccount = async (formUpdate) => {
    await AccountService.updateInfoAccount(formUpdate)
  }

  return {
    session,
    authorization,
    registration,
    getInfoSession,
    getStatusPay,
    updateInfoAccount,
  }
})
