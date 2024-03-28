import { axiosInstance, validTokenExpired } from '@/utils/axios/axios'
import apiConfig from '@/API/api.config.js'

export default class GamesService {
  static async getGames() {
    try {
      const response = await axiosInstance({
        url: '/games',
        validateStatus: validTokenExpired,
        method: 'GET',
      })
      return response.data
    } catch (e) {
      throw e
    }
  }
}
