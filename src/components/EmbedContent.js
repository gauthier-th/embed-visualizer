import React from 'react'
import EmbedContentInner from './EmbedContentInner'
import EmbedRichThumb from './EmbedRichThumb'
import styles from '../styles.module.css'

export default ({ embed }) => {
  return (
    <div className={styles['embed-content']}>
      <EmbedContentInner embed={embed} />
      {(() => {
        if (embed.thumbnail) {
          return <EmbedRichThumb url={embed.thumbnail.url} />
        }
      })()}
    </div>
  )
}
