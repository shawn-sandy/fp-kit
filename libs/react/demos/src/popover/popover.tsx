import React from 'react'
import usePopover from './use-popover'

const Popover: React.FC = () => {
  const hoverRef = React.useRef(null)
  const popOverRef = React.useRef(null)
  const { isVisible, popoverPosition, handleClick, handleOutsideClick } =
    usePopover(hoverRef, popOverRef)

  return (
    <div data-testid="popover">
      <button
        ref={hoverRef}
        onPointerEnter={handleClick}
        onFocus={handleOutsideClick}
        onPointerLeave={handleOutsideClick}
      >
        Hover here
      </button>
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
          This is a popover.
        </div>
      )}
    </div>
  )
}

export default Popover
