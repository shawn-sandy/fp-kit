import UI from '#components/fp'
import React from 'react'

import Input from './inputs'
import Field from './fields'
import Select from './select'
import Textarea from './textarea'

export type FormProps = Partial<React.ComponentProps<typeof UI>> &
  React.ComponentProps<'form'>

/**
 * Form component
 * @param {Object} props - Form component props
 * @param {string} [id] - Unique identifier for form
 * @param {string} [name] - Name for form
 * @param {Object} [styles] - Inline styles
 * @param {string} [classes] - Additional classes
 * @param {ReactNode} children - Child elements
 * @param {string} [action] - Form action URL
 * @param {('get'|'post')} [formMethod='post'] - Form method
 * @param {Function} [onSubmit] - Submit callback
 * @param {string} [target] - Form submit target
 * @param {boolean} [noValidate=false] - Disable validation
 * @param {Object} ...props - Additional props
 */
export const Form = ({
  id,
  name,
  styles,
  classes,
  children,
  action,
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
    <UI
      as="form"
      id={id}
      name={name}
      className={classes}
      styles={styles}
      action={action}
      novalidate={noValidate}
      method={formMethod}
      onSubmit={onSubmitCallback}
      target={target}
      {...props}
    >
      {children}
    </UI>
  )
}

export default Form
Form.displayName = 'Form'
Form.Field = Field
Form.Input = Input
Form.Select = Select
Form.Textarea = Textarea
