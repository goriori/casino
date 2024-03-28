import { axiosInstance, validTokenExpired } from '@/utils/axios/axios'

export default class ProviderService {
  static async getProviders() {
    try {

      const response = await axiosInstance({
        url: '/category',
        validateStatus: validTokenExpired,
        method: 'GET',
      })
      return response.data
    } catch (e) {
      throw e
    }
  }
}
