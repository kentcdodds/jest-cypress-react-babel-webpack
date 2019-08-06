import React from 'react'
import Calculator from './calculator'

function App() {
  return (
    <div>
      <Calculator />
      <div style={{marginTop: 30, textAlign: 'center'}}>
        Calculator component{' '}
        <a href="https://codepen.io/mjijackson/pen/xOzyGX">created</a>
        {' by '}
        <br />
        <a href="https://twitter.com/mjackson">Michael Jackson</a> of{' '}
        <a href="https://reacttraining.com/">React Training</a>
      </div>
    </div>
  )
}

export default App

/* eslint import/namespace:0 */
