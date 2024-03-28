<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import ConclusionModule from '@/components/modules/conclusion/ConclusionModule.vue'
</script>

<template>
  <PopupBase isPopup>
    <template #window>
      <ConclusionModule isPopup />
    </template>
  </PopupBase>
</template>

<style scoped lang="scss"></style>
