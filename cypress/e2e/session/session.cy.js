import { BASE_URL, PAGES, tests } from './session.options.js'
import { goVisit } from './session.events.js'

describe('Authorization', () => {
  beforeEach(() => {
    goVisit(BASE_URL + PAGES.AUTHORIZATION)
  })
  for (let i = 0; i < tests.length; i++) {
    tests[i].launch
      ? it(tests[i].name, () => {
          tests[i].settings()
          tests[i].valid()
        })
      : false
  }
})
