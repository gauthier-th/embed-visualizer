/* eslint-disable camelcase */
import React from 'react'
import styles from '../styles.module.css'

export default ({ name, url, icon_url }) => {
  return (
    <div className={styles['embed-author']}>
      {(() => {
        if (icon_url) {
          return (
            <img
              src={icon_url}
              role='presentation'
              className={styles['embed-author-icon']}
            />
          )
        }
      })()}
      {(() => {
        if (url) {
          return (
            <a
              target='_blank'
              rel='noreferrer'
              href={url}
              className={styles['embed-author-name']}
            >
              {name}
            </a>
          )
        } else {
          return <span className={styles['embed-author-name']}>{name}</span>
        }
      })()}
    </div>
  )
}
