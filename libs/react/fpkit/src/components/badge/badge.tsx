import FP from '#components/fp'
import React from 'react'

export type BadgeProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof FP>

const defaultStyles = {}

const Badge = ({ id, styles, classes, children, ...props }: BadgeProps) => {
  return (
    <FP as="sup" id={id} styles={styles} className={classes} {...props}>
      <FP as="span">{children}</FP>
    </FP>
  )
}

export default Badge
Badge.displayName = 'Badge'
Badge.styles = defaultStyles
