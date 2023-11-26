import React from 'react'

export type ProgressProps = {
  children?: React.ReactNode
  classes: {}
}

const defaultStyles = {} as React.CSSProperties

const Progress = ({ classes, children, ...props }: ProgressProps) => {
  return (
    <progress style={defaultStyles} aria-busy="true" {...props}>
      {children}
    </progress>
  )
}

export default Progress
Progress.displayName = 'Progress'
Progress.styles = defaultStyles
