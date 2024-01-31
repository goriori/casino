import { axiosInstance, validTokenExpired } from '@/utils/axios/axios'
import apiConfig from '@/API/api.config.js'

const queryString = '?shop_id=1&key=pLaHFj1OsSNDNclDjRN03OHHq'
export default class PaymentService {
  static async setReplenishment(replObject) {
    try {
      const tokenAuth = apiConfig.token || sessionStorage.getItem('token')
      const response = await axiosInstance({
        url: '/ticketIn' + queryString,
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
          Authorization: `Bearer ${tokenAuth}`,
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
      const tokenAuth = apiConfig.token || sessionStorage.getItem('token')
      const response = await axiosInstance({
        url: '/ticketOut' + queryString,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${tokenAuth}`,
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
      const tokenAuth = apiConfig.token || sessionStorage.getItem('token')
      const response = await axiosInstance({
        url: '/bankCards' + queryString,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${tokenAuth}`,
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
      const tokenAuth = apiConfig.token || sessionStorage.getItem('token')
      const response = await axiosInstance({
        url: '/pincode' + queryString + `&pincode=${promocode}`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${tokenAuth}`,
        },
        method: 'GET',
      })
      return response.data
    } catch (e) {
      throw e
    }
  }
}
