<script setup>
import Search from '@/components/ui/search/base/Search.vue'
import { ref } from 'vue'

const search = ref('')
const onSearch = () => {
  console.log('search')
}
</script>

<template>
  <Search v-model="search" @on-send="onSearch" />
</template>

<style scoped lang="scss"></style>
