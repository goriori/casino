<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import ErrorIcon from '@/components/ui/icons/other/ErrorIcon.vue'

const emits = defineEmits(['close'])
</script>

<template>
  <PopupBase>
    <template #window>
      <div class="window">
        <div class="window-container">
          <div class="window-content">
            <ErrorIcon />
            <h3>
              Во время вывода средств произошла ошибка, пожалуйста попробуйте
              позже!
            </h3>
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
@import '../PopupWithdrawal';
</style>