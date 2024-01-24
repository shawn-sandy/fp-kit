import {
  ComponentPropsWithRef,
  ElementType,
  ForwardedRef,
  forwardRef,
  useRef,
} from 'react'

type CustomForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => React.ReactNode

const uiForwardRef = forwardRef as CustomForwardRef

type UIProps = {
  renderStyles?: boolean
  styles?: React.CSSProperties | {}
  classes?: string
  // children?: React.ReactNode
}

// Added a DistributiveOmit type

type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any
  ? Omit<T, TOmitted>
  : never

export const UnwrappedLink = <TAs extends ElementType>(
  props: {
    as?: TAs
  } & UIProps &
    DistributiveOmit<
      ComponentPropsWithRef<ElementType extends TAs ? 'span' : TAs>,
      'as'
    >,
  ref: ForwardedRef<any>,
) => {
  const { as: Comp = 'span', ...rest } = props
  return <Comp {...rest} ref={ref}></Comp>
}

export const UI = uiForwardRef(UnwrappedLink)
export default UI
