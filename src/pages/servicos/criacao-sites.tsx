import React from "react";
import { graphql } from "gatsby";
import { Box, Container, Grid } from "@material-ui/core";

import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import Feature from "../../components/Feature";
import ServiceAboutMe from "../../components/ServiceAboutMe";

import searchEngine from "../../images/services/searchEngine.svg";
import responsiveDesign from "../../images/services/responsiveDesign.svg";
import jamstack from "../../images/services/jamstack.svg";
import gatsby from "../../images/services/gatsby.svg";
import garantia from "../../images/services/garantia.svg";

type CriacaoSitesPageProps = {
  data: any;
};

const CriacaoSitesPage = ({ data }: CriacaoSitesPageProps) => {
  return (
    <Layout seo={{ title: "Criação de Sites - Bruno Chirelli" }}>
      <PageHeader
        overline="JAMStack, Gatsby e CMS"
        title="Criação de sites customizados com foco em mecanismos de busca"
        lead="Desenvolvimento de sites ultra-rápidos com JAMStack e Gatsby.js para te ajudar vencer nos mecanismos de busca como o Google feitos do zero por um publicitário especialista em marketing de busca."
      />
      {console.log(data)}
      <Feature
        imagePath={responsiveDesign}
        overline="Completo para o Google"
        title="Design e código 100% responsivos e customizados"
        description="Todo design e experiência do usuário é voltado primeiro para o mobile, assim como todo código é feito sob medida para atender seu consumidor."
      />

      <Feature
        imagePath={searchEngine}
        overline="Mobile-first"
        title="Otimizado para SEO"
        description="Search Engine Optimization é fundamental para qualquer empresa que deseja voltar seus esforços de marketing para a internet. Para isso, todo site tem um SEO técnico impecável, pois o código é escrito sob medida."
      />

      <Feature
        imagePath={jamstack}
        overline="JAMStack"
        title="Sites ultra-rápidos com JAMStack"
        description="Com JAMStack e um CMS (gerenciador de conteúdo) você obtém a mais moderna tecnologia para ter um site que não é apenas rápido (aberto em menos de 3s em redes 3G), mas ideal para quem deseja aparecer e anunciar no Google."
      />

      <Feature
        imagePath={gatsby}
        overline="Últimas tecnologias"
        title="Gatsby.js e CMS, uma combinação poderosa"
        description="Gatsby.js é um framework de React.js que usa como base as boas práticas do JAMStack tornando o site eficiente, rápido, seguro e pronto para atingir qualquer objetivo de marketing."
      />

      <Feature
        imagePath={garantia}
        overline="Garantia"
        title="Você 100% satisfeito"
        description="Ajustaremos seu projeto até você estar completamente satisfeito com o resultado final."
      />

      <ServiceAboutMe />

      <Container>
        <Grid container>
          <Grid item xs={12} md={7}></Grid>
          <Grid item xs={12} md={5}>
            <Box></Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "criacao-sites" } }) {
      frontmatter {
        slug
        title
      }
    }
  }
`;

export default CriacaoSitesPage;
