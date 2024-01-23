<script setup>
import { onMounted } from 'vue'
import { fetchEntityData } from '@/pages/main/Main.events.js'
import Header from '@/components/globals/header/Header.vue'
import Footer from '@/components/globals/footer/Footer.vue'
import ProvidersModule from '@/components/modules/providers/ProvidersModule.vue'
import PopularGameModule from '@/components/modules/popular/PopularGameModule.vue'

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
.page {
  color: #fff;

  &-modules {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 48px 28px;
  }
}

.modules {
}
</style>
