import React from 'react'
import { IconProps } from '../types'

const defaultStyles = {
  fill: 'currentColor',
  stroke: 'none',
}

export const Home = ({
  strokeColor = 'none',
  fill = 'currentColor',
  size = '16',
  viewBox,
  name,
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
        stroke={fill}
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
