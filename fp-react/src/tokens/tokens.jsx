import React from 'react'
import PropTypes from 'prop-types'

const Tokens = ({ children }) => (
  <div>{children || 'Content here'}</div>

)

export default Tokens

Tokens.propTypes = {
  /**
   * Content of the page
   */
  children: PropTypes.any
}
