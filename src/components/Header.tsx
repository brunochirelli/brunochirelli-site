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
                <LogoLink>
                  <img src={logo} alt="Bruno Chirelli Digital" />
                  <Link to="/" color="textPrimary" variant="h6">
                    Bruno <strong>Chirelli</strong>
                  </Link>
                </LogoLink>

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
    margin-bottom: 100px;
  }

  header {
    z-index: ${({ theme }) => theme.zIndex.menubar};
    color: ${({ theme }) => theme.textColor};
    background: ${({ theme }) => theme.background.header};
    border-bottom: 1px solid rgba(0, 0, 0, 0.075);
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

const LogoLink = styled.div`
  display: flex;
  align-items: center;

  a {
    color: ${({ theme }) => theme.textColor};
    font-family: "montserrat", sans-serif;

    strong {
      transition: all 0.1s ease-in;
    }

    &:hover {
      text-decoration: none;

      strong {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;

export default Header;
