import React from 'react';

import { Container, Grid } from '@material-ui/core';

import TableOfContents from '../components/article/TableOfContents';
import ArticleAuthor from '../components/article/ArticleAuthor';
import SEO from '../components/layout/SEO';
import ArticleContent from '../components/article/ArticleContent';
import ArticleSocialShare from '../components/article/ArticleSocialShare';
import ArticleHeader from '../components/article/ArticleHeader';
import Article from '../components/article/Article';

const ArticleTemplate = ({ pageContext }) => (
    <>
        <SEO slug={pageContext.slug} />

        <Container maxWidth="md">
            <Grid container justify="space-between">
                {/* <Grid item xs={12} sm={2} md={2}>
                    <ArticleAuthor />
                    <ArticleSocialShare />
                </Grid> */}
                <Grid item xs={12}>
                    <Article
                        hasHeader
                        title={pageContext.title}
                        image={pageContext.thumbnail}
                        alt={pageContext.alt}
                        content={pageContext.content}
                    />
                </Grid>
                {/* <Grid item xs={12} sm={0} md={2}>
                    <TableOfContents />
                </Grid> */}
            </Grid>
        </Container>
    </>
);

export default ArticleTemplate;
