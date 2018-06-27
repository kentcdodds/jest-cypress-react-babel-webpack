import React from 'react'
import {render} from 'react-testing-library'
import Calculator from '../calculator'

test('mounts', () => {
  render(<Calculator />)
})
