import React from "react";
import styled from "styled-components";

import { Container, Typography } from "@material-ui/core";
import { Button } from "gatsby-material-ui-components";

type PageHeaderProps = {
  title: string;
  lead: string;
  overline?: string;
  center?: boolean;
  ctaText?: string;
};

const PageHeader = ({ overline, title, lead, center, ctaText }: PageHeaderProps) => {
  return (
    <StyledDiv>
      <StyledContainer
        component="header"
        style={{ textAlign: center && "center", alignItems: center && "center" }}
      >
        <div className="text">
          <Typography variant="overline" component="small">
            {overline}
          </Typography>
          <Title component="h1" variant="h4" paragraph>
            {title}
          </Title>
          <Typography variant="subtitle1" component="p" paragraph>
            {lead}
          </Typography>
          {ctaText && (
            <Button to="/contato" variant="contained" color="primary" disableElevation>
              {ctaText}
            </Button>
          )}
        </div>
      </StyledContainer>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background: ${({ theme }) => theme.background.contrast};
`;

const StyledContainer: any = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 40vh;
  margin-bottom: 3rem;
  padding-top: 3rem;
  padding-bottom: 3rem;

  small {
    font-size: 0.75em;
  }

  .text {
    max-width: 800px;
  }

  p {
    font-size: 1em;
  }

  a {
    font-size: 0.8em;
  }
`;

const Title: any = styled(Typography)`
  font-size: 1.8em;

  @media screen and (min-width: 960px) {
    font-size: 2.25em;
  }
`;

export default PageHeader;
