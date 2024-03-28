<script setup>
import PopupBase from '@/components/ui/popups/base/PopupBase.vue'
import ProfileStatusesModule from '@/components/modules/profile-statuses/ProfileStatusesModule.vue'
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'

const emits = defineEmits(['close'])
</script>

<template>
  <PopupBase>
    <template #window>
      <div class="popup-window">
        <div class="popup-window-header">
          <h1>Лестница статусов</h1>
          <CloseIcon @click="emits('close')" />
        </div>
        <p>
          Условия программы уровней очень простые. За каждые 150 ₽ ставок вы
          получаете 1 очко опыта. Чем больше опыта, тем выше ваш уровень и
          дороже награда.
        </p>
        <div>
          <ProfileStatusesModule />
        </div>
      </div>
    </template>
  </PopupBase>
</template>

<style scoped lang="scss">
.popup {
  &-window {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 36px;
    background: #1e1e1e;
    padding: 20px;
    color: #fff;
    max-width: 1200px;

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 32px;
      }
    }

    p {
      font-size: 20px;
      font-weight: 40;
    }
  }
}
</style>
