<script setup>
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'
import BaseInput from '@/components/ui/inputs/base/BaseInput.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
const emits = defineEmits(['close'])
</script>

<template>
  <div class="profile_edit">
    <div class="profile_edit-head">
      <CloseIcon @click="emits('close')" />
    </div>
    <div class="profile_edit-form form">
      <h2>Реадктирование информации</h2>
      <div class="form-field">
        <BaseInput placeholder="Имя" />
      </div>
      <div class="form-field">
        <BaseInput placeholder="Фамилия" />
      </div>
      <BaseButton color="primary" id="btn-edit">
        <p>Сохранить</p>
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
#btn-edit {
  p {
    color: #fff;
  }
}

.profile_edit {
  max-width: 612px;
  width: 100%;
  border-radius: 26px;
  background: #2c2c2c;
  padding: 32px 106px;

  &-head {
    display: flex;
    justify-content: end;
  }

  &-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;

    h2 {
      text-align: center;
      color: #fff;
      line-height: 120%;
      margin:0 0 10px 0;
    }
  }
}

.form {
  &-field {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
