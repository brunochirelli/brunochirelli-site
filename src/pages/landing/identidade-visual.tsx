import React from "react";

import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import PortfolioRow from "../../components/PortfolioRow";
import Benefit from "../../components/Benefit";
import Service from "../../components/Service";

import likeSketch from "../../images/svgs/likeSketch.svg";
import FormContact from "../../components/FormContact";
import { Container } from "@material-ui/core";
import SectionHeader from "../../components/SectionHeader";

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

      <Container maxWidth="sm" id="id-contato">
        <SectionHeader title="Entre em Contato" />
        <FormContact />
      </Container>
    </Layout>
  );
};

export default IdentidadeVisual;
