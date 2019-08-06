import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {ThemeProvider} from 'emotion-theming'
import * as themes from '../src/themes'

function render(ui, {theme = themes.dark, ...options} = {}) {
  const Wrapper = props => (
    <React.Suspense fallback="test-suspense-loading">
      <ThemeProvider theme={theme} {...props} />
    </React.Suspense>
  )
  return rtlRender(ui, {wrapper: Wrapper, ...options})
}

export * from '@testing-library/react'
// override the built-in render with our own
export {render}
