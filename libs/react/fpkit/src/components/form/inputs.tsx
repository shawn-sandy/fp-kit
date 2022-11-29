import FP from '../fp'
import { ComponentProps } from '../../types'

export interface InputProps extends Omit<ComponentProps, 'children'> {
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  name?: string
  value?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const defaultStyles = {}

export const Input = ({
  type = 'text',
  name,
  value,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <FP
      as="input"
      type={type}
      placeholder={placeholder}
      styles={{ ...defaultStyles }}
      {...props}
    />
  )
}

Input.displayName = 'Input'
