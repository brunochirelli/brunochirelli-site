import React from "react";
import styled from "styled-components";

import { Container, Divider, Grid, Typography } from "@material-ui/core";
import { Link, Button } from "gatsby-material-ui-components";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer>
      <Container>
        <FooterFeature>
          <Typography variant="h4" component="h3" paragraph style={{ fontWeight: 500 }}>
            Publicitário, web designer freelancer com foco em marketing para mecanismos de
            busca
          </Typography>
          <Button
            to="/contato"
            size="large"
            variant="contained"
            color="primary"
            disableElevation
          >
            Solicite uma proposta
          </Button>
        </FooterFeature>

        <Divider variant="fullWidth" />

        <Grid
          container
          className="footer-links"
          spacing={3}
          style={{ padding: "2rem 0" }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="footer-section-title" variant="h6" paragraph>
              Sobre
            </Typography>
            <Typography paragraph>
              <LinkStyled to="/sobre">Quem é Bruno Chirelli</LinkStyled>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography className="footer-section-title" variant="h6" paragraph>
              Serviços
            </Typography>
            <Typography paragraph>
              <LinkStyled to="/servicos/search-engine-marketing">
                Search Engine Marketing
              </LinkStyled>
            </Typography>
            <Typography paragraph>
              <LinkStyled to="/servicos/criacao-sites">Criação de Sites</LinkStyled>
            </Typography>
            <Typography paragraph>
              <LinkStyled to="/servicos/identidade-visual">
                Criação de Identidade Visual
              </LinkStyled>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography className="footer-section-title" variant="h6" paragraph>
              Mais informações
            </Typography>
            <Typography paragraph>
              <LinkStyled to="/faq">FAQ</LinkStyled>
            </Typography>
            <Typography paragraph>
              <LinkStyled to="/politica-privacidade">Política de privacidade</LinkStyled>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography className="footer-section-title" variant="h6" paragraph>
              Entre em contato
            </Typography>
            <Typography paragraph>
              <LinkStyled to="tel:1940420322">19 4042 0322</LinkStyled>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Copyright />
    </footer>
  );
};

const FooterFeature = styled.div`
  padding: 2rem 0;

  h3 {
    font-size: 1.625rem;
  }

  @media screen and (min-width: 960px) {
    padding: 4rem 0;

    h3 {
      font-size: 2.125rem;
    }
  }
`;

const LinkStyled = styled(Link)`
  color: #505050;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: black;
  }
`;

export default Footer;
