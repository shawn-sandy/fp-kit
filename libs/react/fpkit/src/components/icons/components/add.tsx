import * as React from 'react'
import { IconProps } from '../types'

const defaultStyles = {
  fill: 'currentColor',
}

export const Add = ({ fill = 'currentColor', size = '24' }: IconProps) => {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill={fill} />
      </g>
    </svg>
  )
}

export default Add
Add.styles = defaultStyles
Add.displayName = 'Add'
