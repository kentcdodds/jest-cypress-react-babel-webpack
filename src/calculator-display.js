import React from 'react'
import PropTypes from 'prop-types'
import AutoScalingText from './auto-scaling-text'
import styles from './calculator-display.module.css'
import {getFormattedValue} from './utils'

class CalculatorDisplay extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
  }
  render() {
    const {value, ...props} = this.props
    const formattedValue = getFormattedValue(
      value,
      typeof window === 'undefined' ? 'en-US' : window.navigator.language,
    )

    return (
      <div {...props} className={styles.calculatorDisplay}>
        <AutoScalingText>{formattedValue}</AutoScalingText>
      </div>
    )
  }
}

export default CalculatorDisplay
