import React from 'react';

import { Container, Box, Grid } from '@material-ui/core';

import SEO from '../components/layout/SEO';
import PageHeader from '../components/PageHeader';

const faq = () => (
    <>
        <SEO slug="faq" />
        <PageHeader title="FAQ" overline="Perguntas Frequentes" center noCta />
        <Box margin="2rem 0" component={Container}>
            <Grid container spacing={2}></Grid>
        </Box>
    </>
);

export default faq;
