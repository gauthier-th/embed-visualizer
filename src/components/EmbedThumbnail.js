import React from 'react'
import cx from 'classnames'
import styles from '../styles.module.css'

export default ({ url }) => {
  return (
    <a
      className={cx(styles['embed-thumbnail'], styles['embed-thumbnail-rich'])}
    >
      <img className={styles.image} role='presentation' src={url} />
    </a>
  )
}
