import React from 'react'
import { IconProps } from '../types'

const defaultStyles = {
  fill: 'currentColor',
  stroke: 'none',
}

export const Home = ({
  strokeColor = 'none',
  fill = 'currentColor',
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
      fill="none"
    >
      <path
        d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
        fill="black"
      />
    </svg>
  )
}

export default Home
Home.displayName = 'Home'
Home.styles = defaultStyles
