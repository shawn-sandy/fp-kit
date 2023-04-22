import FP from '../fp'
import { ComponentProps } from '../../types'
// export interface LinkProps {

export type LinkProps = Partial<ComponentProps> & {
  href: string
  target?: string
  rel?: string
  children: React.ReactNode
  prefetch?: boolean
  onPointerDown?: (e: React.PointerEvent<HTMLAnchorElement>) => void
}

export const Link = ({
  href,
  target,
  rel,
  children,
  styles = {},
  prefetch = true,
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
      {...props}
    >
      {children ?? 'Link'}
    </FP>
  )
}

export default Link
Link.displayName = 'Link'
