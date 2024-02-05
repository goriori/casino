import { USERS } from './session.options.js'


export   const goVisit = (url) => cy.visit(url)

export const getElement = (selector) => cy.get(selector)
export const waitPage = (time) => cy.wait(time)

export const baseAuthorization = () => {
  const loginInput = getElement('#auth-login')
  const passwordInput = getElement('#auth-password')
  const buttonForm = getElement('.authorization-form-send')
  loginInput.type(USERS[0].login)
  passwordInput.type(USERS[0].password)
  buttonForm.click()
}

