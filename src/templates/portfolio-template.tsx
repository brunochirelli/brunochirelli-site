import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Article from "../components/Article";
import ArticleHeader from "../components/ArticleHeader";
import Layout from "../components/Layout";

const BlogSingle = ({ pageContext }: any) => {
  const { title, lead, category, featuredImage, image } = pageContext;

  return (
    <Layout seo={{ title }}>
      <ArticleHeader
        title={title}
        lead={lead}
        category={category}
        image={featuredImage}
      />

      <Article>
        {image.map((each: any, i: number) => (
          <GatsbyImage
            image={each.childImageSharp.gatsbyImageData}
            alt=""
            key={title + i}
          />
        ))}
      </Article>
    </Layout>
  );
};

export default BlogSingle;
