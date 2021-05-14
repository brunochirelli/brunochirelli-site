import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { RootState } from "../stores/store";

import SEO, { SEOProps } from "./SEO";
// import UserConsent from "./UserConsent";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
  /**
   * SEO is a object with a series of props that rest in SEO component.
   *
   * Check the SEO component for more instructions
   *
   * @example <Layout seo={{title: 'Page Title'}}>...</Layout>
   */
  seo?: SEOProps;
};

const Layout = ({ children, seo }: LayoutProps): ReactElement => {
  const fontBase = useSelector((state: RootState) => state.theme.fontBase);

  return (
    <LayoutStyled fontBase={fontBase}>
      <SEO {...seo} />
      <Header />

      <main id="content">{children}</main>

      {/* <Footer /> */}
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div`
  .logo {
    font-family: "bely-display", "sans-serif";
  }

  z-index: ${({ theme }) => theme.zIndex.default};
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: ${({ fontBase }: { fontBase: number }) => fontBase}px;
  font-family: "open-sans", "sans-serif";
  font-family: ${({ theme }) => theme.font.primary};
  background: ${({ theme }) => theme.background.default};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    /* color: ${({ theme }) => theme.palette.primary.main}; */

    & a {
      color: ${({ theme }) => theme.palette.secondary.main};
      transition: all 0.2s ease;

      &:hover {
        color: ${({ theme }) => theme.textColor.headingHover};
        text-decoration: none;
      }
    }
  }

  h2 {
    color: ${({ theme }) => theme.palette.secondary.main};
    font-family: "bely", "sans-serif";
    font-family: ${({ theme }) => theme.font.heading};
    line-height: 1.2;
  }

  h1.section-header {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 3em;
    font-family: "bely-display", "sans-serif";
  }
`;

export default Layout;
