<script setup>
import { onMounted } from 'vue'
import { useProviderStore } from '@/store/providers/providerStore.js'
import ProviderButton from '@/components/ui/buttons/provider/ProviderButton.vue'
import ProviderMainIcon from '@/components/ui/icons/provider/ProviderMainIcon.vue'
import ComposeSpinner from '@/components/ui/spiners/Compose/ComposeSpiner.vue'

const providerStore = useProviderStore()
onMounted(async () => {
  await providerStore.getProviders()
})
</script>

<template>
  <div class="providers-module">
    <Transition name="fade">
      <div class="providers-loader" v-if="providerStore.providers.length === 0">
        <ComposeSpinner />
      </div>
    </Transition>
    <div class="providers-module-title">
      <ProviderMainIcon />
      <h3>Провайдеры</h3>
    </div>
    <Transition name="fade">
      <div
        class="providers-module-items"
        v-if="providerStore.providers.length > 0"
      >
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