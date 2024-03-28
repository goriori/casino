<script setup>
import { defineAsyncComponent, onMounted } from 'vue'
import { fetchEntityData } from '@/pages/main/Main.events.js'
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'

const ProvidersModule = defineAsyncComponent(() =>
  import('@/components/modules/providers/ProvidersModule.vue')
)
const PopularGameModule = defineAsyncComponent(() =>
  import('@/components/modules/popular/PopularGameModule.vue')
)
onMounted(async () => {
  await fetchEntityData()
})
</script>
<template>
  <div class="page">
    <Header />
    <div class="page-modules">
      <div class="modules-providers">
        <ProvidersModule />
      </div>
      <div class="modules-popular">
        <PopularGameModule />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
@import 'Main';
</style>
