import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

const Servicos = () => {
  return (
    <Layout seo={{ title: "Serviços - Bruno Chirelli" }}>
      <PageHeader
        title="Projetos customizados de baixo custo que te ajudam a vencer no Google"
        overline="Search Engine Marketing"
        lead="Todo esforço de marketing digital começa com o foco em mecanismos de busca como o Google. Por que? Porque é aqui que você tem o maior retorno sob investimento (ROI)."
      />
    </Layout>
  );
};

export default Servicos;
