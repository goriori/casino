import { axiosInstance } from '@/utils/axios/axios'

const queryString = '?shop_id=1&key=pLaHFj1OsSNDNclDjRN03OHHq'
export default class AuthorizationService {
  static async authorization(formAuth) {
    try {
      const response = await axiosInstance({
        url: '/login' + queryString,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        data: { ...formAuth },
      })
      window.TOKEN_API = response.data.token
      sessionStorage.setItem('token', response.data.token)
      return response.data
    } catch (e) {
      throw e
    }
  }

  static async registration(formReg) {
    try {
      const response = await axiosInstance({
        url: '/register' + queryString,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        // eslint-disable-next-line camelcase
        data: { ...formReg, shop_id: 1 },
      })
      return response.data
    } catch (e) {
      throw e
    }
  }
}
