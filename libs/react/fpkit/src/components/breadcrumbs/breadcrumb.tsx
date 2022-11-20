import FP from '../fp'
import { ComponentProps } from '../../types'
import '@shawnsandy/first-paint/dist/css/components/breadcrumb.min.css'

export interface BCProps extends ComponentProps {
  /**
   * Style component using data-style attribute
   */
  dataStyle?: string
  /**
   * React child component
   */
  children: React.ReactNode
}

export const defaultStyles = {}

export const Breadcrumb = ({ dataStyle, children, ...props }: BCProps) => {
  return (
    <FP as="nav">
      <ol data-fp-breadcrumb={dataStyle} {...props}>
        {children}
      </ol>
    </FP>
  )
}

Breadcrumb.displayName = 'FP.BreadCrumb'
