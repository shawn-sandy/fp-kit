import * as React from 'react'
import FP from '../fp'

export interface ListProps {
  styles?: {}
  classes?: string
  children: React.ReactNode
  type: 'ul' | 'ol' | 'dl'
  variant: string
}

export const List = ({
  children,
  classes,
  type = 'ul',
  variant,
  styles,
  ...props
}: ListProps) => {
  return (
    <FP
      as={type}
      data-variant={variant}
      className={classes}
      style={styles}
      {...props}
    >
      {children}
    </FP>
  )
}

export default List
