<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import ErrorIcon from '@/components/ui/icons/other/ErrorIcon.vue'

const emits = defineEmits(['close'])
const message = window.MESSAGES_POPUP.CONFIRM_TRANSLATION.ERROR_SERVER
</script>

<template>
  <PopupBase>
    <template #window>
      <div class="window">
        <div class="window-container">
          <div class="window-content">
            <ErrorIcon />
            <h3>{{ message}}</h3>
            <BaseButton color="primary" outline @click="emits('close')">
              <p>Закрыть</p>
            </BaseButton>
          </div>
        </div>
      </div>
    </template>
  </PopupBase>
</template>

<style scoped lang="scss">
@import '../PopupConfirmTranslation';
</style>