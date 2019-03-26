import React from 'react'
import {render as rtlRender} from 'react-testing-library'
import {ThemeProvider} from 'emotion-theming'
import * as themes from '../src/themes'

function render(ui, {theme = themes.dark, ...options} = {}) {
  const Wrapper = props => <ThemeProvider theme={theme} {...props} />
  return rtlRender(ui, {wrapper: Wrapper, ...options})
}

export * from 'react-testing-library'
// override the built-in render with our own
export {render}
