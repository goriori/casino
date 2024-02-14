import {
  filters,
  searchValue,
} from '@/components/modules/popular/filters/PopularGameFilters.options.js'

export const clearSearch = () => {
  searchValue.value = ''
}

export const onActiveSelect = (filterActive) => {
  const filterNames = Object.keys(filters.value)
  filterNames.forEach((filter) =>
    filter === filterActive
      ? (filters.value[filter].active = !filters.value[filter].active)
      : (filters.value[filter].active = false)
  )
}
