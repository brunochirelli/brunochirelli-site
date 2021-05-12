import React from "react";
import { IconButton, Link } from "gatsby-material-ui-components";
import { CgMenu } from "react-icons/cg";
import styled from "styled-components";

const Menu = () => {
  return (
    <>
      <StyledMobileMenu>
        <IconButton>
          <CgMenu />
        </IconButton>
      </StyledMobileMenu>

      <StyledDesktopMenu>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
            <ul>
              <li>
                <Link to="/servicos/marketing-de-busca">Marketing de Busca</Link>
              </li>
              <li>
                <Link to="/servicos/criacao-sites">Criação de Site</Link>
              </li>
              <li>
                <Link to="/servicos/identidade-visual">Identidade Visual</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </StyledDesktopMenu>
    </>
  );
};

const StyledMobileMenu = styled.div`
  display: block;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: none;
  }
`;

const StyledDesktopMenu = styled.div`
  position: relative;
  display: none;
  color: ${({ theme }) => theme.textColor};
  font-weight: 500;
  font-family: "commuters sans", sans-serif;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: block;
  }

  a {
    display: block;
    padding: 1.35rem;
    color: inherit;
    font-size: 1rem;

    &:hover {
      text-decoration: none;
      background: ${({ theme }) => theme.background.contrast};
    }
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    display: flex;

    li {
      position: relative;
      list-style-type: none;

      &:hover ul {
        display: block;
      }

      & > ul {
        position: absolute;
        top: 64px;
        left: 0;
        display: none;
        width: 230px;
        overflow: hidden;
        background: white;
        border-radius: 10px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);

        & > li {
          margin: 0;

          a {
            padding: 0.75rem;

            &:hover {
              background: rgba(0, 0, 0, 0.1);
            }
          }
        }
      }
    }
  }
`;

export default Menu;
