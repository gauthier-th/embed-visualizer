import React from 'react'
import styles from '../styles.module.css'

export default ({ color }) => {
  return (
    <div
      className={styles['embed-color-pill']}
      style={{
        backgroundColor: color ? '#' + color.toString(16) : '#4f545c'
      }}
    />
  )
}
