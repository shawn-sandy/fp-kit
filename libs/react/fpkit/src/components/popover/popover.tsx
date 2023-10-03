import React from 'react'
import usePopover from '#hooks/popover/use-popover'

/**
 * Interface for props accepted by the Popover component
 *
 * @property {ReactNode} children - The content to show in the popover
 * @property {ReactNode} [content] - Optional alternative content for popover
 */
export type PopoverProps = {
  children: React.ReactNode
  popoverTrigger: React.ReactNode
  styles?: {}
}

export const defaultStyles = {
  display: 'block',
  position: 'absolute',
  background: '#000',
  border: '1px solid #010101',
  padding: '10px',
  color: '#fff',
  transition: 'opacity .5s ease-in-out',
} as React.CSSProperties

/**
 * Popover component to display popover content.
 *
 * @param props - The props for the component
 * @param props.children - The content to show in the popover
 * @param props.popoverTrigger - The element that triggers the popover on hover
 *
 * @returns JSX.Element - The rendered JSX element for the Popover
 * @example - <Popover popoverTrigger={<button>Hover here</button>}>Popover content</Popover>
 *
 * The component uses the usePopover hook to handle popover visibility and positioning.
 *
 * It renders the triggerElement, and conditionally renders the popover content
 * positioned absolutely when visible.
 *
 * Inline styles handle visuals like background, border, padding, etc.
 *
 * Transforms and opacity animate the enter/exit transition of the popover.
 */

export const Popover = ({
  children,
  popoverTrigger,
  styles,
  ...props
}: PopoverProps): JSX.Element => {
  const hoverRef = React.useRef(null)
  const popOverRef = React.useRef(null)
  const { isVisible, popoverPosition, handlePointerEvent, handlePointerLeave } =
    usePopover(hoverRef, popOverRef)
  const popoverStyles = {
    opacity: isVisible ? 1 : 0,
    top: popoverPosition.top,
    left: popoverPosition.left,
    // transform: `translateY(${isVisible ? '0px' : '-50px'})`,
    zIndex: 999,
  } as React.CSSProperties

  return (
    <>
      <div
        ref={hoverRef}
        onPointerEnter={handlePointerEvent}
        onPointerLeave={handlePointerLeave}
        {...props}
      >
        {popoverTrigger}
      </div>
      {isVisible && (
        <div ref={popOverRef} style={{ ...popoverStyles, ...styles }}>
          {children}
        </div>
      )}
    </>
  )
}

export default Popover
Popover.displayName = 'Popover'
Popover.styles = defaultStyles
