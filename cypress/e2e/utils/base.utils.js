import { DEVICES } from '../e2e.config.js'

export const goVisit = (url) => cy.visit(url)
export const getElement = (selector) => cy.get(selector)
export const waitPage = (time) => cy.wait(time)
export const hasUrlPath = (path) => cy.url().should('include', path)
export const setSettingViewport = (DEVICE, ENTITY) => {
  const ENTITY_DEVICE = DEVICES[DEVICE][ENTITY]
  cy.viewport(ENTITY_DEVICE.WIDTH, ENTITY_DEVICE.HEIGHT)
}