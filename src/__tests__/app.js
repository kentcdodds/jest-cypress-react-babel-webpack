import React from 'react'
import {render} from 'calculator-test-utils'
import App from '../app'

test('renders', async () => {
  const {findByTestId} = render(<App />)
  await findByTestId('total')
})
