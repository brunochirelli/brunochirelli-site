import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

import SEO, { SEOProps } from "./SEO";
// import UserConsent from "./UserConsent";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";

type LayoutProps = {
  children: ReactNode;
  seo?: SEOProps;
};

const Layout = ({ children, seo }: LayoutProps): ReactElement => {
  const fontBase = useSelector((state: RootState) => state.theme.fontBase);

  return (
    <LayoutStyled fontBase={fontBase}>
      <SEO {...seo} />
      <Header siteTitle="One-Day-Site" />

      <main id="content">{children}</main>

      <Footer />
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div`
  z-index: ${({ theme }) => theme.zIndex.default};
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ fontBase }: { fontBase: number }) => fontBase}px;
  background: ${({ theme }) => theme.background.default};
`;

export default Layout;
