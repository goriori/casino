import { useProviderStore } from '@/store/providers/providerStore.js'
import { isLoadContent } from '@/components/modules/providers/ProvidersModule.options.js'

const providerStore = useProviderStore()

const changeLoadContent = () =>
  setTimeout(() => (isLoadContent.value = !isLoadContent.value), 1500)
export const loadModule = async () => {
  providerStore.getProviders().then(changeLoadContent)
}
