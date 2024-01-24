import { isEditBirthday, isEditFullName } from '@/components/modules/account/modules/profile/ProfileModule.options.js'

export const onChangeStateEditFullName = () => {
  isEditFullName.value = !isEditFullName.value
}

export const onChangeStateEditBirthday = () => {
  isEditBirthday.value = !isEditBirthday.value
}