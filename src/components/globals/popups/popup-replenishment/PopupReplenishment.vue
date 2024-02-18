<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import ReplenishmentModule from '@/components/modules/replenishment/ReplenishmentModule.vue'

const emits = defineEmits(['close'])
</script>

<template>
  <PopupBase>
    <template #window>
      <ReplenishmentModule
        @close="emits('close')"
        :setting="{
          targetScreen: 'replenishment',
        }"
      />
    </template>
  </PopupBase>
</template>

<style scoped lang="scss"></style>
