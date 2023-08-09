import { IconProps } from '../types'
import React from 'react'
import Svg from './svg'

const Up = ({
  size = 16,
  fill = 'currentColor',
  styles,
  role = 'img',
  alt = 'Down arrow icon',
  ...props
}: Pick<
  IconProps,
  'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'
>) => {
  return (
    <Svg size={size} alt={alt} styles={styles} role={role} {...props}>
      <g fill="#212121">
        <path
          d="M12,18a1,1,0,0,1-.707-.293l-10-10A1,1,0,0,1,2.707,6.293L12,15.586l9.293-9.293a1,1,0,1,1,1.414,1.414l-10,10A1,1,0,0,1,12,18Z"
          fill="#212121"
        />
      </g>
    </Svg>
  )
}

export default Up
