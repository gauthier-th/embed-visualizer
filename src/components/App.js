import React, { useState, useMemo } from 'react'

import Ajv from 'ajv'
import {
  botMessageSchema,
  registerKeywords,
  stringifyErrors
} from '../validation'

import styles from '../styles.module.css'
import EmbedColorPill from './EmbedColorPill'
import EmbedRich from './EmbedRich'

const ajv = registerKeywords(new Ajv({ allErrors: true }))
const validator = ajv.compile(botMessageSchema)

export default function EmbedVisualizer({ embed, onError }) {
  const [error, setError] = useState(null)

  const data = useMemo(() => {
    const { data, error } = validateInput(embed)
    if (error || !data) {
      setError(error || 'Invalid input. Please check your syntax.')
      onError(error || 'Invalid input. Please check your syntax.')
      return null
    }
    return data
  }, [embed])

  if (error || !data)
    return null

  return (
    <div className={styles['theme-dark']}>
      <div className={styles['message-group']}>
        <div className={styles.comment}>
          <div className={styles['embed-wrapper']}>
            <EmbedColorPill color={data.embed.color} />
            <EmbedRich embed={data.embed} />
          </div>
        </div>
      </div>
    </div>
  )
}

function validateInput(input) {
  let isValid = false
  let error = null

  try {
    isValid = validator(input)
    if (!isValid)
      error = stringifyErrors(input, validator.errors)
  }
  catch (e) {
    error = e.message
  }

  const data = isValid ? input : null

  return { data, error }
}
