<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import RouletteModule from '@/components/modules/roulette/RouletteModule.vue'

const emits = defineEmits(['close'])
</script>

<template>
  <PopupBase>
    <template #window>
      <RouletteModule @close="emits('close')" isPopup />
    </template>
  </PopupBase>
</template>

<style scoped lang="scss"></style>
