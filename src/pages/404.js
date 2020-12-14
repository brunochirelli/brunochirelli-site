import React from 'react';
import { Typography, Container, Box } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';
import SEO from '../components/layout/SEO';

const NotFoundPage = () => {
    const getBack = e => {
        e.preventDefault();
        // eslint-disable-next-line no-restricted-globals
        history.back();
    };

    return (
        <Container>
            <SEO slug="404" />
            <Typography variant="h1">404</Typography>
            <Typography variant="h2" paragraph>
                Ops! Página não encontrada
            </Typography>
            <Typography paragraph>
                Parece que a página que você estava procurando não foi encontrada ou não está mais aqui.
            </Typography>
            <Box marginY="1rem">
                <Button onClick={getBack} variant="outlined" color="primary" style={{ marginRight: '0.75rem' }}>
                    Voltar para a última página
                </Button>
                <Button to="/" variant="outlined" color="secondary" style={{ marginRight: '0.75rem' }}>
                    Ir para a home
                </Button>
            </Box>
        </Container>
    );
};

export default NotFoundPage;
