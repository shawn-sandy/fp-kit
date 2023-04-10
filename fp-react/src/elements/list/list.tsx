import * as React from 'react'

export interface ListProps {
  styles?: {}
  classes?: string
  children?: React.ReactNode
}

export const List = ({ children, classes, styles, ...props }: ListProps) => {
  return (
    <ul className={classes} style={styles} {...props}>
      {children}
    </ul>
  )
}
