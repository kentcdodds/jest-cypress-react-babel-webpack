import React from 'react'
import PropTypes from 'prop-types'
import {ThemeProvider} from 'emotion-theming'
import {Link} from '@reach/router'
import * as themes from './themes'

const Calculator = React.lazy(() => import('./calculator'))

function App({user, logout}) {
  const [theme, setTheme] = React.useState('dark')
  const handleThemeChange = ({target: {value}}) => setTheme(value)
  return (
    <ThemeProvider theme={themes[theme]}>
      <React.Suspense
        fallback={
          <div
            css={{
              width: '320px',
              height: '520px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            loading...
          </div>
        }
      >
        <Calculator />
      </React.Suspense>
      <div style={{marginTop: 30}}>
        <fieldset>
          <legend>Theme</legend>
          <label>
            <input
              onChange={handleThemeChange}
              checked={theme === 'light'}
              type="radio"
              name="theme"
              value="light"
            />{' '}
            light
          </label>
          <label>
            <input
              onChange={handleThemeChange}
              checked={theme === 'dark'}
              type="radio"
              name="theme"
              value="dark"
            />{' '}
            dark
          </label>
        </fieldset>
      </div>
      <div
        css={{
          display: 'flex',
          marginTop: 10,
          marginBottom: 10,
          justifyContent: 'space-around',
        }}
      >
        {user ? (
          <>
            <div data-testid="username-display">{user.username}</div>
            <button type="button" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
      <div style={{marginTop: 30, textAlign: 'center'}}>
        Calculator component{' '}
        <a href="https://codepen.io/mjijackson/pen/xOzyGX">created</a>
        {' by '}
        <br />
        <a href="https://twitter.com/mjackson">Michael Jackson</a> of{' '}
        <a href="https://reacttraining.com/">React Training</a>
      </div>
    </ThemeProvider>
  )
}

App.propTypes = {
  user: PropTypes.any,
  logout: PropTypes.func,
}

export default App

/* eslint import/namespace:0 */
