<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import RouletteModule from '@/components/modules/roulette/RouletteModule.vue'

const emits = defineEmits(['close'])
</script>

<template>
  <PopupBase size="full">
    <template #window>
      <RouletteModule @close="emits('close')" isPopup class="roulette" />
    </template>
  </PopupBase>
</template>

<style scoped lang="scss">

</style>
