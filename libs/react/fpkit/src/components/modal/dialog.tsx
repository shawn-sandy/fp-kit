import FP from '../fp'
import { ComponentProps } from '../../types'
import { Button } from '../buttons/button'
import React from 'react'

export interface DialogProps extends ComponentProps {
  modalRef: React.RefObject<HTMLDialogElement>
}

export const Dialog = ({ id, children, modalRef, ...props }: DialogProps) => {
  return (
    <FP as="dialog" id={id} ref={modalRef} {...props}>
      {children}
    </FP>
  )
}

export interface ModalProps extends ComponentProps {
  openChild: React.ReactNode
  closeChild: React.ReactNode
}

export const Modal = ({ openChild, closeChild, children, ...props }: ModalProps) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null)
  const openMod = (): void => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }
  const closeMod = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
    }
  }
  return (
    <>
      <Dialog modalRef={dialogRef} {...props}>
        {children}
        <footer>
          <Button
            type="button"
            pointerDown={() => {
              closeMod()
            }}
          >
            {closeChild || 'Close'}
          </Button>
        </footer>
      </Dialog>
      <Button type="button" pointerDown={openMod}>
        {openChild || 'Open'}
      </Button>
    </>
  )
}

Dialog.displayName = 'Dialog'
Modal.displayName = 'Modal'
