import { axiosInstance } from '@/utils/axios/axios'
import apiConfig from '@/API/api.config.js'

export default class CaseService {
  static async fetchCases() {
    try {
      const response = await axiosInstance({
        url: '/cases',
        method: 'GET',
      })
      return response.data
    } catch (e) {
      throw e
    }
  }

  static async fetchOpenCase(caseId) {
    try {
      apiConfig.getToken()
      const response = await axiosInstance({
        url: `/cases/${caseId}`,
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
