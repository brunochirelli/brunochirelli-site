import React from "react";
import styled from "styled-components";

import { Container } from "@material-ui/core";

import Button from "./Button";

import google from "../images/svgs/logos/google.svg";
import facebook from "../images/svgs/logos/facebook.svg";
import linkedin from "../images/svgs/logos/linkedin.svg";
import hubspot from "../images/svgs/logos/hubspot.svg";
import semrush from "../images/svgs/logos/semrush.svg";

const AboutMe = () => {
  return (
    <Container>
      <StyledSection>
        <div>
          <img
            className="round-picture"
            src="https://images.unsplash.com/photo-1523215108660-3fdf7932d7a5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1345&q=80"
            alt="Bruno Chirelli"
          />
        </div>
        <div className="name">Bruno Chirelli</div>
        <h2>
          Publicitário e Designer de Experiência certificado pelas maiores empresas do
          mercado
        </h2>
        <Button to="/sobre">Conheça mais sobre sim</Button>
        <br />
        <div className="logos">
          <img src={google} alt="" />
          <img src={facebook} alt="" />
          <img src={linkedin} alt="" />
          <img src={hubspot} alt="" />
          <img src={semrush} alt="" />
        </div>
      </StyledSection>
    </Container>
  );
};

const StyledSection = styled.section`
  margin-top: 3rem;
  margin-bottom: 3rem;

  .round-picture {
    width: 7rem;
    height: 7rem;
    margin-bottom: 1.5rem;
    object-fit: cover;
    background: gray;
    border-radius: 50%;
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 1rem;

    img {
      max-width: 7rem;
      margin-right: 3rem;
      margin-bottom: 2rem;
    }
  }

  .name {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 2rem;
    font-family: ${({ theme }) => theme.font.display};
  }

  h2 {
    max-width: 55rem;
    margin: 0.25rem 0 1.5rem 0;
    color: ${({ theme }) => theme.palette.secondary.main};
    font-family: ${({ theme }) => theme.font.heading};
    line-height: 1.2;

    @media screen and (min-width: 600px) {
      font-size: 2em;
    }
  }
`;

export default AboutMe;
