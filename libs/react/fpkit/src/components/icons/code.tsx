import React from 'react'
import { IconProps } from './types'

export const defaultStyles = {
  display: 'inline-block',
  verticalAlign: 'middle',
  fill: 'currentColor',
}

export const Code = ({
  strokeColor = 'currentColor',
  size = '24',
  viewBox,
  name,
  styles,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={styles}
    >
      <path
        d="M8 10L6 12L8 14"
        stroke={strokeColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 10L18 12L16 14"
        stroke={strokeColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={strokeColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 9.66998L11 14.33"
        stroke={strokeColor}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

Code.styles = defaultStyles

export default Code
