import React from 'react';

import { Container, Box, Grid, Typography } from '@material-ui/core';
import { IconButton, Link } from 'gatsby-theme-material-ui';
import { WhatsApp, Email } from '@material-ui/icons';
import ContactForm from '../components/forms/ContactForm';

import SEO from '../components/layout/SEO';

const contato = () => (
    <>
        <SEO slug="contato" />
        <Container component={Box} marginY="4rem">
            <Grid container justify="space-between">
                <Grid item xs={12} md={5}>
                    <Typography variant="h3" paragraph>
                        Vamos conversar
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Por favor, preencha o formulário com mais informações e eu responderei o mais rápido possível.
                        Estarei ansioso para trabalhar com você.
                    </Typography>

                    <Box display="flex" alignItems="center">
                        <IconButton href="https://wa.me/551940420322" target="_blank" rel="noreferrer noopener">
                            <WhatsApp fontSize="large" />
                        </IconButton>
                        <Link
                            href="https://wa.me/551940420322"
                            target="_blank"
                            style={{ padding: '1rem' }}
                            color="inherit"
                            variant="body1"
                            rel="noopener noreferrer"
                        >
                            55+ 19 4042 0322
                        </Link>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <IconButton href="mailto:bruno@chirelli.com.br" target="_blank" rel="noreferrer noopener">
                            <Email fontSize="large" />
                        </IconButton>
                        <Link
                            href="mailto:bruno@chirelli.com.br"
                            target="_blank"
                            style={{ padding: '1rem' }}
                            color="inherit"
                            variant="body1"
                            rel="noopener noreferrer"
                        >
                            bruno@chirelli.com.br
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContactForm />
                </Grid>
            </Grid>
        </Container>
    </>
);

export default contato;
