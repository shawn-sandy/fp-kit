import FP from '#components/fp'
import React from 'react'

import Input from './inputs'
import Field from './fields'
import Select from './select'
import Textarea from './textarea'

export type FormProps = {
  children: React.ReactNode
  formMethod?: 'get' | 'post'
  noValidate?: boolean
  name?: string
  target?: string
  formAction: (e: React.FormEvent<HTMLFormElement>) => void
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
} & React.ComponentProps<typeof FP>

const Form = ({
  id,
  styles,
  classes,
  children,
  name,
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
Form.Field = Field
Form.Input = Input
Form.Select = Select
Form.Textarea = Textarea
Form.displayName = 'Form'
