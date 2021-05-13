import React from "react";
import { Container, Grid } from "@material-ui/core";

import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";
import ArticleCard from "../components/ArticleCard";

import lightSketch from "../images/svgs/lightSketch.svg";

const BlogPage = () => {
  const articles = [
    {
      title:
        "Como uma identidade visual impacta o desempenho do seu negócio digital no século XXI",
    },
    {
      title:
        "Como uma identidade visual impacta o desempenho do seu negócio digital no século XXI",
    },
    {
      title:
        "Como uma identidade visual impacta o desempenho do seu negócio digital no século XXI",
    },
  ];
  return (
    <Layout>
      <PageHeader
        sketch={lightSketch}
        title="Ideias e pensamentos que desenvolvi durante minha jornada e que quero compartilhar com você"
      />
      <SectionHeader title="Blog" />

      <Container>
        <Grid container spacing={3}>
          {articles.map((art, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <ArticleCard title={art.title} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default BlogPage;
