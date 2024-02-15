<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import AuthorizationModule from '@/components/modules/authorization/AuthorizationModule.vue'
</script>

<template>
  <PopupBase>
    <template #window>
      <AuthorizationModule />
    </template>
  </PopupBase>
</template>

<style scoped lang="scss"></style>