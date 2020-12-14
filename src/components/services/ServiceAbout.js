import React from 'react';
import styled from 'styled-components';
import Gravatar from 'react-gravatar';

import { Box, Container, Typography, Grid, Avatar } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';
import CertificateLogos from '../image/CertificateLogos';

const ServiceAbout = () => (
    <Container maxWidth="md" component={Box} marginY="4rem" textAlign="center">
        <Box>
            <Avatar style={{ width: '250px', height: '250px', objectFit: 'cover', margin: '2rem auto' }}>
                <Gravatar email="brunochirelli@gmail.com" size={250} className="rounded-circle" />
            </Avatar>
        </Box>
        <Box marginBottom="2rem">
            <Typography variant="overline">Especialista Certificado</Typography>
            <Typography variant="h4" component="h2" paragraph>
                Bruno Chirelli é certificado pelas maiores empresas do mercado
            </Typography>
        </Box>
        <CertificateLogos />
        <Box marginY="1.5rem">
            <Typography paragraph>
                Publicitário de formação, desenvolvedor e designer com mais de 8 anos de experiência em design de
                marcas, especialista em marketing para mecanismos de busca certificado pelas empresas líderes de
                mercado.
            </Typography>
        </Box>
        <Button to="/sobre" variant="contained" color="primary" style={{ margin: '0.5rem' }}>
            Me conheça mais
        </Button>
        <Button to="/sobre" variant="contained" color="secondary" style={{ margin: '0.5rem' }}>
            Veja meu portfólio
        </Button>
    </Container>
);

export default ServiceAbout;
