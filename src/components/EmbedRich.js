import React from 'react'
import EmbedContent from './EmbedContent'
import EmbedThumbnail from './EmbedThumbnail'
import EmbedFooter from './EmbedFooter'
import cx from 'classnames'
import styles from '../styles.module.css'

export default ({ embed }) => {
  return (
    <div className={cx(styles.embed, styles['embed-rich'])}>
      <EmbedContent embed={embed} />
      {(() => {
        if (embed.image) {
          return <EmbedThumbnail url={embed.image.url} />
        }
      })()}
      {(() => {
        if (embed.footer) {
          return (
            <EmbedFooter footer={embed.footer} timestamp={embed.timestamp} />
          )
        }
      })()}
    </div>
  )
}
