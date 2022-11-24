import React from "react";
import { ComponentProps } from "../../types";
import { Button } from "../buttons/button";
import { Dialog  } from "./dialog";

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

Modal.displayName = "Modal";
