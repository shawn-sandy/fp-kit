import React from 'react'
import usePopover from './use-popover'

const Popover: React.FC = () => {
  const hoverRef = React.useRef(null)
  const { isVisible, popoverPosition, handleClick, handleOutsideClick } =
    usePopover(40, hoverRef)

  return (
    <div onMouseOut={handleOutsideClick}>
      <button ref={hoverRef} onMouseOver={handleClick}>
        Click me
      </button>
      {isVisible && (
        <>
          <div
            style={{
              display: 'block',
              position: 'absolute',
              background: '#000',
              border: '1px solid #ccc',
              padding: '10px',
              color: '#fff',
              top: popoverPosition.top,
              left: popoverPosition.left,
            }}
          >
            This is a popover.
          </div>
        </>
      )}
    </div>
  )
}

export default Popover
