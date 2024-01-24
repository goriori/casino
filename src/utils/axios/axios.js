import axios from 'axios'

const API = window.API

export const validTokenExpired = (status) => {
  if (status === 401) {
    sessionStorage.clear()
    return true
  }
  return true
}
export const axiosInstance = axios.create({
  baseURL: API + '/api',
})
