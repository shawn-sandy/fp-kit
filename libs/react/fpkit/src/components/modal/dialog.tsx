import FP from '../fp'
import { ComponentProps } from '../../types'
import { Button } from '../buttons/button'
import React, { MouseEventHandler } from 'react'

export interface DialogProps extends ComponentProps {
  /**
   * Ract ref for dialog element
   */
  modalRef: React.RefObject<HTMLDialogElement>
  /**
   * Handle close modal event
   */
  closeModal?: (e: React.SyntheticEvent<HTMLDialogElement>) => void
  /**
   * open modal on mount
   */
  openOnMount?: boolean
}

const handleCloseModal = (e: React.SyntheticEvent<HTMLDialogElement>) => {
  if (e.currentTarget === e.target) {
    e.currentTarget.close()
  }
}

export const Dialog = ({ id, children, modalRef, openOnMount, ...props }: DialogProps) => {
  return (
    <FP
      as="dialog"
      id={id}
      ref={modalRef}
      open={openOnMount}
      onClick={handleCloseModal}
      {...props}
    >
      {children}
    </FP>
  )
}

Dialog.displayName = 'Dialog'
