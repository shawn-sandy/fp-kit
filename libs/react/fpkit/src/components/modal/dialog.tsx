import UI from '../ui'
import React from 'react'

export type DialogProps = {
  /**
   * React ref for dialog element
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
} & React.ComponentProps<typeof UI>
/**
 * Dialog component
 */
export const Dialog = ({
  id,
  children,
  classes,
  modalRef,
  openOnMount,
  ...props
}: DialogProps) => {
  const handleCloseModal = (e: React.SyntheticEvent<HTMLDialogElement>) => {
    if (e.currentTarget === e.target) {
      e.currentTarget.close()
    }
  }

  return (
    <UI
      as="dialog"
      id={id}
      classes={classes}
      ref={modalRef}
      open={openOnMount}
      onClick={handleCloseModal}
      {...props}
    >
      {children}
    </UI>
  )
}

Dialog.displayName = 'Dialog'
