import { axiosInstance } from '@/utils/axios/axios'
import apiConfig from '@/API/api.config.js'

export default class SettingService {
  static async getSettings() {
    try {
      const response = await axiosInstance({
        url: '/settings',
        method: 'GET',
      })
      return response.data
    } catch (e) {
      throw e
    }
  }

  static async getStatistics() {
    try {
      apiConfig.getToken()
      const response = await axiosInstance({
        url: '/statistic',
        headers: {
          Authorization: `Bearer ${apiConfig.token}`,
        },
        method: 'GET',
      })
      return response.data
    } catch (e) {
      throw e
    }
  }
}
