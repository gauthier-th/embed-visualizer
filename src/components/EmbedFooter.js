import React from 'react'
import styles from '../styles.module.css'

export default ({ footer, timestamp }) => {
  const footerText = []
  if (footer.text) footerText.push(footer.text.trim())
  if (timestamp) footerText.push(timestamp)
  return (
    <div>
      {(() => {
        if (footer.icon_url && footer.text) {
          return (
            <img
              src={footer.icon_url}
              className={styles['embed-footer-icon']}
              role='presentation'
              width='20'
              height='20'
            />
          )
        }
      })()}
      {(() => {
        if (footerText.length > 0) {
          return (
            <span className={styles['embed-footer']}>
              {footerText.join(' • ')}
            </span>
          )
        }
      })()}
    </div>
  )
}
