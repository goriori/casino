import { defineStore } from 'pinia'
import { ref } from 'vue'
import ProviderService from '@/API/providers/providerService.js'

export const useProviderStore = defineStore('providerStore', () => {
  const providers = ref({})
  const getProviders = async () => await ProviderService.getProviders()
  return { providers, getProviders }
})
