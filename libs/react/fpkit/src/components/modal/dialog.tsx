import FP from '../fp'
import { ComponentProps } from '../../types'
import { Button } from '../buttons/button'
import React, { MouseEventHandler } from 'react'

export interface DialogProps extends ComponentProps {
  modalRef: React.RefObject<HTMLDialogElement>
  closeModal?: (e: React.SyntheticEvent<HTMLDialogElement>) => void
}

const handleCloseModal = (e: React.SyntheticEvent<HTMLDialogElement>) => {
  if (e.currentTarget === e.target) {
    e.currentTarget.close()
  }
}

export const Dialog = ({ id, children, modalRef, ...props }: DialogProps) => {
  return (
    <FP
      as="dialog"
      id={id}
      ref={modalRef}
      onClick={handleCloseModal}
      {...props}
    >
      {children}
    </FP>
  )
}

Dialog.displayName = 'Dialog'
