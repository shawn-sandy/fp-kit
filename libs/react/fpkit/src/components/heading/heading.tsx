import React from 'react'
import UI from '#components/ui'
import { type } from 'os'

export type TitleProps = {
  children: React.ReactNode
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  ui?: string
} & React.ComponentProps<typeof UI>

const Heading = ({
  type = 'h3',
  id,
  styles,
  ui = 'display',
  children,
  ...props
}: TitleProps) => {
  return (
    <UI as={type} id={id} styles={styles} data-ui={ui} {...props}>
      {children}
    </UI>
  )
}

export default Heading
Heading.displayName = 'Heading'
