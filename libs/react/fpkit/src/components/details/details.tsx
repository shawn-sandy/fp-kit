import React from 'react'
import FP from '#components/fp'
import { ComponentProps } from '#types'

export type DetailsProps = {
  /**
   * The summary text shown for the details.
   * Required.
   */
  summary: React.ReactNode

  /**
   * Optional callback when the details is toggled open/closed.
   */
  onToggleEvent?: (e: React.PointerEvent<HTMLDetailsElement>) => void

  /**
   * Optional callback when pointer down event occurs on the summary.
   */
  onPointerDownEvent?: (e: React.PointerEvent<HTMLDetailsElement>) => void
} & Partial<ComponentProps>

/**
 * Details component props.
 * @typedef {Object} DetailsProps
 * @property {ReactNode} children - The content to render inside the details element. Required.
 * @property {ReactNode} summary - The summary text shown for the details. Required.
 * @property {Object|CSSProperties} [styles] - Optional styles to apply to the details element.
 * @property {(e: PointerEvent<HTMLDetailsElement>) => void} [onToggleEvent] - Optional callback when the details is toggled open/closed.
 * @property {(e: PointerEvent<HTMLDetailsElement>) => void} [onPointerDownEvent] - Optional callback when pointer down event occurs on the summary.
 * @param {DetailsProps} props
 * @returns {JSX.Element}
 */
const Details = ({
  summary,
  styles,
  onToggleEvent,
  onPointerDownEvent,
  children,
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
      onToggle={onToggleCallback}
      ref={ref}
      {...props}
    >
      <FP as="summary" onPointerDown={onPointerDownCallback}>
        {summary}
      </FP>
      <FP as="section">{children}</FP>
    </FP>
  )
}

export default Details
Details.displayName = 'Details'
