import { axiosInstance } from '@/utils/axios/axios'
import { ERRORS } from '@/configs/errors.js'

export default class AuthorizationService {
  static async authorization(formAuth) {
    try {
      const response = await axiosInstance({
        url: '/login',
        method: 'POST',
        data: { ...formAuth },
      })
      window.TOKEN_API = response.data.token
      sessionStorage.setItem('token', response.data.token)
      return response.data
    } catch (e) {
      throw ERRORS.ERROR_AUTHORIZATION
    }
  }

  static async registration(formReg) {
    try {
      const response = await axiosInstance({
        url: '/register',
        method: 'POST',
        // eslint-disable-next-line camelcase
        data: { ...formReg, shop_id: 1 },
      })
      return response.data
    } catch (e) {
      throw ERRORS.ERROR_REGISTRATION
    }
  }
}
