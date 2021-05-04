import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

type HeaderProps = {
  siteTitle: string;
};

const Header = ({ siteTitle }: HeaderProps) => {
  return (
    <Styled>
      oie
      <header>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              to="/"
              data-testid="header-title"
            >
              {siteTitle}
            </Link>
          </div>
        </nav>
      </header>
    </Styled>
  );
};

const Styled = styled.div`
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.backgroundColor};
  transition: 0.2s all ease;
`;

export default Header;
