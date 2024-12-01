import UI from '../ui'
import React, { ReactNode } from 'react'

type ComponentProps = React.ComponentProps<typeof UI>

/**
 * Renders children elements without any wrapping component.
 * Can be used as a placeholder when no semantic landmark is needed.
 */
export const Landmarks = (children?: React.FC) => <>{children}</>

type HeaderProps = {
  headerBackground?: ReactNode
} & ComponentProps
/**
 * Header component.
 *
 * Renders a header landmark with a section child.
 *
 * @param children - The content to render inside the header.
 * @param styles - Optional styles object.
 * @param props - Other props.
 */
export const Header = ({
  id,
  children,
  headerBackground,
  styles,
  classes,
  ...props
}: HeaderProps) => {
  return (
    <UI as="header" id={id} styles={styles} className={classes} {...props}>
      {headerBackground}
      <UI as="section">{children}</UI>
    </UI>
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
export const Main = ({
  id,
  children,
  styles,
  classes,
  ...props
}: ComponentProps) => {
  return (
    <UI as="main" id={id} styles={styles} {...props} className={classes}>
      {children}
    </UI>
  )
}

/**
 * Footer component that renders a footer element with a section element inside.
 * @param {ReactNode} children - Child elements to render inside the section element.
 * @param styles - CSS styles to apply to the footer element.
 * @param props - Additional props to pass to the footer element.
 * @returns A React component that renders a footer element with a section element inside.
 */
export const Footer = ({
  id,
  classes,
  children,
  styles = {},
  ...props
}: ComponentProps) => {
  return (
    <UI as="footer" id={id} className={classes} styles={styles} {...props}>
      <UI as="section">{children || 'Copyright © 2022'}</UI>
    </UI>
  )
}

export const Aside = ({
  id,
  children,
  styles = {},
  classes,
  ...props
}: ComponentProps) => {
  return (
    <UI as="aside" id={id} styles={styles} className={classes} {...props}>
      <UI as="section">{children}</UI>
    </UI>
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
  id,
  children,
  styles,
  classes,
  ...props
}: ComponentProps) => {
  return (
    <UI as="section" id={id} styles={styles} className={classes} {...props}>
      {children}
    </UI>
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
  id,
  children,

  styles,
  classes,
  ...props
}: ComponentProps) => {
  return (
    <UI as="article" id={id} styles={styles} className={classes} {...props}>
      {children}
    </UI>
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
