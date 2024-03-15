import { axiosInstance } from '@/utils/axios/axios'

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

  static async spinRoulette(caseId) {
    try {
      const response = await axiosInstance({
        url: '/roulette/spin',
        method: 'GET',
      })
      return response.data
    } catch (e) {
      throw e
    }
  }
}
