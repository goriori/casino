import axios from 'axios'

const API = window.API
export const validTokenExpired = (status) => {
  if (status === 401) {
    sessionStorage.clear()
    return false
  }
  return true
}
export const axiosInstance = axios.create({
  baseURL: API + '/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  params: {
    shop_id: 1,
    key: 'pLaHFj1OsSNDNclDjRN03OHHq',
  },
})
