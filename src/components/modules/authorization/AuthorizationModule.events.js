import {
  pswrdHidden,
  formAuth,
} from '@/components/modules/authorization/AuthorizationModule.options.js'
import { useSessionStore } from '@/store/session/sessionStore.js'

const sessionStore = useSessionStore()

export const onChangeHiddenPassword = () =>
  (pswrdHidden.value = !pswrdHidden.value)

const clearForm = () => {
  formAuth.value = {
    username: '',
    password: '',
  }
}
export const onAuthorization = async (router) => {
  try {
    await sessionStore.authorization(formAuth.value)
    clearForm()
    router.push('/main')
  } catch (e) {
    console.log(e)
    clearForm()
    router.push('/')
  }
}

export const onAuthTelegram = () => {
  const a = document.createElement('a')
  a.href = `https://t.me/momytest_bot`
  a.target = '_blank'
  a.click()

}
