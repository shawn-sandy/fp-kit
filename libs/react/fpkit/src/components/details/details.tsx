import React from 'react'
import FP from '#components/fp'
type InheritedProps = React.ComponentProps<typeof FP>

type DetailsProps = InheritedProps & {
  /**
   * The icon to show in the details summary element.
   */
  icon?: React.ReactNode
  /**
   * The summary text shown for the details.
   * Required.
   */
  summary: React.ReactNode

  /**
   * Set the details to open or closed
   */
  open?: boolean

  /**
   * Optional callback when the details is toggled open/closed.
   */
  onToggleEvent?: (e: React.PointerEvent<HTMLDetailsElement>) => void

  /**
   * Optional callback when pointer down event occurs on the summary.
   */
  onPointerDownEvent?: (e: React.PointerEvent<HTMLDetailsElement>) => void
}

/**
 * Details component with a summary and content.
 * @typedef {Object} DetailsProps
 * @property {ReactNode} children - The content to render inside the details element. Required.
 * @property {ReactNode} summary - The summary text shown for the details. Required.
 * @property {Object|CSSProperties} [styles] - Optional styles to apply to the details element.
 * @property {(e: PointerEvent<HTMLDetailsElement>) => void} [onToggleEvent] - Optional callback when the details is toggled open/closed.
 * @property {(e: PointerEvent<HTMLDetailsElement>) => void} [onPointerDownEvent] - Optional callback when pointer down event occurs on the summary.
 * @param {DetailsProps} props
 * @returns {JSX.Element}
 */
export const Details = ({
  summary,
  icon,
  styles,
  classes,
  open,
  onToggleEvent,
  onPointerDownEvent,
  children,
  ariaLabel,
  ref,
  ...props
}: DetailsProps) => {
  const defaultStyles: React.CSSProperties = { ...styles }

  const onToggleCallback = (e: React.PointerEvent<HTMLDetailsElement>) => {
    if (onToggleEvent) onToggleEvent?.(e)
  }

  const onPointerDownCallback = (e: React.PointerEvent<HTMLDetailsElement>) => {
    if (onPointerDownEvent) onPointerDownEvent?.(e)
  }

  return (
    <FP
      as="details"
      style={defaultStyles}
      classNames={classes}
      onToggle={onToggleCallback}
      ref={ref}
      open={open}
      aria-label={ariaLabel || 'Details dropdown'}
      {...props}
    >
      <FP as="summary" onPointerDown={onPointerDownCallback}>
        {icon}
        {summary}
      </FP>
      <FP as="section">{children}</FP>
    </FP>
  )
}

export default Details
Details.displayName = 'Details'
