<script setup>
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import ProviderIcon from '@/components/ui/icons/provider/ProviderIcon.vue'
import { useGameStore } from '@/store/games/gameStore.js'
import { ref } from 'vue'

const props = defineProps({
  provider: {
    type: Object,
    default: {},
  },
})

const gameStore = useGameStore()

const onClickBtn = () => {
  targetProviderGameCategory()
}
const targetProviderGameCategory = () => {
  gameStore.filterGames(props.provider?.position)
}
</script>

<template>
  <div class="provider">
    <BaseButton
      rounded="small"
      color="provider-primary"
      size="big"
      class="provider-button"
      shadow="none"
      @click="onClickBtn"
    >
      <div class="provider-content">
<!--        <ProviderIcon />-->
        {{provider.title}}
      </div>
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
@import 'ProviderButton';
</style>
