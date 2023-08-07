import { IconProps } from '../types'
import React from 'react'

const defaultStyles = {
  fill: 'currentColor',
  stroke: 'none',
}

/**
 * Renders a home icon.
 *
 * @param {string} strokeColor - The color of the icon's stroke.
 * @param {string} fill - The color of the icon's fill.
 * @param {string} size - The size of the icon.
 * @param {string} viewBox - The viewBox of the icon.
 * @param {string} name - The name of the icon.
 * @param {Object} styles - The styles of the icon.
 * @param {Object} props - The props of the icon.
 * @returns {JSX.Element} - A home icon.
 */
export const Home = ({
  strokeColor = 'currentColor',
  fill = 'none',
  size = '16',
  styles = defaultStyles,
  ...props
}: IconProps) => {
  return (
    <svg
      height="16"
      width="16"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={styles}
      {...props}
    >
      <g
        fill={fill}
        stroke={strokeColor}
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <polygon
          fill="none"
          points="12 2 2 10 2 23 9 23 9 16 15 16 15 23 22 23 22 10 12 2"
          stroke={strokeColor}
        />
      </g>
    </svg>
  )
}

export default Home
Home.displayName = 'Home'
Home.styles = defaultStyles
