<script setup>
import { useProviderStore } from '@/store/providers/providerStore.js'
import { onBeforeMount, ref, watch } from 'vue'
import { useGameStore } from '@/store/games/gameStore.js'
import ChangeIcon from '@/components/ui/icons/popular/ChangeIcon.vue'
import BaseSelect from '@/components/ui/selects/base/BaseSelect.vue'

const providersStore = useProviderStore()
const gameStore = useGameStore()
const targetSelect = ref()
const categories = ref([])

const initCategories = () => {
  categories.value.push(
    ...providersStore.providers.map((provider) => provider.title)
  )
}

watch(targetSelect, (newValue, oldValue) => {
  if (newValue === 'Не выбрано') return gameStore.resetFilteredGames()
  const category = providersStore.providers.find((category) => category.title === newValue)
  gameStore.filterGameCategory(category.id)
})
onBeforeMount(async () => {
  await providersStore.getProviders().then(initCategories)
})
</script>

<template>
  <BaseSelect
    v-model="targetSelect"
    :titles="categories"
    :icon="ChangeIcon"
    v-if="categories.length > 0"
  />
</template>

<style scoped lang="scss"></style>
