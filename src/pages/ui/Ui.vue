<script setup>
import { ref } from 'vue'
import BaseSelect from '@/components/ui/selects/base/BaseSelect.vue'
import ChangeIcon from '@/components/ui/icons/popular/ChangeIcon.vue'
import Search from '@/components/ui/search/base/Search.vue'

const targetSelectOne = ref('')
const targetSelectTwo = ref('')
const targetSelectThree = ref('')
const titles = ['Хот', 'Ретро', 'Поплуряные']
</script>

<template>
  <div class="page">
    <div class="page-container container">
      <h1>Ui kit project:</h1>
      <section class="list">
        <h3>Selects:</h3>
        <BaseSelect
          v-model="targetSelectOne"
          :titles="titles"
          :icon="ChangeIcon"
        />
        <BaseSelect
          v-model="targetSelectTwo"
          :titles="titles"
          :icon="ChangeIcon"
        />
        <BaseSelect
          v-model="targetSelectThree"
          :titles="titles"
          :icon="ChangeIcon"
        />
      </section>
      <section class="list">
        <h3>Search:</h3>
        <Search />
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  color: white;
  height: 100vh;
  &-container {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}

.list {
  display: flex;
  align-items: center;
  gap: 50px;
}
</style>
