import { ComponentProps } from './shared'

export interface SharedInputProps extends ComponentProps {
  /**
   * The input name
   */
  name?: string
  /**
   * The input value
   */
  value?: string
  /**
   * The input placeholder
   */
  placeholder?: string
  /**
   * Input is required or not
   */
  required?: boolean
  /**
   * Set the element as disabled
   */
  disabled?: boolean
  /**
   * Set the element as readonly
   */
  readonly?: boolean
}
