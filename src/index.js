import './global.css'
import React from 'react'
import {Router} from '@reach/router'
import Component from '@reach/component-component'
import ReactDOM from 'react-dom'
import LoginForm from './login-form'
import App from './app'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Component initialState={{user: null}}>
    {({state, setState}) => (
      <Router>
        <App path="/" user={state.user} />
        <LoginForm
          path="/register"
          endpoint="register"
          onSuccess={user => setState({user})}
        />
        <LoginForm
          path="/login"
          endpoint="login"
          onSuccess={user => setState({user})}
        />
      </Router>
    )}
  </Component>,
  document.getElementById('app'),
)
