import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { Container, Grid, Box, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { CardActionArea } from 'gatsby-theme-material-ui';

import PortfolioCard from './PortfolioCard';

import allDatoCmsPortfolio from '../../queries/allDatoCmsPortfolio';

const PortfolioFeed = () => {
    const allPortfolio = allDatoCmsPortfolio();

    return (
        <Container>
            <Grid container spacing={2}>
                {allPortfolio.map((item, i) => (
                    <Grid item xs={12} md={i === 1 ? 8 : 4} key={item.node.id}>
                        <PortfolioCard title={item.node.project} image={item.node.cover.fluid} link={item.node.slug} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PortfolioFeed;
