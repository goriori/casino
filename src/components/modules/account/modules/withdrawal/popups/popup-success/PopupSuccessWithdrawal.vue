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
            <h3>
              Ваша заявка на вывод успешно создана и находиться на обработке.
              Пожалуйста ожидайте !
            </h3>
            <BaseButton color="primary" outline @click="emits('close')">
              <p>Хорошо</p>
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
