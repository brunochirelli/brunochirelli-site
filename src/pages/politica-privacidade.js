import React from 'react';
import parse from 'html-react-parser';

import { Container, Box } from '@material-ui/core';

import PageHeader from '../components/PageHeader';
import SEO from '../components/layout/SEO';

import allDatoCmsPage from '../queries/allDatoCmsPage';

const Privacidade = () => {
    const pageContent = allDatoCmsPage();

    return (
        <>
            <SEO slug="politica-privacidade" />
            {pageContent
                .filter(page => page.slug === 'politica-privacidade')
                .map(page => (
                    <Box key={page.id}>
                        <PageHeader title={page.title} />
                        <Container maxWidth="md">{parse(page.descriptionNode.childMarkdownRemark.html)}</Container>
                    </Box>
                ))}
        </>
    );
};

export default Privacidade;
