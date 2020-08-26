import React from 'react'
import styles from '../styles.module.css'
import EmbedAuthor from './EmbedAuthor'
import EmbedTitle from './EmbedTitle'
import EmbedDescription from './EmbedDescription'
import EmbedFields from './EmbedFields'

export default ({ embed }) => {
  return (
    <div className={styles['embed-content-inner']}>
      {(() => {
        if (embed.author) return <EmbedAuthor {...embed.author} />
      })()}
      {(() => {
        if (embed.title)
          return <EmbedTitle title={embed.title} url={embed.url} />
      })()}
      {(() => {
        if (embed.description)
          return <EmbedDescription description={embed.description} />
      })()}
      {(() => {
        if (embed.fields) return <EmbedFields fields={embed.fields} />
      })()}
    </div>
  )
}
