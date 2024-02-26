import { axiosInstance, validTokenExpired } from '@/utils/axios/axios'
import apiConfig from '@/API/api.config.js'

const queryString = '?shop_id=1&key=pLaHFj1OsSNDNclDjRN03OHHq'
export default class AccountService {
  static async getInfoAccount() {
    try {
      const tokenAuth = apiConfig.token || sessionStorage.getItem('token')
      const response = await axiosInstance({
        url: '/me' + queryString,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${tokenAuth}`,
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
      const tokenAuth = apiConfig.token || sessionStorage.getItem('token')
      const response = await axiosInstance({
        url: '/stats/pay' + queryString,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${tokenAuth}`,
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
      const tokenAuth = apiConfig.token || sessionStorage.getItem('token')
      const response = await axiosInstance({
        url: '/me/details' + queryString,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${tokenAuth}`,
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
}
