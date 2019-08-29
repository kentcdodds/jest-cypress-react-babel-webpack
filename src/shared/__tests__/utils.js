import {getFormattedValue} from '../utils'

test('formats the value', () => {
  expect(getFormattedValue('1234.0')).toBe('1,234.0')
  expect(getFormattedValue('.10')).toBe('0.10')
})
