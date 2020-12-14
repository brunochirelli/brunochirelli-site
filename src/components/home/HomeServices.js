import React from 'react';
import { Container, Grid } from '@material-ui/core';

import ServiceSingleCard from '../services/ServiceSingleCard';

import allImages from '../../queries/allImages';

const HomeServices = () => {
    const data = allImages().filter(
        img => img.name === 'coder' || img.name === 'google-cookie' || img.name === 'identidade'
    );
    return (
        <Container style={{ margin: '5rem auto' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={4}>
                    <ServiceSingleCard
                        overline="Marketing de Busca"
                        title="Search Engine Marketing"
                        ctaLink="/servicos/search-engine-marketing"
                        image={data[1].childImageSharp.fluid}
                    />
                </Grid>
                {/* <Grid item xs={12} sm={6} lg={3}>
                <ServiceSingleCard
                    overline="Otimize sua busca"
                    title="Search Engine Optimization"
                    image="https://image.freepik.com/fotos-gratis/mano-arrumar-letras-brancas-como-seo_1384-21.jpg"
                    ctaLink={`/servicos/search-engine-optmization`}
                />
            </Grid> */}
                <Grid item xs={12} sm={6} lg={4}>
                    <ServiceSingleCard
                        overline="Single-Page-Application"
                        title="Criação de Sites"
                        image={data[0].childImageSharp.fluid}
                        ctaLink="/servicos/criacao-sites"
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ServiceSingleCard
                        overline="Mais que um logotipo"
                        title="Identidade visual"
                        image={data[2].childImageSharp.fluid}
                        ctaLink="/servicos/identidade-visual"
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomeServices;
