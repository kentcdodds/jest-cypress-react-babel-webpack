import React from 'react'
import PointTarget from 'react-point'
import PropTypes from 'prop-types'
import styles from './calculator.module.css'

// NOTE: Normally I wouldn't do this, but I wanted to include code
// splitting in this example because it's something you have to
// handle with Jest and many people will want to know :).
const CalculatorDisplay = React.lazy(() => import('calculator-display'))

function CalculatorKey({onPress, className = '', ...props}) {
  return (
    <PointTarget onPoint={onPress}>
      <button className={`${styles.calculatorKey} ${className}`} {...props} />
    </PointTarget>
  )
}
CalculatorKey.propTypes = {
  onPress: PropTypes.func.isRequired,
  className: PropTypes.string,
}

const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue,
}

function calcReducer(currentState, newState) {
  return {...currentState, ...newState}
}

function Calculator() {
  const [state, setState] = React.useReducer(calcReducer, {
    value: null,
    displayValue: '0',
    operator: null,
    waitingForOperand: false,
  })
  const {value, displayValue, operator, waitingForOperand} = state

  function handleKeyDown(event) {
    let {key} = event

    if (key === 'Enter') key = '='

    if (/\d/.test(key)) {
      event.preventDefault()
      inputDigit(parseInt(key, 10))
    } else if (key in CalculatorOperations) {
      event.preventDefault()
      performOperation(key)
    } else if (key === '.') {
      event.preventDefault()
      inputDot()
    } else if (key === '%') {
      event.preventDefault()
      inputPercent()
    } else if (key === 'Backspace') {
      event.preventDefault()
      clearLastChar()
    } else if (key === 'Clear') {
      event.preventDefault()

      if (state.displayValue === '0') {
        clearAll()
      } else {
        clearDisplay()
      }
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  function clearAll() {
    setState({
      value: null,
      displayValue: '0',
      operator: null,
      waitingForOperand: false,
    })
  }

  function clearDisplay() {
    setState({
      displayValue: '0',
    })
  }

  function clearLastChar() {
    setState({
      displayValue: displayValue.substring(0, displayValue.length - 1) || '0',
    })
  }

  function toggleSign() {
    const newValue = parseFloat(displayValue) * -1

    setState({
      displayValue: String(newValue),
    })
  }

  function inputPercent() {
    const currentValue = parseFloat(displayValue)

    if (currentValue === 0) return

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, '')
    const newValue = parseFloat(displayValue) / 100

    setState({
      displayValue: String(newValue.toFixed(fixedDigits.length + 2)),
    })
  }

  function inputDot() {
    if (!/\./.test(displayValue)) {
      setState({
        displayValue: `${displayValue}.`,
        waitingForOperand: false,
      })
    }
  }

  function inputDigit(digit) {
    if (waitingForOperand) {
      setState({
        displayValue: String(digit),
        waitingForOperand: false,
      })
    } else {
      setState({
        displayValue:
          displayValue === '0' ? String(digit) : displayValue + digit,
      })
    }
  }

  function performOperation(nextOperator) {
    const inputValue = parseFloat(displayValue)

    if (value == null) {
      setState({
        value: inputValue,
      })
    } else if (operator) {
      const currentValue = value || 0
      const newValue = CalculatorOperations[operator](currentValue, inputValue)

      setState({
        value: newValue,
        displayValue: String(newValue),
      })
    }

    setState({
      waitingForOperand: true,
      operator: nextOperator,
    })
  }

  const displayIsNonZero = displayValue !== '0'
  const clearText = displayIsNonZero ? 'C' : 'AC'

  return (
    <div className={styles.calculator}>
      <React.Suspense
        fallback={<div style={{height: 120}}>Loading display...</div>}
      >
        <CalculatorDisplay value={displayValue} />
      </React.Suspense>
      <div className={styles.calculatorKeypad}>
        <div className={styles.inputKeys}>
          <div className={styles.functionKeys}>
            <CalculatorKey
              className={styles.keyClear}
              onPress={() => (displayIsNonZero ? clearDisplay() : clearAll())}
            >
              {clearText}
            </CalculatorKey>
            <CalculatorKey
              className={styles.keySign}
              onPress={() => toggleSign()}
            >
              ±
            </CalculatorKey>
            <CalculatorKey
              className={styles.keyPercent}
              onPress={() => inputPercent()}
            >
              %
            </CalculatorKey>
          </div>
          <div className={styles.digitKeys}>
            <CalculatorKey
              className={styles.key0}
              onPress={() => inputDigit(0)}
            >
              0
            </CalculatorKey>
            <CalculatorKey className={styles.keyDot} onPress={() => inputDot()}>
              ●
            </CalculatorKey>
            <CalculatorKey
              className={styles.key1}
              onPress={() => inputDigit(1)}
            >
              1
            </CalculatorKey>
            <CalculatorKey
              className={styles.key2}
              onPress={() => inputDigit(2)}
            >
              2
            </CalculatorKey>
            <CalculatorKey
              className={styles.key3}
              onPress={() => inputDigit(3)}
            >
              3
            </CalculatorKey>
            <CalculatorKey
              className={styles.key4}
              onPress={() => inputDigit(4)}
            >
              4
            </CalculatorKey>
            <CalculatorKey
              className={styles.key5}
              onPress={() => inputDigit(5)}
            >
              5
            </CalculatorKey>
            <CalculatorKey
              className={styles.key6}
              onPress={() => inputDigit(6)}
            >
              6
            </CalculatorKey>
            <CalculatorKey
              className={styles.key7}
              onPress={() => inputDigit(7)}
            >
              7
            </CalculatorKey>
            <CalculatorKey
              className={styles.key8}
              onPress={() => inputDigit(8)}
            >
              8
            </CalculatorKey>
            <CalculatorKey
              className={styles.key9}
              onPress={() => inputDigit(9)}
            >
              9
            </CalculatorKey>
          </div>
        </div>
        <div className={styles.operatorKeys}>
          <CalculatorKey
            className={styles.keyDivide}
            onPress={() => performOperation('/')}
          >
            ÷
          </CalculatorKey>
          <CalculatorKey
            className={styles.keyMultiply}
            onPress={() => performOperation('*')}
          >
            ×
          </CalculatorKey>
          <CalculatorKey
            className={styles.keySubtract}
            onPress={() => performOperation('-')}
          >
            −
          </CalculatorKey>
          <CalculatorKey
            className={styles.keyAdd}
            onPress={() => performOperation('+')}
          >
            +
          </CalculatorKey>
          <CalculatorKey
            className={styles.keyEquals}
            onPress={() => performOperation('=')}
          >
            =
          </CalculatorKey>
        </div>
      </div>
    </div>
  )
}

export default Calculator

/* eslint no-eq-null:0, eqeqeq:0, react/display-name:0, max-lines-per-function:0 */
