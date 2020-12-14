import React from 'react';
import styled from 'styled-components';

import { Container, Typography, Grid, Box } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';

import google from '../../svgs/logos/google.svg';
import facebook from '../../svgs/logos/facebook.svg';
import microsoft from '../../svgs/logos/microsoft.svg';
import hubspot from '../../svgs/logos/hubspot.svg';
import semrush from '../../svgs/logos/semrush.svg';

import homebanner from '../../images/home/homebanner.png';

const ButtonGroupStyled = styled(Box)`
    margin-bottom: 2rem;

    & > a {
        margin: 1rem 1rem 0 0;
    }
`;

const GridStyled = styled(Grid)`
    display: flex;
    align-items: center;
    min-height: calc(85vh - 64px);

    @media screen and (min-width: 960px) {
        min-height: calc(90vh - 64px);
    }
`;

const TextStyled = styled(Grid)`
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;

    @media screen and (min-width: 600px) {
        margin-bottom: 7rem;
    }

    @media screen and (min-width: 960px) {
        margin-bottom: 12rem;
    }
`;

const LogosStyled = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    img {
        padding-right: 2rem;
        padding-bottom: 2rem;
    }

    @media screen and (min-width: 960px) {
        flex-wrap: nowrap;
    }
`;

const BrunoPic = styled.img`
    display: none;

    @media screen and (min-width: 600px) {
        position: absolute;
        right: 0;
        bottom: 0;
        display: block;
        width: 50%;
        height: 100%;
        object-fit: contain;
        object-position: bottom;
    }
`;

const BottomImg = styled.img`
    display: none;

    @media screen and (min-width: 600px) {
        position: absolute;
        right: 0;
        bottom: 0;
        display: block;
        width: 100%;
    }

    @media screen and (min-width: 960px) {
        height: 100%;
        object-fit: contain;
        object-position: bottom;
    }
`;

const Title = styled(Typography)`
    font-size: 2rem;

    @media screen and (min-width: 960px) {
        font-size: 2.5rem;
    }
`;

const HomeBanner = () => (
    <>
        <Container maxWidth="xl" style={{ position: 'relative', paddingTop: '1rem', paddingBottom: '1rem' }}>
            <Container>
                <GridStyled container justify="space-between">
                    <TextStyled item xs={12} sm={10} md={8}>
                        <Typography variant="overline">Search Engine Marketing</Typography>
                        <Title variant="h4" component="h2" paragraph>
                            Bruno Chirelli é especialista em marketing de busca
                        </Title>
                        <Typography variant="body1" paragraph>
                            Publicitário, designer e desenvolvedor web especialista em marketing em mecanismos de busca
                            certificado pelas maiores empresas do mercado.
                        </Typography>
                        <ButtonGroupStyled>
                            <Button to="/contato" variant="contained" color="primary">
                                Vamos conversar
                            </Button>
                            <Button to="/portfolio" variant="contained" color="secondary">
                                Veja meu portfólio
                            </Button>
                        </ButtonGroupStyled>
                        {/* <CertificateLogos /> */}
                        <Typography variant="overline" paragraph>
                            Publicitário e especialista certificado pelas maiores empresas do mercado
                        </Typography>
                        <LogosStyled>
                            <img src={google} alt="google" />
                            <img src={facebook} alt="facebook" />
                            <img src={microsoft} alt="microsoft" />
                            <img src={hubspot} alt="hubspot" />
                            <img src={semrush} alt="semrush" />
                        </LogosStyled>
                    </TextStyled>
                </GridStyled>
            </Container>
            {/* <BrunoPic src={bruno2} alt="" /> */}

            <BottomImg src={homebanner} />
        </Container>
        <Box
            height="100px"
            marginTop="-100px"
            style={{
                background: 'linear-gradient(0deg, rgba(250,250,250,1) 5%, rgba(250,250,250,0) 100%)',
                position: 'relative',
            }}
        />
    </>
);

export default HomeBanner;
