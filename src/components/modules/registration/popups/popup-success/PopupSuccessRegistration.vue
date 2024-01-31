<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import SuccessIcon from '@/components/ui/icons/other/SuccessIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'

const emits = defineEmits(['close'])
</script>

<template>
  <PopupBase>
    <template #window>
      <div class="window">
        <div class="window-container">
          <div class="window-content">
            <SuccessIcon />
            <h3>Вы успешно вошли в аккаунт</h3>
            <BaseButton color="primary" outline @click="emits('close')">
              <p>Войти</p>
            </BaseButton>
          </div>
        </div>
      </div>
    </template>
  </PopupBase>
</template>

<style scoped lang="scss">
@import '../PopupRegistration';
</style>
