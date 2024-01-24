import { axiosInstance, validTokenExpired } from '@/utils/axios/axios'
import apiConfig from '@/API/api.config.js'

const queryString = '?shop_id=1&key=pLaHFj1OsSNDNclDjRN03OHHq'
export default class ProviderService {
  static async getProviders() {
    try {
      const tokenAuth = apiConfig.token || sessionStorage.getItem('token')
      const response = await axiosInstance({
        url: '/category' + queryString,
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
}
