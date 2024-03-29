<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import CaseOpenModule from '@/components/modules/case-open/CaseOpenModule.vue'
</script>

<template>
  <PopupBase size="full">
    <template #window>
      <CaseOpenModule
      price="7 000"/>
    </template>
  </PopupBase>
</template>

<style>
@import 'PopupCaseOpen.scss';
</style>
