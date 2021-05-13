import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Container, Grid } from "@material-ui/core";

import Button from "./Button";

type FeatureSectionProps = {
  title: string;
  lead: string;
  slug: string;
  ctaText?: string;
  projectTitle1: string;
  projectSlug1: string;
  projectImage1?: any;
  projectTitle2: string;
  projectSlug2: string;
  projectImage2?: any;
};

const FeatureSection = ({
  title,
  lead,
  slug,
  ctaText = "Veja mais projetos",
  projectTitle1,
  projectSlug1,
  projectImage1,
  projectTitle2,
  projectSlug2,
  projectImage2,
}: FeatureSectionProps) => {
  return (
    <StyledContainer>
      <section>
        <Grid container justify="space-between" alignItems="center" spacing={3}>
          <Grid item xs={12} sm={4} component="header">
            <h2>
              <Link to={`/servicos/${slug}`}>{title}</Link>
            </h2>
            <div>
              <p>{lead}</p>
              <Button to={`/servicos/${slug}`}>{ctaText}</Button>
            </div>
          </Grid>

          <Grid
            item
            container
            xs={12}
            sm={8}
            md={7}
            justify="space-around"
            spacing={2}
            component="article"
          >
            <Grid item xs={12} sm={6} className="port-proj-1">
              <Link to={`/portfolio/${projectSlug1}`}>
                <img
                  src="https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt=""
                />
              </Link>
              <div className="project-title">
                <h3>
                  <Link to={`/portfolio/${projectSlug1}`}>{projectTitle1}</Link>
                </h3>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} className="port-proj-2">
              <Link to={`/portfolio/${projectSlug2}`}>
                <img
                  src="https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt=""
                />
              </Link>
              <div className="project-title">
                <h3>
                  <Link to={`/portfolio/${projectSlug2}`}>{projectTitle2}</Link>
                </h3>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  .project-title {
    display: none;
  }

  img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
    overflow: hidden;
    border-radius: 0.55rem;

    /* @media screen and (min-width: 600px) {
    } */

    @media screen and (min-width: 900px) {
      height: 28rem;

      &.port-proj-1 {
        position: relative;
        top: -2rem;
      }

      &.port-proj-2 {
        position: relative;
        bottom: -2rem;
      }
    }
  }

  h2 {
    color: ${({ theme }) => theme.palette.secondary.main};
    font-family: "Bely", "Open Sans", "Roboto", "sans-serif";

    a {
      text-decoration: none;
    }
  }

  @media screen and (min-width: 900px) {
    margin-bottom: 3rem;

    .project-title {
      display: block;

      h3 {
        margin: 0;
        padding: 0;

        a {
          text-decoration: none;
        }
      }
    }

    section {
      padding-top: 4rem;
    }

    .port-proj-1 {
      position: relative;
      top: -2rem;
    }

    .port-proj-2 {
      position: relative;
      bottom: -2rem;
    }
  }
`;

export default FeatureSection;
