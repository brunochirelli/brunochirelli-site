import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Article from "../components/Article";

/**
 * About Page
 *
 * @goal
 * @keywords
 */

type AboutPageProps = {
  data: any;
};

const AboutPage = ({ data }: AboutPageProps) => {
  const { html } = data.markdownRemark;

  return (
    <Layout seo={{ title: "Sobre - Bruno Chirelli" }}>
      <PageHeader
        title="Quem é Bruno Chirelli"
        overline="Curiosidade, estudo e mãos à obra"
        lead="Saiba um pouco mais sobre mim e entenda um pouco mais a forma como penso"
        center
      />

      <Article html={html} />
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "sobre" } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;

export default AboutPage;
