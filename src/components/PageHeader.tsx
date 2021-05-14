import React from "react";
import styled from "styled-components";

import { Container } from "@material-ui/core";

import Button from "./Button";

type PageHeaderProps = {
  title: string;
  sketch?: any;
};

const PageHeader = ({ title, sketch }: PageHeaderProps) => {
  return (
    <StyledHeader>
      <Container>
        <StyledContent>
          {sketch && <img className="sketch" src={sketch} alt="" />}
          <h1>{title}</h1>
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
    padding: 1rem;
    color: ${({ theme }) => theme.palette.secondary.main};
    font-size: 1.75em;
    font-family: "Bely", "sans-serif";
    line-height: 1.05;

    @media screen and (min-width: 600px) {
      font-size: 3em;
    }
  }

  img {
    max-height: 4rem;
    margin-top: 1rem;

    @media screen and (min-width: 600px) {
      max-height: 100%;
      margin-top: 0;
    }
  }
`;

export default PageHeader;
