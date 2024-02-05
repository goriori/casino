<script setup>
import { onMounted } from 'vue'
import { useProviderStore } from '@/store/providers/providerStore.js'
import ProviderButton from '@/components/ui/buttons/provider/ProviderButton.vue'
import ProviderMainIcon from '@/components/ui/icons/provider/ProviderMainIcon.vue'
import { loadModule } from '@/components/modules/providers/ProvidersModule.events.js'
import { isLoadContent } from '@/components/modules/providers/ProvidersModule.options.js'
import ContentLoader from '@/components/ui/content-loader/ContentLoader.vue'

const providerStore = useProviderStore()
onMounted(async () => {
  await loadModule()
})
</script>

<template>
  <div class="providers-module">
    <div class="providers-module-title">
      <ProviderMainIcon />
      <h3>Провайдеры</h3>
    </div>
    <div v-if="!isLoadContent">
      <ContentLoader>
        <rect width="200" height="20" />
      </ContentLoader>
    </div>
    <Transition name="fade">
      <div class="providers-module-items" v-if="isLoadContent">
        <ProviderButton
          v-for="provider in providerStore.providers"
          :provider="provider"
          key="provider"
          class="item"
        />
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@import 'ProvidersModule';
</style>
