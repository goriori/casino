import { BASE_URL, PAGES, tests } from './session.options.js'
import { goVisit } from '../utils/base.utils.js'


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
