import * as React from 'react'
import { IconProps } from '../types'

const defaultStyles = {}

export const ArrowLeft = ({
  fill = 'currentColor',
  size = '24',
}: IconProps) => {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none">
        <path
          d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"
          fill={fill}
        />
      </g>
    </svg>
  )
}

export default ArrowLeft
ArrowLeft.styles = defaultStyles
ArrowLeft.displayName = 'ArrowLeft'
