import React from 'react'
import { IconProps } from '../types'

const defaultStyles = {
  fill: 'currentColor',
}

export const Minus = ({
  size = '24',
  fill = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={fill}>
        <path
          d="M17,11H7c-.553,0-1,.447-1,1s.447,1,1,1h10c.553,0,1-.447,1-1s-.447-1-1-1Z"
          fill={fill}
        />
      </g>
    </svg>
  )
}

export default Minus
Minus.displayName = 'Minus'
Minus.styles = defaultStyles
