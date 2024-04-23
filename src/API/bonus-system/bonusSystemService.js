import { axiosInstance } from '@/utils/axios/axios'
import apiConfig from '@/API/api.config.js'

export default class BonusSystemService {
  static async exchangeCoins(coins) {
    try {
      apiConfig.getToken()
      const response = await axiosInstance({
        url: '/exchangeCoins',
        headers: {
          Authorization: `Bearer ${apiConfig.token}`,
        },
        method: 'POST',
        data: { coins },
      })
      return response.data
    } catch (e) {
      throw e
    }
  }

  static async exchangeBonus() {
    try {
      apiConfig.getToken()
      const response = await axiosInstance({
        url: '/exchangeBonus',
        headers: {
          Authorization: `Bearer ${apiConfig.token}`,
        },
        method: 'POST',
      })
      return response.data
    } catch (e) {
      throw e
    }
  }
}
