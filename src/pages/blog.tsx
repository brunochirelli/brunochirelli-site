import React from "react";
import { graphql } from "gatsby";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";

import { Box, Container, Grid, Typography } from "@material-ui/core";

import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import PostCard from "../components/PostCard";
import { Button, CardActionArea, Link } from "gatsby-material-ui-components";

type BlogPageProps = {
  data: {
    allMarkdownRemark: {
      nodes: {
        id: string;
        excerpt: string;
        frontmatter: {
          category: string;
          slug: string;
          title: string;
          type: "post";
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

const BlogPage = ({ data }: BlogPageProps) => {
  const lastPost = data.allMarkdownRemark.nodes[0];
  const allOtherPosts = data.allMarkdownRemark.nodes.filter((e, i) => i !== 0);

  return (
    <Layout seo={{ title: "Blog | Bruno Chirelli" }}>
      <PageHeader
        title="Blog"
        lead="Aqui você pode obter informações relacionadas a Search Engine Marketing e saber um pouco mais como penso sobre diversos assuntos"
      />

      {/* Featured Post */}
      <Container>
        <Grid container spacing={3} alignItems="center" style={{ background: "white" }}>
          <Grid item xs={12} sm={6} md={8}>
            <CardActionArea to={`/blog/${lastPost.frontmatter.slug}`}>
              <GatsbyImage
                image={lastPost.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                alt={lastPost.frontmatter.title}
              />
            </CardActionArea>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography variant="overline">{lastPost.frontmatter.category}</Typography>
              <Typography variant="h4" component="h2" paragraph>
                <Link to={`/blog/${lastPost.frontmatter.slug}`}>
                  {lastPost.frontmatter.title}
                </Link>
              </Typography>
              <Typography variant="body1" paragraph>
                {lastPost.excerpt}
              </Typography>
              <Button
                to={`/blog/${lastPost.frontmatter.slug}`}
                variant="contained"
                color="secondary"
                disableElevation
              >
                Leia mais
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Feed */}
      <Container>
        <Grid container spacing={3}>
          {allOtherPosts.map(post => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <PostCard
                title={post.frontmatter.title}
                category={post.frontmatter.category}
                slug={post.frontmatter.slug}
                excerpt={post.excerpt}
                image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          category
          title
          type
          slug
          featuredImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        timeToRead
        excerpt
        id
      }
    }
  }
`;

export default BlogPage;
