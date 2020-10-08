import React from 'react'
import {render, screen, userEvent} from 'calculator-test-utils'
import Calculator from '../calculator'

test('the clear button switches from AC to C when there is an entry', () => {
  render(<Calculator />)
  const clearButton = screen.getByText('AC')

  userEvent.click(screen.getByText(/3/))
  expect(clearButton).toHaveTextContent('C')

  userEvent.click(clearButton)
  expect(clearButton).toHaveTextContent('AC')
})
