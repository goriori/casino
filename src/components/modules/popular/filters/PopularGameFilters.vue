<script setup>
import { useMethods } from '@/components/modules/popular/filters/PopularGameFilters.events.js'
import { useData } from '@/components/modules/popular/filters/PopularGameFilters.options.js'
import { useProviderStore } from '@/store/providers/providerStore.js'
import SearchIcon from '@/components/ui/icons/other/SearchIcon.vue'
import BaseSelect from '@/components/ui/selects/base/BaseSelect.vue'
import ListIcon from '@/components/ui/icons/popular/ListIcon.vue'
import ChangeIcon from '@/components/ui/icons/popular/ChangeIcon.vue'

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
        :icon="ListIcon"
        :items="filters.category.values"
        :active="filters.category.active"
        @changeActive="onActiveSelect"
      />
      <BaseSelect
        name="providers"
        v-if="providerStore.providers.length > 0"
        :icon="ChangeIcon"
        :items="providerStore.providers"
        :active="filters.providers.active"
        :handler="handlerFilter"
        default-target-element="Ka-Gaming"
        @changeActive="onActiveSelect"
      />
    </div>
    <div class="filters-item search">
      <input
        placeholder="Поиск слотов"
        name="search"
        v-model="searchValue"
        @keyup.enter="onSearch"
      />
      <SearchIcon @click="onSearch" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'PopularGameFilters';
</style>
