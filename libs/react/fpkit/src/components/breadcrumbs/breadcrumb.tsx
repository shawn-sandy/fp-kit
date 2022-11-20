import FP from '../fp'
import { ComponentProps } from '../../types'
import '@shawnsandy/first-paint/dist/css/components/breadcrumb.min.css'

export interface BCProps extends ComponentProps {
  children: React.ReactNode,
  dataStyles?: string
}

export const defaultStyles = {}

export const Breadcrumb = ({ dataStyles, children, ...props }: BCProps) => {
  return (
    <FP as="nav">
      <ol data-fp-breadcrumb={dataStyles} {...props}>{children}</ol>
    </FP>
  )
}


export interface CBProps extends ComponentProps {
  variant?: string
}


export const BCItem = ({ children, variant, ...props }: CBProps) => {
  return <FP as="li" data-variant={variant} {...props}>{children}</FP>
}

Breadcrumb.displayName = 'BreadCrumb'


