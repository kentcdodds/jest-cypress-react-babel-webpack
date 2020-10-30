import * as React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {navigate} from '@reach/router'

function LoginForm({onSuccess, endpoint}) {
  const [error, setError] = React.useState(null)
  const [formValues, setFormValues] = React.useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const {
      username: {value: username},
      password: {value: password},
    } = e.target.elements
    setFormValues({username, password})
  }

  React.useEffect(() => {
    if (!formValues) {
      return
    }
    axios({
      method: 'POST',
      url: `http://localhost:3000/${endpoint}`,
      data: formValues,
    }).then(
      ({data: {user}}) => {
        window.localStorage.setItem('token', user.token)
        onSuccess(user)
        navigate('/')
      },
      err => setError(err),
    )
  }, [endpoint, formValues, onSuccess])

  return (
    <form
      onSubmit={handleSubmit}
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
      {error ? <div>There was an error. Please try again.</div> : null}
    </form>
  )
}

LoginForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  endpoint: PropTypes.string.isRequired,
}

export default LoginForm
