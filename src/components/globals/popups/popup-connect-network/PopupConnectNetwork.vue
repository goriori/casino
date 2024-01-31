<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import SuccessIcon from '@/components/ui/icons/other/SuccessIcon.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import { useOnlineStatus } from '@/utils/useOnlineStatus.js'
import ErrorIcon from '@/components/ui/icons/other/ErrorIcon.vue'

const emits = defineEmits(['close'])
const { isOnline } = useOnlineStatus()
const reloadPage = () => {
  window.location.reload()
}
</script>

<template>
  <PopupBase v-if="!isOnline">
    <template #window>
      <div class="window">
        <div class="window-container">
          <div class="window-content">
            <ErrorIcon />
            <h3>
              Подключение к сети отсутствует! Попробуйте зайти позже или
              перезагрузить страницу!
            </h3>
            <BaseButton color="primary" outline @click="reloadPage" >
              <p>Обновить</p>
            </BaseButton>
          </div>
        </div>
      </div>
    </template>
  </PopupBase>
</template>

<style scoped lang="scss">
@import 'PopupConnectNetwork';
</style>