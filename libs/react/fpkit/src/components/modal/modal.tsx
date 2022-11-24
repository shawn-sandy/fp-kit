import React from 'react'
import { ComponentProps } from '../../types'
import { Button } from '../buttons/button'
import { Dialog } from './dialog'

export interface ModalProps extends ComponentProps {
  /**
   * The child component/content for open button
   */
  openChild?: React.ReactNode
  /**
   * The child component/content for close button
   */
  closeChild?: React.ReactNode
  /**
   * The child component/content for modal header
   */
  modalHeader?: React.ReactNode
  /**
   * The child component/content for modal footer
   */
  modalFooter?: React.ReactNode
  /**
   * The child component/content for modal body
   */
  children: React.ReactNode
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
        <section>
          {modalHeader}
          {children}
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
        </section>
      </Dialog>
      <Button type="button" pointerDown={openModal}>
        {openChild || 'Open Modal'}
      </Button>
    </>
  )
}

Modal.displayName = 'Modal'
