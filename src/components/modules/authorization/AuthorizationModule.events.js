import {
  pswrdHidden,
  formAuth,
} from '@/components/modules/authorization/AuthorizationModule.options.js'
import { useSessionStore } from '@/store/session/sessionStore.js'

const sessionStore = useSessionStore()

export const onChangeHiddenPassword = () =>
  (pswrdHidden.value = !pswrdHidden.value)

export const onAuthorization = async () => await sessionStore.authorization(formAuth.value)