import React from "react";
import styled from "styled-components";

import { Container, Grid, Typography } from "@material-ui/core";
import { Button } from "gatsby-material-ui-components";

type FeatureProps = {
  imagePath: any;
  overline: string;
  title: string;
  description: string;
  ctaText?: string;
};

const Feature = ({ imagePath, overline, title, description, ctaText }: FeatureProps) => {
  return (
    <StyledContainer>
      <Grid className="feature-grid" container spacing={3} alignItems="center">
        <Grid item sm={6} style={{ padding: "2rem", width: "100%" }}>
          <img src={imagePath} alt="" />
        </Grid>

        <Grid item sm={6} className="text">
          <Typography variant="overline">{overline}</Typography>

          <Typography variant="h3" component="h2" paragraph>
            {title}
          </Typography>

          <Typography variant="body1" paragraph>
            {description}
          </Typography>

          {ctaText && (
            <Button variant="contained" color="primary" disableElevation>
              {ctaText}
            </Button>
          )}
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

const StyledContainer: any = styled(Container)`
  margin-bottom: 3rem;
  background-color: transparent;

  h2 {
    font-size: 2em;
  }

  p {
    font-size: 1em;
  }

  img {
    width: 100%;
    max-height: 30vh;
    object-fit: contain;
  }

  span {
    font-size: 0.75em;
  }

  button {
    font-size: 1em;
  }

  .text {
    padding: 0 2rem;
  }

  @media screen and (min-width: 960px) {
    img {
      max-height: 40vh;
    }

    &:nth-of-type(odd) .text {
      order: -1;
    }
  }
`;

export default Feature;
