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
              Минимальная сумма для пополнения составляет <span>300</span> ₽ !
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
