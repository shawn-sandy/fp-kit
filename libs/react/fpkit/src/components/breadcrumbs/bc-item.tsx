import FP from '../fp'
import { ComponentProps } from '../../types'

export interface CBProps extends ComponentProps {
  /**
   * Styles use data-variant attribute
   */
  variant?: string
  current?: "page" | "step"
}

export const BCItem = ({ children, current, variant, ...props }: CBProps) => {
  return (
    <li className='style' data-variant={variant} aria-current={current} {...props}>
      {children}
    </li>
  )
}

// BCItem.displayName = 'FP.BreadCrumb.Item'
