import './global.css'
import * as React from 'react'
import ReactDOM from 'react-dom'
import {Router} from '@reach/router'
import axios from 'axios'
import LoginForm from './login-form'
import App from './app'

if (module.hot) {
  module.hot.accept()
}

function FullApp() {
  const [user, setUser] = React.useState(null)

  const token = window.localStorage.getItem('token')

  React.useEffect(() => {
    if (user) {
      return
    }
    axios({
      method: 'GET',
      url: 'http://localhost:3000/me',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(
      r => setUser(r.data),
      () => {
        window.localStorage.removeItem('token')
        setUser(null)
      },
    )
  }, [token, user])

  if (!user && token) {
    return '...loading user'
  }

  return (
    <Router>
      <App
        path="/"
        user={user}
        logout={() => {
          window.localStorage.removeItem('token')
          setUser(null)
        }}
      />
      <LoginForm path="/register" endpoint="register" onSuccess={setUser} />
      <LoginForm path="/login" endpoint="login" onSuccess={setUser} />
    </Router>
  )
}

ReactDOM.render(<FullApp />, document.getElementById('app'))
