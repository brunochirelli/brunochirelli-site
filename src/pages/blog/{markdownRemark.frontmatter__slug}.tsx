import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";

type BlogPostProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        slug: string;
        title: string;
        category: string;
      };
    };
  };
};

const BlogPost = ({ data }: BlogPostProps) => {
  const { title } = data.markdownRemark.frontmatter;

  return (
    <Layout seo={{ title: `${title} | Bruno Chirelli` }}>
      <h1>{title}</h1>
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "post" } }) {
      frontmatter {
        slug
        title
        category
      }
    }
  }
`;

export default BlogPost;
