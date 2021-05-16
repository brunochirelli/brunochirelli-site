import React from "react";

import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import PortfolioRow from "../../components/PortfolioRow";
import Benefit from "../../components/Benefit";
import Service from "../../components/Service";

import likeSketch from "../../images/svgs/likeSketch.svg";
import FormContact from "../../components/FormContact";
import { Container, Grid } from "@material-ui/core";
import SectionHeader from "../../components/SectionHeader";
import AboutMe from "../../components/AboutMe";

const IdentidadeVisual = () => {
  return (
    <Layout>
      <PageHeader
        title="Desenvolvimento de Identidades Visuais Digitais para empresas que querem divulgar em redes sociais e mecanismos de busca"
        sketch={likeSketch}
        ctaLink="#servicos"
        ctaText="Conheça meus serviços"
      />

      <PortfolioRow />

      <Benefit />

      <Service />

      <AboutMe />

      <Container>
        <SectionHeader title="Contato" />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} id="id-contato">
            <FormContact />
          </Grid>
          <Grid item xs={12} md={6}>
            FAQ
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default IdentidadeVisual;
