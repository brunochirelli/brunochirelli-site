import React from "react";
import styled from "styled-components";

import { Link } from "gatsby-material-ui-components";

const Header = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link className="logo" to="/">
            Bruno Chirelli
          </Link>
        </li>
        <li>
          <Link to="/sobre">Eu</Link>
        </li>
        <li>
          <Link to="/">Serviços</Link>
        </li>
        <li>
          <Link to="/">Portfolio</Link>
        </li>
        <li>
          <Link to="/">Contato</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: absolute;
  width: 100%;
  padding-top: 0.5rem;
  font-size: 1.3rem;
  font-family: ${({ theme }) => theme.font.heading};

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding: 0;

    li {
      flex-grow: 1;
      padding: 0 0.5rem;
      text-align: center;
      list-style-type: none;

      a {
        color: ${({ theme }) => theme.palette.secondary.main};
      }

      &:first-of-type {
        width: 100%;

        a {
          color: ${({ theme }) => theme.palette.primary.main};
          font-size: 2rem;
          font-family: "bely", "serif";
          font-family: ${({ theme }) => theme.font.display};
        }
      }

      @media screen and (min-width: 600px) {
        flex-grow: initial;

        &:nth-of-type(1) {
          order: 3;
          width: auto;
        }
        &:nth-of-type(2) {
          order: 1;
        }
        &:nth-of-type(3) {
          order: 2;
        }
        &:nth-of-type(4) {
          order: 4;
        }
        &:nth-of-type(5) {
          order: 5;
        }
      }
    }
  }
`;

export default Header;
