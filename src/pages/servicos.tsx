import { Container, Grid } from "@material-ui/core";
import { graphql } from "gatsby";
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";

type ServicosPageProps = {
  data: {
    allMarkdownRemark: {
      nodes: {
        frontmatter: {
          category: string;
          title: string;
          service: string;
          type: string;
          slug: string;
          featuredImage: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
      }[];
    };
  };
};

const ServicosPage = ({ data }: ServicosPageProps) => {
  // separate the query
  const identidadeVisual = data.allMarkdownRemark.nodes.filter(
    node => node.frontmatter.slug === "identidade-visual"
  )[0];
  const marketingBusca = data.allMarkdownRemark.nodes.filter(
    node => node.frontmatter.slug === "marketing-de-busca"
  )[0];
  const criacaoSites = data.allMarkdownRemark.nodes.filter(
    node => node.frontmatter.slug === "criacao-sites"
  )[0];

  // getImages from each service
  const imageIV =
    identidadeVisual.frontmatter.featuredImage.childImageSharp.gatsbyImageData;

  const imageCS = criacaoSites.frontmatter.featuredImage.childImageSharp.gatsbyImageData;

  const imageMB =
    marketingBusca.frontmatter.featuredImage.childImageSharp.gatsbyImageData;

  return (
    <Layout seo={{ title: "Serviços - Bruno Chirelli" }}>
      <PageHeader
        title="Projetos customizados de baixo custo que te ajudam a vencer no Google"
        overline="Search Engine Marketing"
        lead="Todo esforço de marketing digital começa com o foco em mecanismos de busca como o Google. Por que? Porque é aqui que você tem o maior retorno sob investimento (ROI)."
      />

      <Container>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} sm={4}>
            <ServiceCard
              image={imageIV}
              title={identidadeVisual.frontmatter.service}
              slug={identidadeVisual.frontmatter.slug}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ServiceCard
              image={imageCS}
              title={criacaoSites.frontmatter.service}
              slug={criacaoSites.frontmatter.slug}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ServiceCard
              image={imageMB}
              title={marketingBusca.frontmatter.service}
              slug={marketingBusca.frontmatter.slug}
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "service" } } }) {
      nodes {
        frontmatter {
          category
          service
          title
          type
          slug
          featuredImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`;

export default ServicosPage;
