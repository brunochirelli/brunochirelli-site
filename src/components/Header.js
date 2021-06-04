import React from "react";
import { Link } from "gatsby";

import { StyledHeader } from "./Header.styled";

import handshake from "../images/handshake.svg";

const Header = () => {
  const jumpToContent = () => {
    document.getElementById("main").scrollTo({ behavior: "smooth" });
  };

  return (
    <StyledHeader>
      <div className="container">
        <div>
          <button className="skip" onClick={jumpToContent}>
            Pular para conteúdo
          </button>
        </div>

        <nav>
          <ul>
            <li className="logo">
              <Link to="/">Bruno Chirelli</Link>
            </li>
            <li>
              <Link to="/">Eu</Link>
            </li>
            <li>
              <Link to="/">Ideias</Link>
            </li>
            <li>
              <Link to="/">Portfolio</Link>
            </li>
            <li>
              <Link to="/">Contato</Link>
            </li>
          </ul>
        </nav>

        <div className="feature">
          <img src={handshake} alt="" />

          <h1>
            Publicitário e UX Designer com mais de 10 anos de experiência que
            usa do design e do código para solucionar problemas
          </h1>

          <Link to="/">cta</Link>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
