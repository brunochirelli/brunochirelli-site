import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { Container, Grid } from "@material-ui/core";

import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";
import useAllPngs from "../queries/useAllPngs";
import { GatsbyImage } from "gatsby-plugin-image";

type PortfolioPageProps = {
  data: any;
};

const PortfolioPage = ({ data }: PortfolioPageProps) => {
  const caseSketch = useAllPngs("caseSketch.png");

  const portfolio = data.allMarkdownRemark.edges;

  const projects = [
    { title: "Flexsun" },
    { title: "Fazenda dos Turcos" },
    { title: "Selva Cross T." },
    { title: "Marcela M. Landgraf" },
  ];
  return (
    <Layout seo={{ title: "Portfolio | Bruno Chirelli" }}>
      <PageHeader sketch={caseSketch} title="Últimos trabalhos desenvolvidos" />
      <SectionHeader title="Portfolio" />

      <Container>
        <StyledGrid container justify="space-around" spacing={3}>
          {portfolio.map((project: any, i: number) => (
            <Grid
              className="project-card"
              item
              xs={12}
              sm={5}
              key={project.node.frontmatter.title + i}
            >
              <Link to={`/portfolio/${project.node.frontmatter.slug}`}>
                <GatsbyImage
                  image={
                    project.node.frontmatter.featuredImage.childImageSharp.gatsbyImageData
                  }
                  alt=""
                />
              </Link>

              <h2>
                <Link to={`/portfolio/${project.node.frontmatter.slug}`}>
                  {project.node.frontmatter.title}
                </Link>
              </h2>
            </Grid>
          ))}
        </StyledGrid>
      </Container>
    </Layout>
  );
};

const StyledGrid = styled(Grid)`
  position: relative;

  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    object-position: center;
    background: gray;
    border-radius: 0.5rem;

    @media screen and (min-width: 900px) {
      height: 70vh;
    }
  }

  .project-card {
    position: relative;
    margin-bottom: 1rem;

    h2 {
      margin: 0;
      text-align: center;

      a {
        text-decoration: none;
      }

      @media screen and (min-width: 600px) {
        text-align: left;
      }
    }

    @media screen and (min-width: 600px) {
      margin-bottom: 6rem;

      &:nth-of-type(even) {
        top: 5rem;
      }
    }
  }
`;

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "portfolio" } } }) {
      edges {
        node {
          frontmatter {
            title
            slug
            category
            type
            lead
            featuredImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            images {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

export default PortfolioPage;
