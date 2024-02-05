import { DEVICES } from '../e2e.config.js'
import { baseAuthorization, getElement, goVisit, waitPage } from './session.events.js'

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
    settings: function () {
      const fullHD = DEVICES.DESKTOP.FULL_HD
      cy.viewport(fullHD.WIDTH, fullHD.HEIGHT)
    },
    valid: function () {
      baseAuthorization()
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
    settings: function () {
      const fullHD = DEVICES.DESKTOP.FULL_HD
      cy.viewport(fullHD.WIDTH, fullHD.HEIGHT)
    },
    valid: function () {
      baseAuthorization()
      const balanceModule = getElement('.balance')
      balanceModule.click()
      const popupNavigation = getElement('.popup-navigation-authorized')
      popupNavigation.find('.navigation-item').eq(4).click()
      waitPage(TIME_WAIT)
      getElement('.balance').click()
      getElement('.popup-navigation-no_authorized').children().should('have.length', 2)
    },
  },
]
