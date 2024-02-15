import { onMounted } from 'vue'
import { useProviderStore } from '@/store/providers/providerStore.js'
import { useGameStore } from '@/store/games/gameStore.js'

// eslint-disable-next-line func-style
export function useMethods(filters, searchValue) {
  const clearSearch = () => {
    searchValue.value = ''
  }
  const handlerFilter = async (categoryPosition) => {
    const gameStore = useGameStore()
    await gameStore.filterGames(categoryPosition)
  }

  const onActiveSelect = (filterActive) => {
    const filterNames = Object.keys(filters.value)
    filterNames.forEach((filter) =>
      filter === filterActive
        ? (filters.value[filter].active = !filters.value[filter].active)
        : (filters.value[filter].active = false)
    )
  }

  onMounted(async () => {
    const providerStore = useProviderStore()
    await Promise.all([providerStore.getProviders()])
  })
  return {
    clearSearch,
    onActiveSelect,
    handlerFilter,
  }
}
