import React from 'react'
import PropTypes from 'prop-types'

const Services = ({ children }) => (
  <div>{children || 'Content here'}</div>

)

export default Services

Services.propTypes = {
  /**
   * Content of the page
   */
  children: PropTypes.any
}
