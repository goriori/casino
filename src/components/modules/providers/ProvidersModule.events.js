import { useProviderStore } from '@/store/providers/providerStore.js'
import { isLoadContent } from '@/components/modules/providers/ProvidersModule.options.js'




const providerStore = useProviderStore()
export const loadModule = async () => {
  providerStore.getProviders().then(changeLoadContent)
}
const changeLoadContent = () => {
  if (providerStore.providers.length > 0)  setTimeout(() => (isLoadContent.value = true), 1500)
  else isLoadContent.value = false
}
