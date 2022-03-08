import React from 'react'
import PropTypes from 'prop-types'
import ContentLoader from 'react-content-loader'

const Article = ({ props, speed = 2, backgroundColor = 'lightgray', foregroundColor = '#ecebeb', width = 400, height = 160 }) => {
  const viewBox = `0 0 ${width} ${height}`
  return (
    <ContentLoader
      speed={speed}
      width={width}
      height={height}
      viewBox={viewBox}
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
      {...props}
    >
      <rect x='48' y='8' rx='3' ry='3' width='88' height='6' />
      <rect x='48' y='26' rx='3' ry='3' width='52' height='6' />
      <rect x='0' y='56' rx='3' ry='3' width='410' height='6' />
      <rect x='0' y='72' rx='3' ry='3' width='380' height='6' />
      <rect x='0' y='88' rx='3' ry='3' width='178' height='6' />
      <circle cx='20' cy='20' r='20' />
    </ContentLoader>
  )
}

Article.propTypes = {
  /**
   * Speed of the animation
   */
  speed: PropTypes.number,
  /**
   * Background color of the animation
   */
  backgroundColor: PropTypes.string,
  /**
   * Foreground color of the animation
   */
  foregroundColor: PropTypes.string,
  /**
   * Width of the animation
   */
  width: PropTypes.number,
  /**
   * Height of the animation
   */
  height: PropTypes.number
}
export default Article
