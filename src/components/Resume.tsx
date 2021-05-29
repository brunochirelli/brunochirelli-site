import { Container, Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Resume = () => {
  return (
    <StyledContainer>
      <Grid container id="resume">
        {/* Experiência */}

        <Grid className="section" item container xs={12} sm={6} spacing={2}>
          {/* título */}
          <Grid item xs={12} md={6}>
            <h2>Experiência</h2>
          </Grid>
          <Grid item xs={12} md={6}></Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>Jornal Folha Cidade</h3>
            <div>07/2009 - 07/2013</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Diretor de arte responsável pela diagramação, arte de anúncios e fechamento.
            </p>
          </Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>Agência Trans Design</h3>
            <div>07/2013 - 07/2014</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Designer responsável por desenvolvimento de identidades visuais e criação de
              sites em WordPress.
            </p>
          </Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>SESC Piracicaba</h3>
            <div>01/2015 - 01/2017</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Estagiário do setor de comunicação. Responsável pela diagramação do caderno
              mensal, aplicação de identidades visuais, posts para redes sociais e
              materiais gráficos para projetos da unidade.
            </p>
          </Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>Agência Azoon Propaganda</h3>
            <div>01/2017 - 07/2017</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Diretor de arte responsável pelo departamento de design, desenvolvimento de
              planejamentos, pesquisas e suporte ao atendimento com o cliente.
            </p>
          </Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>Web & Designer Freelancer</h3>
            <div>01/2013 - Momento</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Designer e desenvolvedor freelancer. Desenvolvo identidades visuais,
              websites (frontend React com Gatsby e backend com headless CMSs), campanhas
              digitais, gestão de SEO e conteúdo além de criação de reports de ferramentas
              de analytics como o Google Analytics e softwares de gestão de SEO.
            </p>
          </Grid>
        </Grid>

        {/* Formação */}

        <Grid
          className="section"
          item
          container
          xs={12}
          sm={6}
          spacing={2}
          alignContent="flex-start"
        >
          {/* título */}
          <Grid item xs={12} md={6}>
            <h2>Formação</h2>
          </Grid>
          <Grid item xs={12} md={6}></Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>Publicidade e Propaganda</h3>
            <div>UNIMEP</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>Bacharel em comunicação com ênfase em publicidade e propaganda.</p>
          </Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>UX Design</h3>
            <div>Google</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>UX Designer pelo Google em Coursera.</p>
          </Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>Desenvolvimento Frontend</h3>
            <div>Linkedin, Udemy, Livros</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>Autodidata por cursos no Linkedin Learning, Udemy e livros do assunto.</p>
          </Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>Search Engine Optimization</h3>
            <div>SEMRush, HubSpot</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>Consultor de SEO certificado pelo SEMRush e Hubspot.</p>
          </Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>Search Marketing e PPC</h3>
            <div>Google e Facebook</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>Certificado pelas plataformas Google Ads Academy e Facebook Blueprint.</p>
          </Grid>
        </Grid>

        {/* idioma */}
      </Grid>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  p {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 0.9em;
  }

  .title {
    h3 {
      margin: 0;
      font-family: ${({ theme }) => theme.font.heading};
    }

    div {
      font-size: 0.8em;
    }

    @media screen and (min-width: 600px) {
      text-align: right;
    }
  }

  .section {
    margin-bottom: 3rem;

    h2 {
      margin: 0;
      margin-bottom: 2rem;
      font-family: ${({ theme }) => theme.font.heading};

      @media screen and (min-width: 600px) {
        text-align: right;
      }
    }
  }
`;

export default Resume;
