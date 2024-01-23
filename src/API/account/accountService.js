import { axiosInstance } from '@/utils/axios/axios'

const tokenAuth = window.TEST_TOKEN_AUTH
const queryString = '?shop_id=1&key=pLaHFj1OsSNDNclDjRN03OHHq'
export default class AccountService {
  static async getInfoAccount() {
    try {
      const response = await axiosInstance({
        url: '/me' + queryString,
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

  static async getInfoStatusPay() {
    try {
      const response = await axiosInstance({
        url: '/stats/pay' + queryString,
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
