import React from "react";
import styled from "styled-components";

import { Container, Grid, Hidden } from "@material-ui/core";

import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Resume from "../components/Resume";

import manSketch from "../images/svgs/manSketch.svg";
import ideaSketch from "../images/svgs/ideaSketch.svg";
import SectionHeader from "../components/SectionHeader";
import AboutMe from "../components/AboutMe";
import useAllPngs from "../queries/useAllPngs";

/**
 * About Page
 *
 * @goal
 * @keywords
 */

// type AboutPageProps = {};

const AboutPage = () => {
  const manSketch = useAllPngs("manSketch.png");

  return (
    <Layout seo={{ title: "Sobre - Bruno Chirelli" }}>
      <PageHeader
        title="Publicitário e UX Designer com mais de 10 anos de experiência que usa linhas em design e de código para solucionar problemas não lineares"
        sketch={manSketch}
        ctaText="Veja meu currículo"
        ctaLink="#resume"
      />

      <StyledContainer>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={6}>
            <div className="content">
              <blockquote>
                <p>
                  "Eu não daria um tostão pela simplicidade neste lado que antecede a
                  complexidade, mas daria minha vida pela simplicidade que está do outro
                  lado da complexidade"
                </p>
                <cite>
                  <b>Oliver Wendell Holmes</b>
                  <i>Ministro da Suprema Corte dos Estados Unidos</i>
                </cite>
              </blockquote>
              <p>
                Sou um apaixonado por comunicação, psicologia, sociologia e marketing que
                acredita que depois dos esforços corretos para o bem comum a recompensa é
                gigantesca e vantajosa diante do esforço.
              </p>
            </div>
          </Grid>
          <Hidden smDown>
            <Grid
              item
              xs={12}
              sm={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img src={ideaSketch} alt="" />
            </Grid>
          </Hidden>
        </Grid>
      </StyledContainer>

      <Container>
        <AboutMe />
      </Container>

      <SectionHeader title="Resumé" />

      <Resume />
    </Layout>
  );
};

const StyledContainer = styled(Container)`
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media screen and (min-width: 600px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  blockquote {
    margin: 0;

    p {
      font-size: 1.8rem;
      font-family: ${({ theme }) => theme.font.heading};
      line-height: 1.2;
    }

    cite {
      i,
      b {
        display: block;
      }

      b {
        font-style: normal;
      }
    }
  }
`;

export default AboutPage;
