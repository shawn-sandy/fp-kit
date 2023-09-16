import React from 'react'
import usePopover from './use-popover'

/**
 * Interface for props accepted by the Popover component
 *
 * @property {ReactNode} children - The content to show in the popover
 * @property {ReactNode} [content] - Optional alternative content for popover
 */
export type PopoverProps = {
  children: React.ReactNode
  content?: React.ReactNode
}

/**
 * Popover component to display popover content.
 *
 * @param {Object} props - The props for the component.
 * @returns {JSX.Element} - The JSX element for the Popover component.
 *
 * The component uses the usePopover hook to handle popover visibility and positioning.
 *
 * It renders a button that shows the popover on hover using pointer events.
 *
 * The popover content itself is rendered absolutely positioned when visible.
 *
 * Styles like background, border, padding etc are applied inline.
 *
 * Transforms and opacity animate the popover enter/exit.
 */
export const Popover = ({ children, ...props }: PopoverProps) => {
  const hoverRef = React.useRef(null)
  const popOverRef = React.useRef(null)
  const { isVisible, popoverPosition, handlePointerEvent, handlePointerLeave } =
    usePopover(hoverRef, popOverRef)

  return (
    <div data-testid="popover">
      <div
        ref={hoverRef}
        onPointerEnter={handlePointerEvent}
        onPointerLeave={handlePointerLeave}
      >
        {children}
      </div>
      {isVisible && (
        <div
          ref={popOverRef}
          style={{
            display: 'block',
            position: 'absolute',
            background: '#000',
            border: '1px solid #ccc',
            padding: '10px',
            color: '#fff',
            top: popoverPosition.top,
            left: popoverPosition.left,
            transition: 'opacity .5s ease-in-out',
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? '0px' : '-50px'})`,
            // zIndex: 999,
          }}
        >
          {'This is a popover.'}
        </div>
      )}
    </div>
  )
}

export default Popover
