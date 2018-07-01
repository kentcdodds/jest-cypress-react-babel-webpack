import React from 'react'
import {render} from 'react-testing-library'
import loadable from 'react-loadable'
import Calculator from '../calculator'

test('renders', async () => {
  await loadable.preloadAll()
  render(<Calculator />)
})
