import React from 'react'
import { ComponentProps } from '../../types'
import { Button } from '../buttons/button'
import { Dialog } from './dialog'

export interface ModalProps extends ComponentProps {
  openChild?: React.ReactNode
  closeChild?: React.ReactNode
  modalHeader?: React.ReactNode
  modalFooter?: React.ReactNode
}
export const Modal = ({
  openChild,
  closeChild,
  modalHeader,
  modalFooter,
  children,
  ...props
}: ModalProps) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null)
  const openModal = (): void => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }
  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
    }
  }
  return (
    <>
      <Dialog modalRef={dialogRef} {...props}>
        {modalHeader}
        <section>{children}</section>
        {modalFooter ?? (
          <footer>
            <Button
              type="button"
              pointerDown={() => {
                closeModal()
              }}
            >
              {closeChild || 'Close'}
            </Button>{' '}
          </footer>
        )}
      </Dialog>
      <Button type="button" pointerDown={openModal}>
        {openChild || 'Open'}
      </Button>
    </>
  )
}

Modal.displayName = 'Modal'
