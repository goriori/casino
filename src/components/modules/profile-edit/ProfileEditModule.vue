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
console.log(sessionStore.session.profile)
const formUpdate = ref({
  first_name: sessionStore.session.profile?.first_name,
  last_name: sessionStore.session.profile?.last_name,
  birthday: sessionStore.session.profile?.birthday,
  phone: sessionStore.session.profile?.phone,
  address: sessionStore.session.profile?.address,
})

const onSendForm = async () => {
  await sessionStore
    .updateInfoAccount(formUpdate.value)
    .catch(() => {
      stateSession.globalPopupMessages.errorServer = true
    })
    .finally(async () => {
      await sessionStore.getInfoSession()
      stateSession.globalPopupsModules.profileEdit.visibility = false
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
      <BaseButton color="primary" id="btn-edit" @click="onSendForm">
        <p>Сохранить</p>
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'ProfileEditModule';
</style>
