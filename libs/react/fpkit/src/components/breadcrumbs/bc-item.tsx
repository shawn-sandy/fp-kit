import FP from '../fp'
import { ComponentProps } from '../../types'

export interface CBProps extends ComponentProps {
  /**
   * Styles use data-variant attribute
   */
  variant?: string
  current?: boolean
}

export const BCItem = ({ children, current, variant, ...props }: CBProps) => {
  return (
    <FP as="li" data-variant={variant} aria-current={current ? "page" : false} {...props}>
      {children}
    </FP>
  )
}

BCItem.displayName = 'FP.BreadCrumb.Item'
