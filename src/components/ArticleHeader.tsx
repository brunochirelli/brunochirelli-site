import { Container, Grid } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

type ArticleHeaderProps = {
  title: string;
  category: string;
  lead: string;
  image: any;
};

const ArticleHeader = ({ title, category, lead, image }: ArticleHeaderProps) => {
  return (
    <StyledHeader>
      <Container>
        <Grid container alignItems="center" justify="space-between" spacing={2}>
          <Grid className="intro-text" item xs={12} sm={5}>
            <small className="category">{category}</small>
            <h1>{title}</h1>
            <p className="lead">{lead}</p>
            <small>9 de dezembro de 2020 - 3 minutos</small>
          </Grid>
          <Grid className="featured-image" item xs={12} sm={6}>
            <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="" />
          </Grid>
        </Grid>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding-top: 7rem;

  @media screen and (min-width: 600px) {
    padding-top: 7rem;
    padding-bottom: 7rem;
  }

  .category {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: bolder;
    text-transform: uppercase;
  }

  h1 {
    color: ${({ theme }) => theme.palette.secondary.main};
    font-size: 1.7em;
    font-family: ${({ theme }) => theme.font.heading};
    line-height: 1.05;

    @media screen and (min-width: 600px) {
      font-size: 3em;
    }
  }

  .intro-text {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .featured-image {
    position: relative;
    order: -1;

    @media screen and (min-width: 600px) {
      order: 1;
    }

    img {
      position: relative;
      width: 90%;
      height: 40vh;
      object-fit: cover;
      overflow: hidden;
      border-radius: 10px;

      @media screen and (min-width: 600px) {
        height: 50vh;
      }
    }

    &::before {
      position: absolute;
      top: 10%;
      left: 10%;
      display: block;
      width: 90%;
      height: 40vh;
      background: ${({ theme }) => theme.palette.primary.main};
      border-radius: 10px;
      content: " ";

      @media screen and (min-width: 600px) {
        height: 50vh;
      }
    }
  }
`;

export default ArticleHeader;
