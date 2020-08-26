import React from 'react'
import styles from '../styles.module.css'
import { parseEmbedTitle } from './Markdown'

export default ({ title, url }) => {
  if (url) {
    return (
      <a
        target='_blank'
        rel='noreferrer'
        href={url}
        className={styles['embed-title']}
      >
        {parseEmbedTitle(title)}
      </a>
    )
  } else {
    return <div className={styles['embed-title']}>{parseEmbedTitle(title)}</div>
  }
}
