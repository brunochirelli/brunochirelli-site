import React from "react";
import Layout from "../components/Layout";
import { Container } from "@material-ui/core";
import FormContact from "../components/FormContact";
import PageHeader from "../components/PageHeader";

const Contato = () => {
  return (
    <Layout seo={{ title: "Contato | Bruno Chirelli" }}>
      <PageHeader
        title="Entre em contato"
        ctaLink="#form-contact"
        ctaText="Vamos conversar"
      />

      <Container maxWidth="sm">
        <FormContact />
      </Container>
    </Layout>
  );
};

export default Contato;
