import React from 'react'
import styles from '../styles.module.css'
import EmbedField from './EmbedField'

export default ({ fields }) => {
  return (
    <div className={styles['embed-fields']}>
      {fields.map((field, idx) => {
        return (
          <EmbedField
            key={idx}
            name={field.name}
            value={field.value}
            inline={field.inline}
          />
        )
      })}
    </div>
  )
}
