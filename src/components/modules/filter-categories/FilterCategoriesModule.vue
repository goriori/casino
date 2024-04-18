<script setup>
import { useProviderStore } from '@/store/providers/providerStore.js'
import { onBeforeMount, ref } from 'vue'
import ChangeIcon from '@/components/ui/icons/popular/ChangeIcon.vue'
import BaseSelect from '@/components/ui/selects/base/BaseSelect.vue'

const providersStore = useProviderStore()
const targetSelect = ref()
const categories = ref([])

const initCategories = () => {
  categories.value.push(
    ...providersStore.providers.map((provider) => provider.title)
  )
}

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
