import * as React from 'react'

import { IconProps } from '../types'

const defaultStyes = {
  display: 'inline-flex',
  alignItems: 'center',
  width: 'auto',
}

export const Svg = ({
  fill,
  strokeColor,
  styles,
  size = 24,
  role = 'img',
  alt,
  children,
  ...props
}: Pick<
  IconProps,
  'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt' | 'children'
>) => {
  return (
    <svg
      fill={fill}
      stroke={strokeColor}
      height={size}
      width={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={styles}
      role={role}
      aria-label={alt}
      {...props}
    >
      {children}
    </svg>
  )
}

export default Svg
Svg.displayName = 'Svg'
Svg.styles = defaultStyes
