import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Container, Grid } from "@material-ui/core";

import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";

import caseSketch from "../images/svgs/caseSketch.svg";

const PortfolioPage = () => {
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
          {projects.map((project, i) => (
            <Grid className="project-card" item xs={12} sm={5} key={i}>
              <Link to="/portfolio/single">
                <img
                  src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                  alt=""
                />
              </Link>

              <h2>
                <Link to="/portfolio/single">{project.title}</Link>
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

export default PortfolioPage;
