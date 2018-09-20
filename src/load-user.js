import React from 'react'
import PropTypes from 'prop-types'
import Component from '@reach/component-component'

function LoadUser({user, setUser, children}) {
  const token = window.localStorage.getItem('token')
  if (user || !token) {
    return children
  }
  return (
    <Component
      didMount={() => {
        window
          .fetch('http://localhost:3000/me', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          })
          .then(r => r.json())
          .then(setUser, () => {
            window.localStorage.removeItem('token')
            setUser(null)
          })
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
