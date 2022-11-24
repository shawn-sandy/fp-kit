import FP from '../fp'
import { ComponentProps } from '../../types'
import { Button } from '../buttons/button'
import React, { MouseEventHandler } from 'react'

export interface DialogProps extends ComponentProps {
  modalRef: React.RefObject<HTMLDialogElement>
  closeModal?: (e: React.SyntheticEvent<HTMLDialogElement>) => void
}


const handleCloseModal = (e: React.SyntheticEvent<HTMLDialogElement>) => {
  if(e.currentTarget === e.target) {
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


export interface ModalProps extends ComponentProps {
  openChild: React.ReactNode
  closeChild: React.ReactNode
}
export const Modal = ({
  openChild,
  closeChild,
  children,
  ...props
}: ModalProps) => {
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
