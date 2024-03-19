import { axiosInstance, validTokenExpired } from '@/utils/axios/axios'
import apiConfig from '@/API/api.config.js'

export default class AccountService {
  static async getInfoAccount() {
    try {
      apiConfig.getToken()
      const response = await axiosInstance({
        url: '/me',
        headers: {
          Authorization: `Bearer ${apiConfig.token}`,
        },
        validateStatus: validTokenExpired,
        method: 'GET',
      })
      return response.data
    } catch (e) {
      throw e
    }
  }

  static async getInfoStatusPay() {
    try {
      apiConfig.getToken()
      const response = await axiosInstance({
        url: '/stats/pay',
        headers: {
          Authorization: `Bearer ${apiConfig.token}`,
        },
        validateStatus: validTokenExpired,
        method: 'GET',
      })
      return response.data
    } catch (e) {
      throw e
    }
  }

  static async updateInfoAccount(formUpdate) {
    try {
      apiConfig.getToken()
      const response = await axiosInstance({
        url: '/me/details',
        headers: {
          Authorization: `Bearer ${apiConfig.token}`,
        },
        validateStatus: validTokenExpired,
        method: 'POST',
        data: { ...formUpdate },
      })
      return response.data
    } catch (e) {
      throw e
    }
  }

  static async getMessagesAccount() {
    try {
      apiConfig.getToken()
      const response = await axiosInstance({
        url: '/messages',
        headers: {
          Authorization: `Bearer ${apiConfig.token}`,
        },
        validateStatus: validTokenExpired,
        method: 'GET',
      })
      return response.data
    } catch (e) {
      throw e
    }
  }
}
