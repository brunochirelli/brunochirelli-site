import React, { ReactElement } from "react";
import styled from "styled-components";

import {
  AppBar,
  Container,
  Toolbar,
  // Typography,
  useScrollTrigger,
} from "@material-ui/core";

import { Link } from "gatsby-material-ui-components";

import Menu from "./Menu";
import AccessibleOptions from "./AccessibleOptions";

import logo from "../images/svgs/brunochirellidigital.svg";

const ElevationScroll = ({ children }: { children: ReactElement }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

type HeaderProps = {
  siteTitle: string;
};

const Header = (props: HeaderProps) => {
  return (
    <div>
      <StyledDiv>
        <ElevationScroll {...props}>
          <AppBar color="inherit">
            <AccessibleOptions />
            <Container>
              <StyledToolbar>
                <StyledLogoLink to="/" color="textPrimary" variant="h6">
                  <img src={logo} alt="Bruno Chirelli Digital" />
                  <span>
                    Bruno <strong>Chirelli</strong>
                  </span>
                </StyledLogoLink>

                <Menu />
              </StyledToolbar>
            </Container>
          </AppBar>
        </ElevationScroll>
      </StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div`
  margin-bottom: 56px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    margin-bottom: 110px;
  }

  header {
    z-index: ${({ theme }) => theme.zIndex.menubar};
    color: ${({ theme }) => theme.textColor.default};
    background: ${({ theme }) => theme.background.header};
    border-bottom: 1px solid rgba(0, 0, 0, 0.075);
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    transition: 0.2s all ease;
  }
`;

const StyledToolbar: any = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 0;

  h6 {
    font-family: "montserrat", sans-serif;

    strong {
      font-weight: 700;
    }
  }
`;

const StyledLogoLink: any = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textColor.default};
  font-family: "montserrat", sans-serif;

  span {
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }

  img {
    padding-right: 0.5rem;
  }

  &:hover {
    span {
      opacity: 0.7;
    }
    text-decoration: none;
  }
`;

export default Header;
