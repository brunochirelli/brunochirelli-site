import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import Button from "./Button";

const AboutMe = () => {
  return (
    <StyledSection id="about">
      <div>
        <StaticImage
          className="round-picture"
          src="../images/png/bruno_square.jpg"
          alt="Bruno Chirelli"
          objectFit="contain"
          objectPosition="center"
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
        <StaticImage src="../images/png/logos/google.png" alt="" objectFit="contain" />
        <StaticImage
          src="../images/png/logos/facebook.png"
          alt=""
          objectFit="contain"
          width={145}
        />
        <StaticImage src="../images/png/logos/linkedin.png" alt="" objectFit="contain" />
        <StaticImage src="../images/png/logos/hubspot.png" alt="" objectFit="contain" />
        <StaticImage src="../images/png/logos/semrush.png" alt="" objectFit="contain" />
      </div>
    </StyledSection>
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
