import React from "react";
import styled from "styled-components";

import { Container, Grid } from "@material-ui/core";

import { ImSearch } from "react-icons/im";

const Benefit = () => {
  return (
    <Container style={{ marginBottom: "3rem", marginTop: "3rem" }}>
      <BenefitWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <ImSearch />
            <h3>Profissional Certificado</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </p>
          </Grid>
          <Grid item xs={12} md={3}>
            <ImSearch />
            <h3>Profissional Certificado</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </p>
          </Grid>
          <Grid item xs={12} md={3}>
            <ImSearch />
            <h3>Profissional Certificado</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </p>
          </Grid>
          <Grid item xs={12} md={3}>
            <ImSearch />
            <h3>Profissional Certificado</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </p>
          </Grid>
        </Grid>
      </BenefitWrapper>
    </Container>
  );
};

const BenefitWrapper = styled.div`
  text-align: center;

  img,
  h3,
  p {
    margin: 0;
    padding: 0;
  }
`;

export default Benefit;
