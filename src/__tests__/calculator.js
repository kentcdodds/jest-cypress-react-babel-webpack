import React from 'react'
import {render} from 'calculator-test-utils'
import Calculator from '../calculator'

test('renders', async () => {
  const {findByTestId} = render(<Calculator />)
  await findByTestId('total')
})
