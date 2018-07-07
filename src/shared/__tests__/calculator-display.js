import React from 'react'
import {render} from 'calculator-test-utils'
import CalculatorDisplay from '../calculator-display'

test('renders', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  expect(container.firstChild).toMatchSnapshot()
})
