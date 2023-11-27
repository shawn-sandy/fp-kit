import React from 'react'

type ProgressOptions =
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
  styles: React.CSSProperties
  label: string
} & ProgressOptions

const defaultStyles = {} as React.CSSProperties

/**
 * Progress bar component
 * Displays a progress bar with busy and value state
 *
 * @param {Object} classes - CSS classes object
 * @param {ReactNode} [children] - Child elements
 * @param {boolean} isBusy - Whether progress is in busy state
 * @param {number} [value] - Current progress value
 * @param {number} [max] - Max progress value
 * @param {Object} props - Other props
 * @returns {JSX.Element} - Rendered progress element
 */
const Progress = ({
  styles,
  isBusy,
  value,
  max,
  label,
  ...props
}: ProgressProps): React.JSX.Element => {
  const style = { ...defaultStyles, ...styles }
  return (
    <progress
      aria-label={label}
      style={style}
      aria-busy={isBusy}
      value={value}
      max={max}
      {...props}
    ></progress>
  )
}

export default Progress
Progress.displayName = 'Progress'
Progress.styles = defaultStyles
