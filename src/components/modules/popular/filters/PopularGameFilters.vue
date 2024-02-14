<script setup>
import SearchIcon from '@/components/ui/icons/other/SearchIcon.vue'
import BaseSelect from '@/components/ui/selects/base/BaseSelect.vue'
import {
  clearSearch,
  onActiveSelect,
} from '@/components/modules/popular/filters/PopularGameFilters.events.js'
import {
  filters,
  searchValue,
} from '@/components/modules/popular/filters/PopularGameFilters.options.js'
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
        :items="filters.providers.values"
        :active="filters.providers.active"
        @changeActive="onActiveSelect"
      />
    </div>
    <div class="filters-item search">
      <input placeholder="Поиск слотов" v-model="searchValue" />
      <SearchIcon @click="clearSearch" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.popular__game {
  &-filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 80px 0;
    gap: 30px;
    @media (max-width: $md3 + px) {
      flex-direction: column;
      gap: 30px;
    }

    .filters-item {
      display: flex;
      align-items: center;
      gap: 30px;
      width: 100%;
      max-width: 848px;
      @media (max-width: $md3 + px) {
        width: 100%;
        flex-direction: column;
      }
    }
  }
}

.filter {
  cursor: pointer;
  display: flex;
  gap: 50px;
  padding: 20px 28px;

  &-category {
  }

  &-title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-list {
    display: none;
  }

  &::after {
    content: '^';
  }
}

.search {
  border-bottom: 1px solid white;
  display: flex;
  justify-content: flex-start;
  flex: 0 1 543px;
  @media (max-width: $md3 + px) {
    flex-direction: row !important;
    flex: 0 1 60px;
  }
}

input {
  width: 100%;
  background: none;
  padding: 16px 0;
  color: $white;
  font-size: 20px;
}
</style>
