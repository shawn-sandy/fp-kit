import FP from '../fp'
import React from 'react'

export type LinkProps = {
  /** Applies button styling to the link */
  btnStyle?: boolean
} & React.ComponentProps<typeof FP> &
  React.ComponentProps<'a'>

export const Link = ({
  href,
  target,
  rel,
  children = 'Link',
  styles,
  prefetch,
  btnStyle,
  onPointerDown,
  ...props
}: LinkProps) => {
  let relValue = rel

  if (target === '_blank')
    relValue = `noopener noreferrer ${!prefetch ? 'prefetch' : ''}`

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
