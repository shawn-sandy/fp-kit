import FP from '#components/fp'
import React from 'react'

import Input from './inputs'
import Field from './fields'
import Select from './select'
import Textarea from './textarea'

export type FormProps = {
  children: React.ReactNode
  formAction: (e: React.FormEvent<HTMLFormElement>) => void
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
} & Partial<React.ComponentProps<typeof FP>>

/**
 * Form component props interface
 * @interface FormProps
 * @property {React.ReactNode} children - Child elements/components
 * @property {(e: React.FormEvent<HTMLFormElement>) => void} formAction - Form submit handler
 * @property {(e: React.FormEvent<HTMLFormElement>) => void} [onSubmit] - Optional additional submit handler
 * @property {Partial<React.ComponentProps<typeof FP>>} ...props - Remaining props
 */
export const Form = ({
  id,
  name,
  styles,
  classes,
  children,
  formAction,
  formMethod,
  onSubmit,
  target,
  noValidate,
  ...props
}: FormProps) => {
  const onSubmitCallback = (e: React.FormEvent<HTMLFormElement>) => {
    if (onSubmit) {
      e.preventDefault()
      onSubmit?.(e)
    }
  }

  return (
    <FP
      as="form"
      id={id}
      name={name}
      className={classes}
      styles={styles}
      action={formAction}
      novalidate={noValidate}
      method={formMethod}
      onSubmit={onSubmitCallback}
      {...props}
    >
      {children}
    </FP>
  )
}

export default Form
Form.displayName = 'Form'
Form.Field = Field
Form.Input = Input
Form.Select = Select
Form.Textarea = Textarea
