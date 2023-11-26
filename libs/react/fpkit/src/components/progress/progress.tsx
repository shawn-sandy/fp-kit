import React from 'react'

type ProgressType =
  | {
      /** Indicates progress bar is in busy/loading state */
      isBusy: true

      /** No current value when in busy state */
      value: never

      /** No max value needed when in busy state */
      max: never
    }
  | {
      /** Indicates progress bar is not in busy state */
      isBusy: false

      /** Current value of progress bar */
      value: number

      /** Max value of progress bar */
      max: number
    }

export type ProgressProps = {
  children?: React.ReactNode
  classes: {}
} & ProgressType

const defaultStyles = {} as React.CSSProperties

const Progress = ({
  classes,
  children,
  isBusy,
  value,
  max,
  ...props
}: ProgressProps): React.JSX.Element => {
  return (
    <progress
      style={defaultStyles}
      aria-busy={isBusy}
      value={value}
      max={max}
      {...props}
    >
      {children}
    </progress>
  )
}

export default Progress
Progress.displayName = 'Progress'
Progress.styles = defaultStyles
