import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {render} from 'react-testing-library'
import AutoScalingText from '../auto-scaling-text'

test('renders', () => {
  render(<AutoScalingText />)
})
