import FP from '../fp'
import { ComponentProps } from '../../types'

export interface InputProps extends ComponentProps {
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
  return <FP as='input' type={type} styles={{ ...defaultStyles }} />
}

Input.displayName = 'Input'
