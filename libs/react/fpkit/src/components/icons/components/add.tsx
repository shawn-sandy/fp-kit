import * as React from 'react'
import { IconProps } from '../types'

const defaultStyles = {
  fill: 'currentColor',
}

export const Add = ({
  fill = 'currentColor',
  size = '24',
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
      <g fill={fill}>
        <path
          d="M17,11h-4V7c0-.553-.447-1-1-1s-1,.447-1,1v4H7c-.553,0-1,.447-1,1s.447,1,1,1h4v4c0,.553,.447,1,1,1s1-.447,1-1v-4h4c.553,0,1-.447,1-1s-.447-1-1-1Z"
          fill={fill}
        />
      </g>
    </svg>
  )
}

export default Add
Add.styles = defaultStyles
Add.displayName = 'Add'
