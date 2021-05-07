import React from "react";
import styled from "styled-components";

import { Container, Paper, Typography, Box } from "@material-ui/core";

import { Button } from "gatsby-theme-material-ui";
import SEO from "../../components/layout/SEO";
import { Helmet } from "react-helmet";

const SucessoStyled = styled(Paper)`
  margin: 2rem 0;
  padding: 2rem;
  text-align: center;

  @media screen and (min-width: 600px) {
    padding: 10rem;
  }

  @media screen and (min-width: 900px) {
    padding: 12rem 10rem;
  }
`;

const Sucesso = () => (
  <>
    <Helmet>
      {/* Event snippet for Enviar formulário de lead em Contato conversion page */}
      <script>
        {gtag("event", "conversion", {
          send_to: "AW-375649030/NPjzCKarspECEIbmj7MB",
        })}
        ;
      </script>
    </Helmet>
    <SEO slug="sucesso" />
    <Container>
      <SucessoStyled disableElevation>
        <Typography variant="h3" paragraph>
          Mensagem enviada com sucesso
        </Typography>
        <Typography variant="body1" paragraph>
          Em breve entrarei em contato para podermos conversar. Se tiver alguma
          dúvida, veja se eu já não a respondi na página Perguntas Frequentes
          (FAQ). Se não, é só aguardar que logo logo te respondo.
        </Typography>
        <Button
          to="/"
          variant="contained"
          color="primary"
          style={{ margin: "0.5rem" }}
        >
          Voltar para a Home
        </Button>
        <Button
          to="/faq"
          variant="contained"
          color="secondary"
          style={{ margin: "0.5rem" }}
        >
          Ir para FAQ
        </Button>
      </SucessoStyled>
    </Container>
  </>
);

export default Sucesso;
