import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

import Header from "./Header";
import SEO, { SEOProps } from "./SEO";
import UserConsent from "./UserConsent";

type LayoutProps = {
  children: ReactNode;
  seo?: SEOProps;
};

const Layout = ({ children, seo }: LayoutProps): ReactElement => {
  return (
    <LayoutStyled>
      <UserConsent />
      <SEO {...seo} />
      <Header siteTitle="One-Day-Site" />
      <main>{children}</main>
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div`
  z-index: ${({ theme }) => theme.zIndex.default};
`;

export default Layout;
