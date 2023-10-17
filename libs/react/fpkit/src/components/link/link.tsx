import FP from '../fp'
import { ComponentProps } from '../../types'

export type LinkProps = {
  href: string
  children: React.ReactNode
  target?: string
  rel?: string
  prefetch?: boolean
  btnStyle?: boolean
  onPointerDown?: (e: React.PointerEvent<HTMLAnchorElement>) => void
} & Pick<ComponentProps, 'styles'>

export const Link = ({
  href,
  target,
  rel,
  children = 'Link' as React.ReactNode,
  styles = {},
  prefetch = true,
  btnStyle,
  onPointerDown,
  ...props
}: LinkProps) => {
  let relValue = rel

  if (target === '_blank')
    relValue = `noopener noreferrer ${!!prefetch ? 'prefetch' : ''}`

  const handleOnpointerDown = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (onPointerDown) onPointerDown?.(e)
  }

  return (
    <FP
      as="a"
      href={href}
      target={target}
      styles={styles}
      rel={relValue}
      onPointerDown={handleOnpointerDown}
      data-btn={btnStyle}
      {...props}
    >
      {children}
    </FP>
  )
}

export default Link
Link.displayName = 'Link'
