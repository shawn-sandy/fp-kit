/**
 * @fileoverview Landmarks components
 */

import FP from "../fp";

export const Header = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <FP as="header" {...props}>
      <FP as="section">{children}</FP>
    </FP>
  );
};

export const Main = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <FP as="main" {...props}>
      {children}
    </FP>
  );
};

export const Footer = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <FP as="footer" {...props}>
      <FP as="section">{children || "Copyright © 2022"}</FP>
    </FP>
  );
};

export const Aside = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <FP as="aside" {...props}>
      <FP as="section">{children}</FP>
    </FP>
  );
};

export const Section = ({ children, ...props }: { children: React.ReactNode }) => {
  return <FP as="section" {...props}>{children}</FP>;
};


export const Article = ({ children, ...props }: { children: React.ReactNode }) => {
  return <FP as="article" {...props}>{children}</FP>;
};

Header.displayName = "Header";
Main.displayName = "Main";
Footer.displayName = "Footer";
Aside.displayName = "Aside";
Section.displayName = "Section";
Article.displayName = "Article";
