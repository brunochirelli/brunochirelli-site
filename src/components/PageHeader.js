import React from 'react';
import styled from 'styled-components';

import { Container, Typography, Grid, Box } from '@material-ui/core';
import { Button, GatsbyLink } from 'gatsby-theme-material-ui';

const ContainerStyled = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(50vh - 60px);
    padding: 2rem 1rem;
    text-align: ${({ center }) => (center ? 'center' : 'left')};

    @media screen and (min-width: 600px) {
        min-height: calc(50vh - 60px);
    }

    @media screen and (min-width: 1200px) {
        min-height: calc(55vh - 60px);
    }
`;

const Title = styled(Typography)`
    font-size: 2rem;

    @media screen and (min-width: 960px) {
        font-size: 2.5rem;
    }
`;

const PageHeader = ({
    overline,
    title,
    text,
    ctaLink = '/contato',
    ctaText = 'Vamos conversar',
    ctaTextTwo,
    ctaLinkTwo,
    transparent,
    center,
    noCta,
}) => (
    <Container maxWidth="xl" component={Box} bgcolor={transparent ? 'transparent' : 'white'}>
        <ContainerStyled center={center ? 1 : 0}>
            <Grid container justify={center ? 'center' : 'flex-start'}>
                <Grid item md={8} lg={8}>
                    <Typography variant="overline" component="small">
                        {overline}
                    </Typography>
                    <Title className="page-title" variant="h4" component="h1" paragraph>
                        {title}
                    </Title>
                    <Typography variant="subtitle1" component="p" paragraph>
                        {text}
                    </Typography>
                    {noCta ? null : (
                        <Box marginBottom={center ? 'auto' : '1rem'} marginRight={center ? 'auto' : '1rem'}>
                            <Button
                                size="large"
                                variant="contained"
                                color="primary"
                                component={GatsbyLink}
                                to={ctaLink}
                            >
                                {ctaText}
                            </Button>
                            {ctaLinkTwo ? (
                                <Button
                                    size="large"
                                    variant="contained"
                                    color="secondary"
                                    component={GatsbyLink}
                                    to={ctaLinkTwo}
                                >
                                    {ctaTextTwo}
                                </Button>
                            ) : null}
                        </Box>
                    )}
                </Grid>
            </Grid>
        </ContainerStyled>
    </Container>
);

export default PageHeader;
