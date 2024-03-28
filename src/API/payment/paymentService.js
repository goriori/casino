import { axiosInstance, validTokenExpired } from '@/utils/axios/axios'
import apiConfig from '@/API/api.config.js'

export default class PaymentService {
  static async setReplenishment(replObject) {
    try {
      apiConfig.getToken()
      const response = await axiosInstance({
        url: '/ticketIn',
        headers: {
          Authorization: `Bearer ${apiConfig.token}`,
          'Content-Type': 'multipart/form-data',
        },
        validateStatus: validTokenExpired,
        method: 'POST',
        data: replObject,
      })
      return response.data
    } catch (e) {
      throw e
    }
  }

  static async setWithdrawal(withdrwlObject) {
    try {
      apiConfig.getToken()
      const response = await axiosInstance({
        url: '/ticketOut',
        headers: {
          Authorization: `Bearer ${apiConfig.token}`,
        },
        method: 'POST',
        data: { ...withdrwlObject },
      })
      return response.data
    } catch (e) {
      throw e
    }
  }

  static async getRequisiteCards() {
    try {
      apiConfig.getToken()
      const response = await axiosInstance({
        url: '/bankCards',
        headers: {
          Authorization: `Bearer ${apiConfig.token}`,
        },
        method: 'GET',
      })
      return response.data
    } catch (e) {
      throw e
    }
  }

  static async sendPromocode(promocode) {
    try {
      apiConfig.getToken()
      const response = await axiosInstance({
        url: '/pincode',
        headers: {
          Authorization: `Bearer ${apiConfig.token}`,
        },
        params: {
          pincode: promocode,
        },
        method: 'GET',
      })
      return response.data
    } catch (e) {
      throw e
    }
  }
}
