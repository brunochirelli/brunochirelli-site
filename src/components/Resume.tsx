import { Container, Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Resume = () => {
  return (
    <StyledContainer>
      <Grid container>
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
            <div>06/2010 - 06/2014</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </p>
          </Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>Agência Trans Design</h3>
            <div>06/2010 - 06/2014</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </p>
          </Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>SESC Piracicaba</h3>
            <div>06/2010 - 06/2014</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </p>
          </Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>Azoon Propaganda</h3>
            <div>06/2010 - 06/2014</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </p>
          </Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>Web & Designer Freelancer</h3>
            <div>06/2010 - 06/2014</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </p>
          </Grid>
        </Grid>

        {/* Formação */}

        <Grid className="section" item container xs={12} sm={6} spacing={2}>
          {/* título */}
          <Grid item xs={12} md={6}>
            <h2>Formação</h2>
          </Grid>
          <Grid item xs={12} md={6}></Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>Publicidade e Propaganda</h3>
            <div>06/2010 - 06/2014</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </p>
          </Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>UX Design</h3>
            <div>06/2010 - 06/2014</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </p>
          </Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>Desenvolvimento Frontend</h3>
            <div>06/2010 - 06/2014</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </p>
          </Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>Search Engine Optimization</h3>
            <div>06/2010 - 06/2014</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </p>
          </Grid>

          {/* conteúdo */}
          <Grid className="title" item xs={12} md={6}>
            <h3>Search Marketing e PPC</h3>
            <div>06/2010 - 06/2014</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </p>
          </Grid>
        </Grid>
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
