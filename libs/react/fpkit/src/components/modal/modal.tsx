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
  /**
   * Open modal on mount when set to true
   */
  showOpen?: boolean
}
export const Modal = ({
  openChild,
  closeChild,
  modalHeader,
  modalFooter,
  children,
  showOpen = false,
  ...props
}: ModalProps) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null)
  const openModal = (): void => {
    if (dialogRef.current) {
      if(showOpen)
      dialogRef.current.show()
      else
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
      <Dialog modalRef={dialogRef} openOnMount={showOpen} {...props}>
        <section>
          {modalHeader}
          {children}
          {modalFooter ?? (
            <div>
              <Button
                type="button"
                pointerDown={() => {
                  closeModal()
                }}
              >
                {closeChild || 'Close'}
              </Button>{' '}
            </div>
          )}
        </section>
      </Dialog>
      { !showOpen && (
      <Button type="button" pointerDown={openModal}>
        {openChild || 'Open Modal'}
      </Button>
      )}
    </>
  )
}

Modal.displayName = 'Modal'
