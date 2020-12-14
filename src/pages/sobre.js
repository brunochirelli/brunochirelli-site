import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import parse from 'html-react-parser';

import { Box, Container, Grid, Hidden } from '@material-ui/core';

import PageHeader from '../components/PageHeader';

import allDatoCmsPage from '../queries/allDatoCmsPage';
import Article from '../components/article/Article';
import TableOfContents from '../components/article/TableOfContents';

const Sobre = () => {
    const pageSeo = allDatoCmsPage();

    return (
        <>
            {pageSeo
                .filter(page => page.slug === 'sobre')
                .map(page => (
                    <Box key={page.slug}>
                        <HelmetDatoCms seo={page.seoMetaTags} key={page.id} />
                        <PageHeader
                            title="Quem é Bruno Chirelli"
                            text="Saiba um pouco mais sobre mim e entenda um pouco mais a forma como penso."
                            overline="Curiosidade, estudo e mãos à obra"
                            center
                        />

                        <Container>
                            <Grid container>
                                <Grid item xs={12} lg={10}>
                                    <Article content={page.descriptionNode.childMarkdownRemark.html} />
                                </Grid>
                                <Grid item xs={12} lg={2}>
                                    <Hidden lgDown>
                                        <Box className="sticky">
                                            <TableOfContents page />
                                        </Box>
                                    </Hidden>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                ))}
        </>
    );
};

export default Sobre;
