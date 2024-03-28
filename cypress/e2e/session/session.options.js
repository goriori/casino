import {
  getElement, hasUrlPath,
  setSettingViewport,
  waitPage
} from '../utils/base.utils.js'
import { onBaseAuthorization } from './session.events.js'

const TIME_WAIT = 2000
export const BASE_URL = 'http://localhost:5173'

export const PAGES = {
  AUTHORIZATION: '/authorization',
  REGISTRATION: '/registration',
}

export const USERS = [
  {
    login: 'user',
    password: 'foo',
  },
]

export const USER_FOR_REGISTRATION = [
  {
    login: 'dyrw@%!',
    password: 'qwerty123',
    confirm_password: 'qwerty123',
  },
  {
    login: 'dy123rw@%!',
    password: 'qwerty123',
    confirm_password: 'qwerty123',
  },
  {
    login: '1sfew@%',
    password: 'qwe',
    confirm_password: 'qwe',
  },
]

export const tests = [
  {
    name: 'sign in accounts',
    launch: true,
    settings: () => setSettingViewport('DESKTOP', 'FULL_HD'),
    valid: function () {
      onBaseAuthorization()
      waitPage(TIME_WAIT)
      const balanceModule = getElement('.balance')
      balanceModule.click()
      const popupNavigation = getElement('.popup-navigation-authorized')
      popupNavigation.children().should('have.length', 5)
    },
  },
  {
    name: 'log out accounts',
    launch: true,
    settings: () => setSettingViewport('DESKTOP', 'FULL_HD'),
    valid: function () {
      onBaseAuthorization()
      const balanceModule = getElement('.balance')
      balanceModule.click()
      const popupNavigation = getElement('.popup-navigation-authorized')
      popupNavigation.find('.navigation-item').eq(4).click()
      waitPage(TIME_WAIT)
      getElement('.balance').click()
      getElement('.popup-navigation-no_authorized')
        .children()
        .should('have.length', 2)
    },
  },
  {
    name: 'no valid data send sing in',
    launch: true,
    settings: () => setSettingViewport('DESKTOP', 'FULL_HD'),
    valid: function () {
      const loginInput = getElement('#auth-login')
      const passwordInput = getElement('#auth-password')
      const buttonForm = getElement('.authorization-form-send')
      loginInput.type('asdoiw@@$431`')
      passwordInput.type(USERS[0].password)
      buttonForm.click()
      getElement('.window')
    },
  },
  {
    name: 'success redirect to registration page',
    launch: true,
    settings: () => setSettingViewport('DESKTOP', 'FULL_HD'),
    valid: function () {
      const registrationContainer = getElement(
        '.authorization-registration-info'
      )
      registrationContainer.find('span').click()
      hasUrlPath('/registration')
    },
  },
  {
    name: 'no valid data send sing up',
    launch: true,
    settings: () => setSettingViewport('DESKTOP', 'FULL_HD'),
    valid: function () {
      const registrationContainer = getElement(
        '.authorization-registration-info'
      )
      registrationContainer.find('span').click()
      const loginInput = getElement('#reg-login')
      const passwordInput = getElement('#reg-password')
      const passwordConfirmInput = getElement('#reg-confirm-password')
      loginInput.type(' sdsss')
      passwordInput.type('awdwawdasssda')
      passwordConfirmInput.type('asc,xzc,zxc.mzxc.,xzc')
      const buttonForm = getElement('.authorization-form-send')
      buttonForm.click()
      getElement('.window')
    },
  },
]
