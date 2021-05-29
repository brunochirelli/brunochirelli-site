import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import { Container, Grid } from "@material-ui/core";

const Benefit = () => {
  return (
    <Container style={{ marginBottom: "3rem", marginTop: "3rem" }}>
      <BenefitWrapper>
        <Grid container justify="space-around" spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <StaticImage src="../images/png/magnSketch.png" alt="" />
            <h3>Baseado em Pesquisa</h3>
            <p>
              Faremos pesquisas não só sobre o mercado, mas também com consumidores,
              concorrentes e tendências
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StaticImage src="../images/png/diaSketch.png" alt="" />
            <h3>Além do logotipo</h3>
            <p>
              Uma identidade visual que vai muito além do logotipo e é fundamental para
              gerar confiança.
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StaticImage src="../images/png/socialSketch.png" alt="" />
            <h3>Para redes sociais</h3>
            <p>
              Design pensado principalmente para as redes sociais em todos os formatos.
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StaticImage src="../images/png/capSketch.png" alt="" />
            <h3>Feito por profissional</h3>
            <p>
              Publicitário, UX Designer e especialista em SEO formado pelas maiores
              empresas do mercado.
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
    padding: 0 1rem;
  }

  h3 {
    font-size: 1.5em;
  }

  .gatsby-image-wrapper {
    /* max-height: 5rem; */
  }
`;

export default Benefit;
