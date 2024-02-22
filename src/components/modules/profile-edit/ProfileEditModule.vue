<script setup>
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'
import BaseInput from '@/components/ui/inputs/base/BaseInput.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import { ref } from 'vue'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { useStateStore } from '@/store/stateStore.js'

const emits = defineEmits(['close'])
const sessionStore = useSessionStore()
const stateSession = useStateStore()
const formUpdate = ref({
  first_name: sessionStore.profile?.first_name,
  last_name: sessionStore.profile?.last_name,
  birthday: sessionStore.profile?.birthday,
  phone: sessionStore.profile?.phone,
  address: sessionStore.profile?.address,
})

const onSendForm = async () => {
  await sessionStore.updateInfoAccount(formUpdate).catch(() => {
    stateSession.globalPopupMessages.errorServer = true
  })
}
</script>

<template>
  <div class="profile_edit">
    <div class="profile_edit-head">
      <CloseIcon @click="emits('close')" />
    </div>
    <div class="profile_edit-form form">
      <h2>Реадктирование информации</h2>
      <div class="form-field">
        <BaseInput
          placeholder="Имя"
          type="text"
          v-model="formUpdate.first_name"
        />
      </div>
      <div class="form-field">
        <BaseInput
          placeholder="Фамилия"
          type="text"
          v-model="formUpdate.last_name"
        />
      </div>
      <div class="form-field">
        <BaseInput
          placeholder="Дата рождения"
          type="date"
          v-model="formUpdate.birthday"
        />
      </div>
      <div class="form-field">
        <BaseInput
          placeholder="Телефон"
          type="tel"
          v-model="formUpdate.phone"
        />
      </div>
      <div class="form-field">
        <BaseInput
          placeholder="Аддресс"
          type="text"
          v-model="formUpdate.address"
        />
      </div>
      <BaseButton color="primary" id="btn-edit" @click="onSendForm">
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
      margin: 0 0 10px 0;
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
