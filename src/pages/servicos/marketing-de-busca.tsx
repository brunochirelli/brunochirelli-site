import React from "react";
import { graphql } from "gatsby";

import Feature from "../../components/Feature";
import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import ServiceAboutMe from "../../components/ServiceAboutMe";

import identificacao from "../../images/services/identificacao.svg";
import experienciaCompra from "../../images/services/experienciaCompra.svg";
import consumidor from "../../images/services/consumidor.svg";
import ppc from "../../images/services/ppc.svg";
import brain from "../../images/services/brain.svg";
import audit from "../../images/services/audit.svg";

const MarketingBuscaPage = () => {
  return (
    <Layout seo={{ title: "Criação de Sites - Bruno Chirelli" }}>
      <PageHeader
        overline="Especialista em Marketing de Busca"
        title="Minha missão é ajudar você extrair o melhor dos mecanismos de busca como o Google"
        lead="Para empresas em todos os estágios que querem ganhar mais no momento que seu cliente está procurando."
      />

      <Feature
        imagePath={identificacao}
        overline="Economize e Lucre Mais"
        title="Marketing em mecanismos de busca tem o maior retorno comprovado"
        description="Uma pesquisa do próprio Google mediu que o retorno sobre investimento em sua plataforma gera um retorno de 8 para 1, ou seja, 800% é a média das campanhas bem executadas."
        ctaText="Entre em Contato Agora"
      />

      <Feature
        imagePath={experienciaCompra}
        overline="A Internet Mudou a Forma de Comprar"
        title="Mecanismos de busca mudaram a jornada de compra"
        description="Pesquisar no Google por produtos ou serviços é rotina para grande parte das pessoas. Hoje 95% das pessoas pesquisam online antes de decidir qual produto e em que loja comprar. Portanto, os mecanismos de busca são perfeitos para levar seus produtos no momento ideal."
      />

      <Feature
        imagePath={consumidor}
        overline="Esteja Presente de Verdade"
        title="Os consumidores estão mais exigentes"
        description="Não basta estar presente, mas sim da melhor forma possível, pois seu consumidor exige isso. Sites rápidos e feitos para mobile já não são mais um diferencial, são obrigações."
      />

      <Feature
        imagePath={ppc}
        overline="Saia na Frente"
        title="Seus concorrentes estão ignorando o poder do SEM"
        description="Voltar seus esforços para o marketing em mecanismos de busca é uma vantagem, já que menos de 35% das empresas no estado de São Paulo recorrem a internet para divulgar seus produtos ou serviços. Essa é a hora de você sair na frente."
      />

      <Feature
        imagePath={brain}
        overline="Estatísticas Precisas"
        title="Obtenha o melhor resultado com o machine learning"
        description="Mecanismos de busca como o Google sabem o perfil de quem está procurando e com seu aprendizado de máquina (machine learning) entrega o anúncio de sua empresa no momento perfeito."
      />

      <Feature
        imagePath={audit}
        overline="Auditoria de SEO"
        title="Eu posso te ajudar, hoje"
        description="Eu ofereço inteiramente grátis uma análise do seu site para saber como andam seus esforços de SEO. Você receberá um relatório completo do que precisa para melhorar desde conteúdo até a parte técnica."
      />

      <ServiceAboutMe />
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "marketing-de-busca" } }) {
      frontmatter {
        slug
        title
      }
    }
  }
`;

export default MarketingBuscaPage;
