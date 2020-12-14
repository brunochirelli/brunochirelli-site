import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import { Button, Link } from 'gatsby-theme-material-ui';

const CardFeature = () => (
    <Container maxWidth="md">
        <Grid container>
            <Grid item md={6}>
                <Typography variant="overline" component="small">
                    Marketing de Busca
                </Typography>
                <Typography variant="h3" component="h2">
                    Marketing de Busca
                </Typography>
                <Typography variant="body1" component="p">
                    Estar presente não apenas na internet, mas no momento que seu público quer comprar.
                </Typography>
                <Link>
                    <Button variant="outlined" color="primary">
                        Saiba mais
                    </Button>
                </Link>
            </Grid>
            <Grid item md={6}>
                Imagem destaque
            </Grid>
        </Grid>
    </Container>
);

export default CardFeature;
