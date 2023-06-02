// create a modal component using the html dialog element

import React, { useState } from 'react'

import '@shawnsandy/first-paint/dist/css/libs/all.min.css'

export interface ModalProps {
  children: React.ReactNode
  title: string
  open: boolean
  onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({
  children,
  title,
  open,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(open)

  const handleClose = () => {
    setIsOpen(false)
    onClose()
  }

  return (
    <>
      {isOpen && (
        <dialog
          className="modal"
          open={isOpen}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="modal-header">
            <h2 id="modal-title">{title}</h2>
            <button
              className="modal-close"
              aria-label="close"
              onClick={handleClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </dialog>
      )}
    </>
  )
}

export default Modal
