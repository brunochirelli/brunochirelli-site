import React from 'react';
import styled from 'styled-components';

import { useTheme } from '@material-ui/styles';

import { Container, Typography, Divider, Grid, Box } from '@material-ui/core';
import { blueGrey, grey } from '@material-ui/core/colors';

import { Button, Link, IconButton } from 'gatsby-theme-material-ui';
import { Facebook, WhatsApp, Instagram, MailOutline } from '@material-ui/icons';

import Copyright from './Copyright';

const linkColor = grey[600];
const linkColorTitle = blueGrey[800];
const linkColorHover = blueGrey[900];

const FooterStyled = styled.footer`
    /* background: white; */

    .footer-destaque,
    .footer-links {
        padding: 2rem 0;

        @media screen and (min-width: 960px) {
            padding: 4rem 0;
        }
    }

    .footer-section-title {
        color: ${linkColorTitle};
    }
`;

const LinkStyled = styled(Link)`
    color: #505050;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
        color: black;
    }
`;

const IconStyled = styled(IconButton)`
    color: ${linkColor};
    transition: all 0.2s ease;

    &:hover {
        color: ${linkColorHover};
    }
`;

const Footer = () => {
    const theme = useTheme();

    return (
        <FooterStyled>
            <Container>
                <div className="footer-destaque">
                    <Typography variant="h4" paragraph component="h3">
                        <Box fontWeight="500">
                            Publicitário, web designer freelancer com foco em marketing para mecanismos de busca
                        </Box>
                    </Typography>
                    <Button to="/contato" size="large" variant="contained" color="primary" disableElevation>
                        Solicite uma proposta
                    </Button>
                </div>
                <Divider variant="fullWidth" />
                <Grid container className="footer-links" spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography className="footer-section-title" variant="h6" paragraph>
                            Sobre
                        </Typography>
                        <Typography paragraph>
                            <LinkStyled to="/sobre">Quem é Bruno Chirelli</LinkStyled>
                        </Typography>
                        {/* <Typography paragraph>
                            <LinkStyled to="/sobre">Por que me escolher?</LinkStyled>
                        </Typography> */}
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography className="footer-section-title" variant="h6" paragraph>
                            Serviços
                        </Typography>
                        <Typography paragraph>
                            <LinkStyled to="/servicos/search-engine-marketing">Search Engine Marketing</LinkStyled>
                        </Typography>
                        <Typography paragraph>
                            <LinkStyled to="/servicos/criacao-sites">Criação de Sites</LinkStyled>
                        </Typography>
                        <Typography paragraph>
                            <LinkStyled to="/servicos/identidade-visual">Criação de Identidade Visual</LinkStyled>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography className="footer-section-title" variant="h6" paragraph>
                            Mais informações
                        </Typography>
                        <Typography paragraph>
                            <LinkStyled to="/faq">FAQ</LinkStyled>
                        </Typography>
                        <Typography paragraph>
                            <LinkStyled to="/politica-privacidade">Política de privacidade</LinkStyled>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography className="footer-section-title" variant="h6" paragraph>
                            Entre em contato
                        </Typography>
                        <Typography paragraph>
                            <LinkStyled to="tel:1940420322">19 4042 0322</LinkStyled>
                        </Typography>

                        {/* <IconStyled edge="start" color="primary" aria-label="Facebook">
                            <Facebook />
                        </IconStyled>
                        <IconStyled color="primary" aria-label="Instagram">
                            <Instagram />
                        </IconStyled> */}
                        <IconStyled
                            to="https://wa.me/551940420322"
                            target="_blank"
                            color="primary"
                            aria-label="WhatsApp"
                            rel="noopener noreferrer"
                        >
                            <WhatsApp />
                        </IconStyled>
                        <IconStyled to="mailto:bruno@chirelli.com.br" target="_blank" color="primary" aria-label="Mail">
                            <MailOutline />
                        </IconStyled>
                    </Grid>
                </Grid>
            </Container>
            <Copyright />
        </FooterStyled>
    );
};

export default React.forwardRef(Footer);
