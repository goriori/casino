import { axiosInstance } from '@/utils/axios/axios'
import apiConfig from '@/API/api.config.js'

export default class RouletteService {
  static async getPrizes() {
    try {
      const response = await axiosInstance({
        url: '/roulette',
        method: 'GET',
      })
      return response.data
    } catch (e) {
      throw e
    }
  }

  static async spinRoulette() {
    try {
      apiConfig.getToken()
      const response = await axiosInstance({
        url: '/roulette/spin',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${apiConfig.token}`,
        },
      })
      return response.data
    } catch (e) {
      throw e
    }
  }
}
