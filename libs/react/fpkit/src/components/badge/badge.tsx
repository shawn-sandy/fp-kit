import UI from '#components/ui'
import React from 'react'

export type BadgeProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof UI>

const Badge = ({ id, styles, classes, children, ...props }: BadgeProps) => {
  return (
    <UI as="sup" id={id} styles={styles} className={classes} {...props}>
      <UI as="span">{children}</UI>
    </UI>
  )
}

export default Badge
Badge.displayName = 'Badge'
