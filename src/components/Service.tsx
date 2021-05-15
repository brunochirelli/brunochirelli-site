import { Container, Grid } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import SectionHeader from "./SectionHeader";

const Service = () => {
  return (
    <StyledService id="servicos">
      <SectionHeader title="Serviços" />
      <StaticImage src="../images/png/handSketch.png" alt="" />
      <Container>
        <Grid container spacing={3} justify="space-around">
          <Grid className="service" item xs={12} sm={4} md={3}>
            <h2>Só identidade</h2>
            <p>
              Para empresas que não querem gastar muito mas querem se destacar diante da
              concorrência com uma identidade sólida
            </p>
            <ul>
              <li>Logotipo</li>
              <li>Manual de Marca</li>
              <li>1 adicional</li>
            </ul>
            <div className="price">
              <span>12x</span>129,00
            </div>
            <Button to="#id-contato" contained>
              Contrate agora
            </Button>
          </Grid>
          <Grid className="service" item xs={12} sm={4} md={3}>
            <h2>Só identidade</h2>
            <p>
              Para empresas que não querem gastar muito mas querem se destacar diante da
              concorrência com uma identidade sólida
            </p>
            <ul>
              <li>Logotipo</li>
              <li>Manual de Marca</li>
              <li>1 adicional</li>
            </ul>
            <div className="price">
              <span>12x</span>129,00
            </div>
            <Button to="#id-contato" contained>
              Contrate agora
            </Button>
          </Grid>
          <Grid className="service" item xs={12} sm={4} md={3}>
            <h2>Só identidade</h2>
            <p>
              Para empresas que não querem gastar muito mas querem se destacar diante da
              concorrência com uma identidade sólida
            </p>
            <ul>
              <li>Logotipo</li>
              <li>Manual de Marca</li>
              <li>1 adicional</li>
            </ul>
            <div className="price">
              <span>12x</span>129,00
            </div>
            <Button to="#id-contato" contained>
              Contrate agora
            </Button>
          </Grid>
        </Grid>
      </Container>
    </StyledService>
  );
};

const StyledService = styled.div`
  padding-top: 1rem;
  padding-bottom: 5rem;
  text-align: center;
  background: #ebebeb;

  img {
    padding: 1rem 0 3rem;
  }

  h2,
  p {
    margin: 0;
  }

  .service {
    margin-bottom: 1rem;

    ul {
      margin: 1rem 0;
      padding: 0;
      font-weight: bolder;

      li {
        list-style-type: none;
      }
    }

    .price {
      margin-bottom: 1rem;
      font-weight: bolder;

      span {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;

export default Service;
