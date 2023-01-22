/**
 * @fileoverview Landmarks components
 */

import FP, { fpStyles } from "../fp";



export interface LandmarkProps {
  children: React.ReactNode;
  styles?: {};
}

const getStyles = (styles: any) => {
  return styles as React.CSSProperties;
}

export const Header = ({ children, styles ={}, ...props }: LandmarkProps) => {
  return (
    <FP as="header" {...props} style={fpStyles(styles)}>
      <FP as="section">{children}</FP>
    </FP>
  );
};

export const Main = ({ children, styles = {}, ...props }: LandmarkProps) => {
  return (
    <FP as="main" style={fpStyles(styles)} {...props}>
      {children}
    </FP>
  );
};

export const Footer = ({ children, styles = {}, ...props }: LandmarkProps) => {
  return (
    <FP as="footer" style={fpStyles(styles)} {...props}>
      <FP as="section">{children || "Copyright © 2022"}</FP>
    </FP>
  );
};

export const Aside = ({ children, styles = {}, ...props }: LandmarkProps) => {
  return (
    <FP as="aside" style={fpStyles(styles)} {...props}>
      <FP as="section">{children}</FP>
    </FP>
  );
};

export const Section = ({ children, styles = {}, ...props }: LandmarkProps) => {
  return <FP as="section" style={fpStyles(styles)} {...props}>{children}</FP>;
};


export const Article = ({ children, styles = {}, ...props }: LandmarkProps) => {
  return <FP as="article" style={fpStyles(styles)} {...props}>{children}</FP>;
};

Header.displayName = "Header";
Main.displayName = "Main";
Footer.displayName = "Footer";
Aside.displayName = "Aside";
Section.displayName = "Section";
Article.displayName = "Article";
