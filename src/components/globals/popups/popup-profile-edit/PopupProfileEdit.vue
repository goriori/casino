<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import ProfileEditModule from '@/components/modules/profile-edit/ProfileEditModule.vue'
const emits = defineEmits(['close'])
</script>

<template>
  <PopupBase>
    <template #window>
      <ProfileEditModule @close="emits('close')" />
    </template>
  </PopupBase>
</template>

<style scoped lang="scss"></style>