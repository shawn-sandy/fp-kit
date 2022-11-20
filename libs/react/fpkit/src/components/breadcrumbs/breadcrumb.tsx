import FP from '../fp'
import { ComponentProps } from '../../types'
import '@shawnsandy/first-paint/dist/css/components/breadcrumb.min.css'

export interface BCProps extends ComponentProps {
  children: React.ReactNode
}

export interface CBProps extends ComponentProps {}

export const defaultStyles = {}

export const Breadcrumb = ({ children }: BCProps) => {
  return (
    <FP as="nav">
      <ol data-fp-breadcrumb>{children}</ol>
    </FP>
  )
}

export const Crumb = ({ children }: BCProps) => {
  return <FP as="li">{children}</FP>
}

Breadcrumb.displayName = 'BreadCrumb'

const List = () => {
  return (
    <Breadcrumb>
      <Crumb>Home</Crumb>
      <Crumb>Library</Crumb>
      <Crumb>Data</Crumb>
    </Breadcrumb>
  )
}
