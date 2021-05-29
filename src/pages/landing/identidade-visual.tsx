import React from "react";

import { Container, Grid } from "@material-ui/core";

import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import PortfolioRow from "../../components/PortfolioRow";
import Benefit from "../../components/Benefit";
import Service from "../../components/Service";
import SectionHeader from "../../components/SectionHeader";
import FormContact from "../../components/FormContact";
import AboutMe from "../../components/AboutMe";
import useAllPngs from "../../queries/useAllPngs";

const IdentidadeVisual = () => {
  const likeSketch = useAllPngs("likeSketch.png");

  return (
    <Layout landing="identidade">
      <PageHeader
        title="Desenvolvimento de Identidades Visuais Digitais para empresas que querem divulgar em redes sociais e mecanismos de busca"
        sketch={likeSketch}
        ctaLink="#services"
        ctaText="Conheça meus serviços"
      />

      <PortfolioRow />

      <Benefit />

      <Service />

      <Container>
        <AboutMe />
      </Container>

      <Container maxWidth="sm">
        <SectionHeader title="Contato" />
        <FormContact />
      </Container>
    </Layout>
  );
};

export default IdentidadeVisual;
