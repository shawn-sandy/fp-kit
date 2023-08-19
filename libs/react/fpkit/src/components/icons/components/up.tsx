import { IconProps } from '../types'
import React from 'react'
import Svg from './svg'

const defaultStyles = { ...Svg.styles }
export const Up = ({
  size = 16,
  fill = 'currentColor',
  styles,
  role = 'img',
  alt = 'Up arrow icon',
  ...props
}: Pick<
  IconProps,
  'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'
>) => {
  return (
    <Svg size={size} alt={alt} styles={styles} role={role} {...props}>
      <g fill={fill}>
        <path
          d="M22,18a1,1,0,0,1-.707-.293L12,8.414,2.707,17.707a1,1,0,0,1-1.414-1.414l10-10a1,1,0,0,1,1.414,0l10,10A1,1,0,0,1,22,18Z"
          fill={fill}
        />
      </g>
    </Svg>
  )
}

export default Up
Up.displayName = 'Up'
Up.styles = defaultStyles
