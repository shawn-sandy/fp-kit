import React from 'react'
import { IconProps } from '../types'

const defaultStyles = {
  fill: 'currentColor',
}

export const ArrowRight = ({
  size = '24',
  fill = 'currentColor',
  strokeColor = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
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
        <line fill="none" strokeLinecap="butt" x1="2" x2="22" y1="12" y2="12" />
        <polyline fill="none" points="15,5 22,12 15,19 " stroke={strokeColor} />
      </g>
    </svg>
  )
}

export default ArrowRight
ArrowRight.displayName = 'ArrowRight'
