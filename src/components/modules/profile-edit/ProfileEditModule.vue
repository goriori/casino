<script setup>
import CloseIcon from '@/components/ui/icons/other/CloseIcon.vue'
import BaseInput from '@/components/ui/inputs/base/BaseInput.vue'
import BaseButton from '@/components/ui/buttons/base/BaseButton.vue'
import { ref } from 'vue'
import { useSessionStore } from '@/store/session/sessionStore.js'
import { useStateStore } from '@/store/stateStore.js'
import { useRegular } from '@/utils/useRegular.js'
import { ERRORS } from '@/configs/errors.js'

const emits = defineEmits(['close'])
const sessionStore = useSessionStore()
const stateSession = useStateStore()
const { phoneTest } = useRegular()
console.log(sessionStore.session.profile)
const formUpdate = ref({
  first_name: sessionStore.session.profile?.first_name,
  last_name: sessionStore.session.profile?.last_name,
  birthday: sessionStore.session.profile?.birthday,
  phone: sessionStore.session.profile?.phone,
  address: sessionStore.session.profile?.address,
})

const validPhone = (phone) => phoneTest(phone)

const onValidForm = () => {
  return new Promise((resolve, reject) => {
    const isValidPhone = validPhone(formUpdate.value.phone)
    if (!isValidPhone) reject(ERRORS.ERROR_VALID_PHONE.TYPE)
    return resolve()
  })
}
const onSendForm = () => {
  onValidForm()
    .then(() => sessionStore.updateInfoAccount(formUpdate.value))
    .catch((e) => {
      if (e === ERRORS.ERROR_VALID_PHONE.TYPE) {
        stateSession.globalPopupMessages.error.show(
          ERRORS.ERROR_VALID_PHONE.MESSAGE
        )
      }
      if (e === ERRORS.ERROR_VALIDATION.TYPE) {
        stateSession.globalPopupMessages.error.show(
          ERRORS.ERROR_VALIDATION.MESSAGE
        )
      }
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
