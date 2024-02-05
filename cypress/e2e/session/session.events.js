import { USERS } from './session.options.js'
import { getElement } from '../utils/base.utils.js'


export const onBaseAuthorization = () => {
  const loginInput = getElement('#auth-login')
  const passwordInput = getElement('#auth-password')
  const buttonForm = getElement('.authorization-form-send')
  loginInput.type(USERS[0].login)
  passwordInput.type(USERS[0].password)
  buttonForm.click()
}
