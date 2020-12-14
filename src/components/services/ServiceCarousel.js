import React from 'react';
import { Container, Grid } from '@material-ui/core';
import ServiceSingleCard from './ServiceSingleCard';

const ServiceCarousel = () => (
    <Container style={{ margin: '5rem auto' }}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>
                <ServiceSingleCard
                    overline="Overline"
                    title="Search Engine Marketing"
                    image="https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    ctaLink="/servicos/search-engine-marketing"
                />
            </Grid>
            {/* <Grid item xs={12} sm={6} lg={4}>
                <ServiceSingleCard
                    overline="Overline"
                    title="Search Engine Optimization"
                    image="https://image.freepik.com/fotos-gratis/mano-arrumar-letras-brancas-como-seo_1384-21.jpg"
                    ctaLink="/servicos/search-engine-optimization"
                />
            </Grid> */}
            <Grid item xs={12} sm={6} lg={4}>
                <ServiceSingleCard
                    overline="Overline"
                    title="Criação de Sites (SPA)"
                    image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    ctaLink="/servicos/criacao-sites"
                />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <ServiceSingleCard
                    overline="Overline"
                    title="Identidade visual"
                    image="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                    ctaLink="/servicos/identidade-visual"
                />
            </Grid>
        </Grid>
    </Container>
);

export default ServiceCarousel;
