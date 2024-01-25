import React from 'react'
import UI from '#components/fp'

type DetailsProps = {
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
   * The aria-label  element for accessibility.
   */
  ariaLabel: string
} & React.ComponentProps<'details'> &
  Partial<React.ComponentProps<typeof UI>>

/**3
 * Details component props interface.
 *
 * @param {ReactNode} [icon] - The icon to show in the summary.
 * @param {React.CSSProperties} [styles] - CSS styles object.
 * @param {string} [classes] - Classnames string.
 * @param {boolean} [open] - Whether the details is open.
 * @param {(e: React.PointerEvent<HTMLDetailsElement>) => void} [onToggle] - onToggle callback.
 * @param {(e: React.PointerEvent<HTMLDetailsElement>) => void} [onPointerDown] - onPointerDown callback.
 * @param {ReactNode} children - The content inside the details.
 * @param {string} [ariaLabel] - aria-label for accessibility.
 * @param {React.Ref<any>} [ref] - Ref object.
 * @param {Object} props - Other props.
 */
export const Details = ({
  summary,
  icon,
  styles,
  classes,
  ariaLabel,
  open,
  onToggle,
  onPointerDown,
  children,
  ref,
  ...props
}: DetailsProps) => {
  const defaultStyles: React.CSSProperties = { ...styles }

  const onToggleCallback = (e: React.PointerEvent<HTMLDetailsElement>) => {
    if (onToggle) onToggle?.(e)
  }

  const onPointerDownCallback = (e: React.PointerEvent<HTMLDetailsElement>) => {
    if (onPointerDown) onPointerDown?.(e)
  }

  return (
    <UI
      as="details"
      style={defaultStyles}
      className={classes}
      onToggle={() => {
        console.log('toggle')
      }}
      ref={ref}
      open={open}
      aria-label={ariaLabel || 'Details dropdown'}
      {...props}
    >
      <UI as="summary" role="group" onPointerDown={onPointerDownCallback}>
        {icon}
      </UI>
      <UI as="section">{children}</UI>
    </UI>
  )
}

export default Details
Details.displayName = 'Details'
