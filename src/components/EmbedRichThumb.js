import React from 'react'
import styles from '../styles.module.css'

export default ({ url }) => {
  return (
    <img
      src={url}
      role='presentation'
      className={styles['embed-rich-thumb']}
      style={{
        maxWidth: 80,
        maxHeight: 80
      }}
    />
  )
}
