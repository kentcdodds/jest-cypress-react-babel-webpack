import * as React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import AutoScalingText from './auto-scaling-text'
import {getFormattedValue} from './utils'

const DisplayContainer = styled.div(({theme}) => ({
  color: theme.displayTextColor,
  background: theme.displayBackgroundColor,
  lineHeight: '130px',
  fontSize: '6em',
  flex: '1',
  position: 'relative',
}))

function CalculatorDisplay({value, ...props}) {
  const formattedValue = getFormattedValue(
    value,
    typeof window === 'undefined' ? 'en-US' : window.navigator.language,
  )

  return (
    <DisplayContainer {...props}>
      <AutoScalingText>{formattedValue}</AutoScalingText>
    </DisplayContainer>
  )
}

CalculatorDisplay.propTypes = {
  value: PropTypes.string.isRequired,
}

export default CalculatorDisplay
