import FP from "../fp"
import { ComponentProps } from "../../types"

export interface DialogProps extends ComponentProps {
  id: String
  open: Boolean
  header: React.ReactNode
  footer: React.ReactNode
  modalRef: React.RefObject<HTMLDialogElement>
}

const Dialog = ({children}: DialogProps) => {
  return <FP as="dialog">{children}</FP>
}

export default Dialog
