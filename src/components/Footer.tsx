import React from "react";
import styled from "styled-components";

import { Container } from "@material-ui/core";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer>
      <Container>
        <StyledDiv>
          <hr />
          {/* <div className="footer-title">Bruno Chirelli</div>
          <div>
            <div className="subtitle">Entre em contato</div>
            <p>bruno@chirelli.com.br</p>
            <p>19 4042 0322</p>
          </div> */}
        </StyledDiv>
      </Container>

      <Copyright />
    </footer>
  );
};

const StyledDiv = styled.div`
  hr {
    display: block;
    width: 100%;
    margin-top: 3rem;
    opacity: 0.5;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .footer-title {
    max-width: 22rem;
    padding: 2rem 0;
    font-size: 2.8rem;
    font-family: "bely-display", "serif";
    line-height: 1;
  }

  .subtitle {
    font-size: 1.33rem;
    font-family: "bely", "serif";
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 0.95rem;

    &:last-of-type {
      margin-bottom: 2rem;
    }
  }
`;

export default Footer;
