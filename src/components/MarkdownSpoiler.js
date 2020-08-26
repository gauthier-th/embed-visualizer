import React, { useState } from 'react'
import cx from 'classnames'
import styles from '../styles.module.css'

export default (props) => {
  const [isVisible, setVisible] = useState(false)
  if (isVisible) {
    return <span className={styles.spoiler}>{props.children}</span>
  } else {
    return (
      <span
        className={cx(styles.spoiler, styles['spoiler-hidden'])}
        onClick={() => {
          setVisible(true)
        }}
      >
        {props.children}
      </span>
    )
  }
}
