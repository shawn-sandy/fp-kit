import FP from '../fp'
import { ComponentProps } from '../../types'
import { Button } from '../buttons/button'

export interface DialogProps extends ComponentProps {
  open: Boolean
  header: React.ReactNode
  footer: React.ReactNode
  modalRef: React.RefObject<HTMLDialogElement>
}

export const Dialog = ({ id, children }: DialogProps) => {
  return (
    <FP as="dialog" id={id}>
      {children}
    </FP>
  )
}

export interface childDialogProps extends ComponentProps {
  modalRef: React.RefObject<HTMLDialogElement>
}

export const closeDialog = ({ modalRef, children }: childDialogProps) => {
  return (
    <Button type="button" onPointerDown={() => modalRef.current?.close()}>
      {children}
    </Button>
  )
}

export const openDialog = ({ modalRef, children }: childDialogProps) => {
  return (
    <Button type="button" onPointerDown={() => modalRef.current?.showModal()}>
      {children}
    </Button>
  )
}

export default Dialog
