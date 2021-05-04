import React from "react";
import styled from "styled-components";

import { Container, Typography } from "@material-ui/core";
import { Button } from "gatsby-material-ui-components";

type PageHeaderProps = {
  overline: string;
  title: string;
  lead: string;
  center?: boolean;
  ctaText?: string;
};

const PageHeader = ({
  overline,
  title,
  lead,
  center,
  ctaText = "Vamos conversar",
}: PageHeaderProps) => {
  return (
    <ContainerStyled
      maxWidth="xl"
      component="header"
      style={{ textAlign: center && "center" }}
    >
      <div>
        <Typography variant="overline" component="small">
          {overline}
        </Typography>
        <Title component="h1" variant="h4">
          {title}
        </Title>
        <Typography variant="subtitle1" component="p" paragraph>
          {lead}
        </Typography>
        <Button
          to="/contato"
          variant="contained"
          color="primary"
          disableElevation
        >
          {ctaText}
        </Button>
      </div>
    </ContainerStyled>
  );
};

const ContainerStyled: any = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 45vh;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: white;
`;

const Title: any = styled(Typography)`
  font-size: 2rem;

  @media screen and (min-width: 960px) {
    font-size: 2.5rem;
  }
`;

export default PageHeader;
