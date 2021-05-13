import React from "react";
import styled from "styled-components";

import { Container } from "@material-ui/core";

import likeSketch from "../images/svgs/likeSketch.svg";
import Button from "./Button";

type PageHeaderProps = {};

const PageHeader = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledContent>
          <img className="sketch" src={likeSketch} alt="" />
          <h1>
            Publicitário e UX Designer com mais de 10 anos de experiência que usa
            marketing, design e código para solucionar problemas
          </h1>
          <Button to="/contato">Entre em contato</Button>
        </StyledContent>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding-top: 6rem;
  padding-bottom: 2.5rem;
  text-align: center;
  background: #f4f2ec;

  @media screen and (min-width: 600px) {
    padding-top: 8rem;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    max-width: 50rem;
    padding: 2rem 1rem;
    color: ${({ theme }) => theme.palette.secondary.main};
    font-size: 1.75em;
    font-family: "Bely", "sans-serif";
    line-height: 1.05;
  }

  @media screen and (min-width: 600px) {
    h1 {
      font-size: 3em;
    }
  }
`;

export default PageHeader;
