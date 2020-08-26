import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Ajv from 'ajv'
import {
  botMessageSchema,
  registerKeywords,
  stringifyErrors
} from '../validation'

import isEqual from 'lodash.isequal'

import styles from '../styles.module.css'
import EmbedColorPill from './EmbedColorPill'
import EmbedRich from './EmbedRich'

const ajv = registerKeywords(new Ajv({ allErrors: true }))
const validator = ajv.compile(botMessageSchema)

class App extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      error: null,
      input: this.props.embed,
      data: {}
    }
  }

  componentWillMount() {
    this.validateInput(this.state.input)
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.embed, this.props.embed))
      this.validateInput(nextProps.embed)
  }

  onError(error) {
    if (this.props.onError) this.props.onError(error)
  }

  render() {
    const { error, data } = this.state
    if (error === null && data) {
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
    } else {
      this.onError(error)
      return null
    }
  }

  validateInput(input) {
    let isValid = false
    let error = null

    try {
      isValid = validator(input)
      if (!isValid) {
        error = stringifyErrors(input, validator.errors)
      }
    } catch (e) {
      error = e.message
    }

    const data = isValid ? input : this.state.data

    // we set all these here to avoid some re-renders.
    // maybe it's okay (and if we ever want to
    // debounce validation, we need to take some of these out)
    // but for now that's what we do.
    this.setState({ input, data, error })
  }
}

App.propTypes = {
  embed: PropTypes.object.isRequired,
  onError: PropTypes.func
}

export default App
