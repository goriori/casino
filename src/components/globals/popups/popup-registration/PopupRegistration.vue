<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import RegistrationModule from '@/components/modules/registration/RegistrationModule.vue'
</script>

<template>
  <PopupBase>
    <template #window>
      <RegistrationModule />
    </template>
  </PopupBase>
</template>

<style scoped lang="scss"></style>