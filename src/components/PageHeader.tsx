import React from "react";
import styled from "styled-components";

import { Container } from "@material-ui/core";

import Button from "./Button";

type PageHeaderProps = {
  /**
   * Title should be more than 4 words to occupy the white space.
   */
  title: string;
  /**
   * Text to be shown in the button.
   */
  ctaText?: string;
  /**
   * Could be any internal or anchored link
   */
  ctaLink?: string;
  /**
   * Any svg or image. Need understand how to type it.
   */
  sketch?: any;
  hideCta?: boolean;
};

const PageHeader = ({
  title,
  sketch,
  ctaText = "Entre em contato",
  ctaLink = "/contato",
  hideCta,
}: PageHeaderProps) => {
  const anchored = ctaLink?.split("")[0] === "#" ? true : false;

  return (
    <StyledHeader sketch={sketch}>
      <Container>
        <StyledContent>
          {sketch && <img className="sketch" src={sketch} alt="" />}
          <h1>{title}</h1>
          {!hideCta && (
            <Button to={ctaLink} variant={anchored ? "secondary" : "primary"}>
              {ctaText}
            </Button>
          )}
        </StyledContent>
      </Container>
    </StyledHeader>
  );
};

type StyledHeaderProps = {
  /**
   * Helps decide which padding the component will use if a sketch is present or not
   */
  sketch?: boolean;
};

const StyledHeader = styled.header<StyledHeaderProps>`
  display: flex;
  align-items: center;
  padding-top: 6rem;
  padding-bottom: 2.5rem;
  text-align: center;
  background: #f4f2ec;

  @media screen and (min-width: 600px) {
    padding-top: ${({ sketch }) => (sketch ? `8rem` : `4rem`)};
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
