import { defineStore } from 'pinia'
import { ref } from 'vue'
import ProviderService from '@/API/providers/providerService.js'
import { da } from 'date-fns/locale'

export const useProviderStore = defineStore('providerStore', () => {
  const providers = ref([])
  const getProviders = async () => {
    const { data } = await ProviderService.getProviders()
    providers.value = [...data]
  }
  return { providers, getProviders }
})
