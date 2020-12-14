import React from 'react';
import styled from 'styled-components';

import { Container, Box, Grid, Typography } from '@material-ui/core';
import { IconButton, Link } from 'gatsby-theme-material-ui';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

const NavigationStyled = styled(Grid)`
    display: flex;
    justify-content: center;
    padding: 1.5rem 0.5rem !important;

    a {
        opacity: 1;
        transition: opacity 0.2s ease-out;

        &:hover {
            text-decoration: none;
            opacity: 0.6;
        }
    }

    .nav-title {
        display: block;
        font-size: 1.3rem;
    }

    .nav-icon {
        font-size: 1.5rem;
    }

    &.prev {
        text-align: left;
    }

    &.next {
        text-align: right;
    }

    @media screen and (min-width: 600px) {
        .nav-title {
            font-size: 1.5rem;
        }

        .nav-icon {
            font-size: 2rem;
        }
    }

    @media screen and (min-width: 960px) {
        .nav-title {
            font-size: 2rem;
        }

        .nav-icon {
            font-size: 2rem;
        }
    }
`;

const PortfolioNavigation = ({ next, previous }) => (
    <Container>
        <Grid container justify="space-between" spacing={2}>
            {previous ? (
                <NavigationStyled className="prev" item xs={6} sm="auto" style={{ marginRight: 'auto' }}>
                    <Box display="flex" alignItems="center">
                        <IconButton to={`/portfolio/${previous.slug}`}>
                            <ArrowBack className="nav-icon" />
                        </IconButton>
                        <Box>
                            <Link to={`/portfolio/${previous.slug}`} variant="overline" color="inherit">
                                Anterior
                            </Link>
                            <Link to={`/portfolio/${previous.slug}`} variant="h4" color="inherit" className="nav-title">
                                {previous.project}
                            </Link>
                        </Box>
                    </Box>
                </NavigationStyled>
            ) : null}
            {next ? (
                <NavigationStyled className="next" item xs={6} sm="auto" style={{ marginLeft: 'auto' }}>
                    <Box display="flex" alignItems="center">
                        <Box>
                            <Link to={`/portfolio/${next.slug}`} variant="overline" color="inherit" underline="none">
                                Próximo
                            </Link>

                            <Link to={`/portfolio/${next.slug}`} variant="h4" color="inherit" className="nav-title">
                                {next.project}
                            </Link>
                        </Box>
                        <IconButton to={`/portfolio/${next.slug}`}>
                            <ArrowForward className="nav-icon" />
                        </IconButton>
                    </Box>
                </NavigationStyled>
            ) : null}
        </Grid>
    </Container>
);

export default PortfolioNavigation;
