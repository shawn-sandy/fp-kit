/**
 * @fileoverview Landmarks components
 */

import FP from '../fp'
import { ComponentProps } from '../../types'

export const Header = ({ children, styles = {}, ...props }: ComponentProps) => {
  return (
    <FP as="header" {...props} styles={styles}>
      <FP as="section">{children}</FP>
    </FP>
  )
}

export const Main = ({ children, styles = {}, ...props }: ComponentProps) => {
  return (
    <FP as="main" styles={styles} {...props}>
      {children}
    </FP>
  )
}

export const Footer = ({ children, styles = {}, ...props }: ComponentProps) => {
  return (
    <FP as="footer" styles={styles} {...props}>
      <FP as="section">{children || 'Copyright © 2022'}</FP>
    </FP>
  )
}

export const Aside = ({ children, styles = {}, ...props }: ComponentProps) => {
  return (
    <FP as="aside" styles={styles} {...props}>
      <FP as="section">{children}</FP>
    </FP>
  )
}

export const Section = ({
  children,
  styles = {},
  ...props
}: ComponentProps) => {
  return (
    <FP as="section" styles={styles} {...props}>
      {children}
    </FP>
  )
}

export const Article = ({
  children,
  styles = {},
  ...props
}: ComponentProps) => {
  return (
    <FP as="article" styles={styles} {...props}>
      {children}
    </FP>
  )
}

Header.displayName = 'Header'
Main.displayName = 'Main'
Footer.displayName = 'Footer'
Aside.displayName = 'Aside'
Section.displayName = 'Section'
Article.displayName = 'Article'
