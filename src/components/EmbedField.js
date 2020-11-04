import React from 'react'
import cx from 'classnames'
import styles from '../styles.module.css'
import { parseAllowLinks, parseEmbedTitle } from './Markdown'

export default ({ name, value, inline = false }) => {
  const classNames = [styles['embed-field']]
  if (inline) classNames.push(styles['embed-field-inline'])
  return (
    <div className={cx(...classNames)}>
      <div className={styles['embed-field-name']}>{parseEmbedTitle(name)}</div>
      <div className={cx(styles['embed-field-value'], styles.markup)}>
        {parseAllowLinks(value)}
      </div>
    </div>
  )
}
