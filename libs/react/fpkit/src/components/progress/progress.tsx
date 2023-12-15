import React from 'react'

type ProgressRules =
  | {
      /** Indicates progress bar is in busy/loading state */
      isBusy?: true

      /** No current value when in busy state */
      value?: never

      /** No max value needed when in busy state */
      max?: never
    }
  | {
      /** Indicates progress bar is not in busy state */
      isBusy?: false | undefined

      /** Current value of progress bar */
      value: number

      /** Max value of progress bar */
      max: number
    }

export type ProgressProps = {
  /**
   * Optional styles to pass to override default styles
   * Accepts CSSProperties
   */
  styles?: React.CSSProperties

  /**
   * Optional accessible label for the progress bar
   */
  label?: string
  /**
   * Color of the scroll bar
   */
  color?: string
} & ProgressRules

/**
 * Progress bar component
 * Displays a progress bar with busy and value state
 *
 * @param {Object} classes - CSS classes object
 * @param {ReactNode} [children] - Child elements
 * @param {boolean} isBusy - Whether progress is in busy state
 * @param {number} [value] - Current progress value
 * @param {number} [max] - Max progress value
 * @param {string} [color] - color of the scroll bar
 * @param {Object} props - Other props
 * @returns {JSX.Element} - Rendered progress element
 */
const Progress = ({
  styles,
  isBusy,
  value,
  max,
  color,
  label = 'Progress',
  ...props
}: ProgressProps): React.JSX.Element => {
  const defaultStyles = {
    accentColor: color,
  } as React.CSSProperties

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
