import { Container, Grid } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import SectionHeader from "./SectionHeader";

const Service = () => {
  return (
    <StyledService id="services">
      <SectionHeader title="Identidade Visual" />
      <StaticImage src="../images/png/handSketch.png" alt="" />
      <Container>
        <Grid container spacing={3} justify="space-around">
          <Grid className="service" item xs={12} sm={4} md={3}>
            <h2>Identidade Visual</h2>
            <p>
              As bases para a comunicação da sua empresa, tanto impresso quanto digital
            </p>
            <ul>
              <li>Logotipo</li>
              <li>Manual de Marca</li>
              <li>Papelaria</li>
              <li>Apoios de Venda</li>
            </ul>
            {/* <div className="price">
              <span>12x</span>129,00
            </div> */}
            {/* <Button to="#id-contato" contained>
              Contrate agora
            </Button> */}
          </Grid>
          <Grid className="service" item xs={12} sm={4} md={3}>
            <h2>Redes Sociais</h2>
            <p>
              Templates para dar consistência a sua comunicação em todos os ambientes, em
              qualquer rede social
            </p>
            <ul>
              <li>Instagram, Facebook, Twitter</li>
              <li>Youtube, Twitch</li>
              <li>Linkedin</li>
            </ul>
            {/* <div className="price">
              <span>12x</span>129,00
            </div> */}
            {/* <Button to="#id-contato" contained>
              Contrate agora
            </Button> */}
          </Grid>
          <Grid className="service" item xs={12} sm={4} md={3}>
            <h2>Mecanismos de Busca</h2>
            <p>
              O design traz confiança quando é consistente e o Google sabe muito bem disso
              usando esses indícios para te ranquear melhor
            </p>
            <ul>
              <li>Websites</li>
              <li>Landing Pages</li>
              <li>Newsletters</li>
            </ul>
            {/* <div className="price">
              <span>12x</span>129,00
            </div> */}
            {/* <Button to="#id-contato" contained>
              Contrate agora
            </Button> */}
          </Grid>
          <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
            <Button to="#form-contact" contained>
              Solicite um Orçamento
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
