import React from "react";
import styled from "styled-components";

import { Link } from "gatsby-material-ui-components";

type HeaderProps = {
  landing?: "identidade";
};

const Header = ({ landing }: HeaderProps) => {
  const handleClick = (anchor: string): any => {
    if (typeof window !== "undefined") {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (landing === "identidade") {
    return (
      <StyledNav id="back-to-top-anchor">
        <ul>
          <li>
            <a className="logo" onClick={() => handleClick("back-to-top-anchor")}>
              Bruno Chirelli
            </a>
          </li>
          <li>
            <a onClick={() => handleClick("about")}>Sobre</a>
          </li>
          <li>
            <a onClick={() => handleClick("services")}>Serviços</a>
          </li>
          <li>
            <a onClick={() => handleClick("portfolio")}>Portfolio</a>
          </li>
          <li>
            <a onClick={() => handleClick("form-contact")}>Contato</a>
          </li>
        </ul>
      </StyledNav>
    );
  }
  return (
    <StyledNav id="back-to-top-anchor">
      <ul>
        <li>
          <Link className="logo" to="/">
            Bruno Chirelli
          </Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/blog">Ideias</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
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
        cursor: pointer;
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
