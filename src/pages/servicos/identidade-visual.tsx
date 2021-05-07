import React from "react";
import Feature from "../../components/Feature";
import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import ServiceAboutMe from "../../components/ServiceAboutMe";

import escritorio from "../../images/services/escritorio.svg";
import visibilidade from "../../images/services/visibilidade.svg";
import identificacao from "../../images/services/identificacao.svg";
import lealdade from "../../images/services/lealdade.svg";
import experienciaCompra from "../../images/services/experienciaCompra.svg";
import maiorMelhor from "../../images/services/maiorMelhor.svg";
import { graphql } from "gatsby";

type IdentidadeVisualPageProps = {
  data: any;
};

const IdentidadeVisualPage = ({ data }: IdentidadeVisualPageProps) => {
  return (
    <Layout seo={{ title: "Identidade Visual - Bruno Chirelli" }}>
      <PageHeader
        overline="MAIS QUE LOGOTIPO"
        title="Criação de Identidade Visual para empresas que valorizam relacionamentos"
        lead="Identidade visual é bem mais que um logotipo, é o conjunto de características que tornam seu negócio único."
      />
      {console.log(data)}
      <Feature
        imagePath={escritorio}
        overline="CONQUISTE SEUS CLIENTES"
        title="Você precisa de uma identidade e não só um logotipo"
        description="Um logotipo é o coração da sua identidade visual. Um coração sozinho, sem suas veias e outros órgãos não consegue atingir o resultado esperado."
      />

      <Feature
        imagePath={visibilidade}
        overline="TORNE SUA MARCA POPULAR"
        title="Mais visibilidade da empresa e de seus produtos"
        description="Uma identidade visual contribui para aumentar o reconhecimento da marca, influenciando diretamente seu consumidor. Quem nunca definiu a qualidade de algo apenas pela embalagem?"
      />

      <Feature
        imagePath={identificacao}
        overline="SEJA MAIS CONSISTENTE"
        title="Facilite a identificação da sua marca"
        description="Quanto mais e melhor visto, mais seu consumidor irá considerar experimentar seu produto, ainda mais se a marca corresponder positivamente em sua primeira impressão."
      />

      <Feature
        imagePath={lealdade}
        overline="CONSUMIDORES LEAIS"
        title="Aumente a lealdade e confiança dos seus consumidores"
        description="Identidade que reflete os valores da marca, deixa o consumidor mais satisfeito por adquirir seus serviços levando-os a serem leais a sua marca em compras futuras."
      />

      <Feature
        imagePath={experienciaCompra}
        overline="SEJA RECONHECIDO"
        title="Melhore a experiência de compra"
        description="Uma boa identidade visual torna a experiência da compra muito mais agradável. Quando uma empresa é facilmente reconhecida, sua marca se torna inconfundível em todos os níveis tornando a negociação muito mais confiável."
      />

      <Feature
        imagePath={maiorMelhor}
        overline="SEJA GRANDE"
        title="Uma ótima identidade te torna maior e melhor"
        description="Uma marca deve aparentar ser grande desde o início de sua criação. Dessa forma não apenas consumidores te respeitarão, mas funcionários e fornecedores. Dessa forma você cria uma atmosfera de parceiros abertos a sua missão."
      />

      <ServiceAboutMe />
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "identidade-visual" } }) {
      frontmatter {
        slug
        title
      }
    }
  }
`;

export default IdentidadeVisualPage;
