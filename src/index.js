import './global.css'
import React from 'react'
import {Router} from '@reach/router'
import Component from '@reach/component-component'
import ReactDOM from 'react-dom'
import LoginForm from './login-form'
import LoadUser from './load-user'
import App from './app'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Component initialState={{}}>
    {({state, setState}) => (
      <LoadUser
        user={state.user}
        setUser={loadedUser => setState({user: loadedUser})}
      >
        <Router>
          <App
            path="/"
            user={state.user}
            logout={() => {
              window.localStorage.removeItem('token')
              setState({user: null})
            }}
          />
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
      </LoadUser>
    )}
  </Component>,
  document.getElementById('app'),
)
