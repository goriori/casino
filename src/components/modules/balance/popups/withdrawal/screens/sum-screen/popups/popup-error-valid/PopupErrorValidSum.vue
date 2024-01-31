<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import ErrorIcon from '@/components/ui/icons/other/ErrorIcon.vue'

const emits = defineEmits(['close'])
const message = window.MESSAGES_POPUP.SUM_SCREEN.ERROR_VALIDATION
const minCount = window.MESSAGES_POPUP.SUM_SCREEN.MIN_COUNT_PAY
</script>

<template>
  <PopupBase>
    <template #window>
      <div class="window">
        <div class="window-container">
          <div class="window-content">
            <ErrorIcon />
            <h3>
              {{ message }}<span>{{ minCount }}</span> ₽ !
            </h3>
            <BaseButton color="primary" outline @click="emits('close')">
              <p>Повторить</p>
            </BaseButton>
          </div>
        </div>
      </div>
    </template>
  </PopupBase>
</template>

<style scoped lang="scss">
@import '../PopupSum';

span {
  color: red;
}
</style>
