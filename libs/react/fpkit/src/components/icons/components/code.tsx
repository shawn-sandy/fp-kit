import * as React from 'react'
import { IconProps } from '../types'

const defaultStyles = {
  fill: 'currentColor',
}

export const Code = ({
  strokeColor = 'currentColor',
  fill = 'currentColor',
  size = '24',
  renderStyles,
  viewBox,
  name,
  styles = defaultStyles,
  ...props
}: IconProps) => {
  return (
    <svg
      height={size}
      width={size}
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
        <polyline fill="none" points="8 6 2 12 8 18" stroke={strokeColor} />
        <polyline fill="none" points="16 6 22 12 16 18" />
      </g>
    </svg>
  )
}

export default Code
Code.styles = defaultStyles
