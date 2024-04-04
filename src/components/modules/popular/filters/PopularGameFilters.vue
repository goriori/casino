<script setup>
import { useMethods } from '@/components/modules/popular/filters/PopularGameFilters.events.js'
import { useData } from '@/components/modules/popular/filters/PopularGameFilters.options.js'
import { useProviderStore } from '@/store/providers/providerStore.js'
import SearchIcon from '@/components/ui/icons/other/SearchIcon.vue'
import BaseSelect from '@/components/ui/selects/base/BaseSelect.vue'

const providerStore = useProviderStore()

const { filters, searchValue } = useData()
const { onActiveSelect, onSearch, handlerFilter } = useMethods(
  filters,
  searchValue
)
</script>

<template>
  <div class="popular__game-filters">
    <div class="filters-item">
      <BaseSelect
        name="category"
        :items="filters.category.values"
        :active="filters.category.active"
        @changeActive="onActiveSelect"
      />
      <BaseSelect
        name="providers"
        v-if="providerStore.providers.length > 0"
        default-target-element="Ka-Gaming"
        :items="providerStore.providers"
        :active="filters.providers.active"
        :handler="handlerFilter"
        @changeActive="onActiveSelect"
      />
    </div>
    <div class="filters-item search">
      <input placeholder="Поиск слотов" name="search" v-model="searchValue" @keyup.enter="onSearch"  />
      <SearchIcon @click="onSearch" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'PopularGameFilters';
</style>
