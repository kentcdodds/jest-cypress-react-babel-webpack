import React from 'react'
import PropTypes from 'prop-types'
import styles from './auto-scaling-text.module.css'

class AutoScalingText extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }
  node = React.createRef()
  getScale() {
    const node = this.node.current
    if (!node) {
      return 1
    }
    const parentNode = node.parentNode

    const availableWidth = parentNode.offsetWidth
    const actualWidth = node.offsetWidth
    const actualScale = availableWidth / actualWidth

    if (actualScale < 1) {
      return actualScale * 0.9
    }
    return 1
  }

  render() {
    const scale = this.getScale()

    return (
      <div
        className={styles.autoScalingText}
        style={{transform: `scale(${scale},${scale})`}}
        ref={this.node}
        data-testid="total"
      >
        {this.props.children}
      </div>
    )
  }
}

export default AutoScalingText
