// import CookCup from '../src/core'
const CookCup = require('../src/core')

it('Basic test.', () => {
  const elements = new CookCup('div')
  expect(elements).not.toBeNull()
})