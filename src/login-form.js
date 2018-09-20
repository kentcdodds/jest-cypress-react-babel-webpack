import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {navigate} from '@reach/router'

class LoginForm extends Component {
  static propTypes = {
    onSuccess: PropTypes.func.isRequired,
    endpoint: PropTypes.string.isRequired,
  }
  handleSubmit = e => {
    e.preventDefault()
    const {
      username: {value: username},
      password: {value: password},
    } = e.target.elements
    window
      .fetch(`http://localhost:3000/${this.props.endpoint}`, {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(r => r.json())
      .then(user => {
        window.localStorage.setItem('token', user.token)
        this.props.onSuccess(user)
        navigate('/')
      })
  }
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        css={{
          fontSize: 20,
          width: 300,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <label htmlFor="username-input">Username</label>
          <input
            css={{marginLeft: 10, fontSize: 20}}
            id="username-input"
            name="username"
          />
        </div>
        <div css={{marginTop: 20, marginBottom: 20}}>
          <label htmlFor="password-input">Password</label>
          <input
            css={{marginLeft: 10, fontSize: 20}}
            id="password-input"
            name="password"
            type="password"
          />
        </div>

        <button
          type="submit"
          css={{
            fontSize: 18,
            alignSelf: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.15)',
            padding: 8,
            borderRadius: 2,
            ':focus': {
              backgroundColor: 'rgba(0,0,0,0.3)',
            },
          }}
        >
          Submit
        </button>
      </form>
    )
  }
}

export default LoginForm
