<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import SuccessIcon from '@/components/ui/icons/other/SuccessIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import { useStateStore } from '@/store/stateStore.js'

const stateStore = useStateStore()
</script>

<template>
  <PopupBase>
    <template #window>
      <div class="window">
        <div class="window-container">
          <div class="window-content">
            <SuccessIcon />
            <h3>{{ stateStore.globalPopupMessages.success.successText }}</h3>
            <BaseButton
              color="primary"
              outline
              @click="stateStore.globalPopupMessages.success.visibility = false"
            >
              <p>Хорошо</p>
            </BaseButton>
          </div>
        </div>
      </div>
    </template>
  </PopupBase>
</template>

<style scoped lang="scss">
.window {
  color: white;
  background-color: rgba(44, 44, 44, 1);
  border-radius: 26px;
  max-width: 500px;

  &-container {
    padding: 20px 38px;
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-align: center;
    line-height: normal;
  }
}
</style>
