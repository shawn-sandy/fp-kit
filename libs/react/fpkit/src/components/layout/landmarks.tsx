/**
 * @fileoverview Landmarks components
 */

import FP from '../fp'
import { ComponentProps } from '../../types'
import React, { ReactNode } from 'react'

/**
 * Renders children elements without any wrapping component.
 * Can be used as a placeholder when no semantic landmark is needed.
 */
export const Landmarks = (children?: React.FC) => <>{children}</>

/**
 * Header component.
 *
 * Renders a header landmark with a section child.
 *
 * @param children - The content to render inside the header.
 * @param styles - Optional styles object.
 * @param props - Other props.
 */
export const Header = ({ children, styles = {}, ...props }: ComponentProps) => {
  return (
    <FP as="header" {...props} styles={styles}>
      <FP as="section">{children}</FP>
    </FP>
  )
}

/**
 * Main component.
 *
 * Renders a main landmark.
 *
 * @param children - The content to render inside the main element.
 * @param styles - Optional styles object.
 * @param props - Other props.
 */
export const Main = ({ children, styles = {}, ...props }: ComponentProps) => {
  return (
    <FP as="main" styles={styles} {...props}>
      {children}
    </FP>
  )
}

/**
 * Footer component that renders a footer element with a section element inside.
 * @param {ReactNode} children - Child elements to render inside the section element.
 * @param styles - CSS styles to apply to the footer element.
 * @param props - Additional props to pass to the footer element.
 * @returns A React component that renders a footer element with a section element inside.
 */
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

/**
 * Section component that renders a section element.
 *
 * @param children - Child elements to render inside the section.
 * @param styles - CSS styles to apply to the section.
 * @param props - Other props.
 */
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

/**
 * Article component renders an HTML <article> element.
 *
 * @param children - Child elements to render inside the article.
 * @param styles - CSS styles to apply to the article.
 * @param props - Additional props to pass to the article element.
 */
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

export default Landmarks

Landmarks.displayName = 'Landmarks'
Landmarks.Header = Header
Landmarks.Main = Main
Landmarks.Footer = Footer
Landmarks.Aside = Aside
Landmarks.Section = Section
Landmarks.Article = Article

Header.displayName = 'Header'
Main.displayName = 'Main'
Footer.displayName = 'Footer'
Aside.displayName = 'Aside'
Section.displayName = 'Section'
Article.displayName = 'Article'
