import React from 'react'
import cx from 'classnames'
import styles from '../styles.module.css'
import { parseAllowLinks } from './Markdown'

export default ({ description }) => {
  return (
    <div className={cx(styles['embed-description'], styles.markup)}>
      {parseAllowLinks(description)}
    </div>
  )
}
