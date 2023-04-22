import FP from '../fp'
import { ComponentProps } from '../../types'
// export interface LinkProps {

export type LinkProps = Partial<ComponentProps> & {
  href?: string
  target?: string
  rel?: string
  children: React.ReactNode
  prefetch?: boolean
}

export const Link = ({
  href,
  target,
  rel,
  children,
  styles = {},
  prefetch = true,
  ...props
}: LinkProps) => {
  let relValue = rel
  if (target === '_blank')
    relValue = `noopener noreferrer ${!!prefetch ? 'prefetch' : ''}`
  return (
    <FP
      as="a"
      href={href}
      target={target}
      styles={styles}
      rel={relValue}
      {...props}
    >
      {children ?? 'Link'}
    </FP>
  )
}

export default Link
Link.displayName = 'Link'