import * as React from 'react'
import { IconProps } from '../types'

const defaultStyles = {
  fill: 'none',
}

export const Code = ({
  strokeColor = 'currentColor',
  size = '24',
  viewBox,
  name,
  styles = defaultStyles,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <title>code</title>
      <g fill="none">
        <path
          d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
          fill="#212121"
        ></path>
      </g>
    </svg>
  )
}

Code.styles = defaultStyles

export default Code
