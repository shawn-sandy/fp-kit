import FP from '../fp'
import { ComponentProps } from '../../types'

export type LinkProps = {
  /** The link text or contents */
  children: React.ReactNode
  /** The target attribute for the link */
  target?: string
  /** The rel attribute for the link */
  rel?: string
  /** Whether to prefetch the link */
  prefetch?: boolean
  /** Applies button styling to the link */
  btnStyle?: boolean
  /** Callback when link is clicked */
  onPointerDown?: (e: React.PointerEvent<HTMLAnchorElement>) => void
} & React.ComponentProps<typeof FP>

/**
 * Link component props.
 * @typedef {Object} LinkProps
 * @property {string} href - The href URL that the link goes to.
 * @property {ReactNode} children - The link text or contents.
 * @property {string} [target] - The target attribute for the link.
 * @property {string} [rel] - The rel attribute for the link.
 * @property {boolean} [prefetch=true] - Whether to prefetch the link.
 * @property {boolean} [btnStyle] - Applies button styling to the link.
 * @property {(e: PointerEvent<HTMLAnchorElement>) => void} [onPointerDown] -
 * Callback when link is clicked.
 * @property {Object} [styles] - Component styles.
 * @param {LinkProps} props
 * @returns {JSX.Element}
 */

export const Link = ({
  href,
  target,
  rel,
  children = 'Link',
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
      prefetch={prefetch}
      {...props}
    >
      {children}
    </FP>
  )
}

export default Link
Link.displayName = 'Link'
