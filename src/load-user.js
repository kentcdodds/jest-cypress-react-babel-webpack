import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Component from '@reach/component-component'

function LoadUser({user, setUser, children}) {
  const token = window.localStorage.getItem('token')
  if (user || !token) {
    return children
  }
  return (
    <Component
      didMount={() => {
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
      }}
    />
  )
}
LoadUser.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func.isRequired,
  children: PropTypes.element,
}

export default LoadUser
