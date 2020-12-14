import React from 'react';
import styled from 'styled-components';

import { Grid } from '@material-ui/core';

import ArticleCard from './ArticleCard';

const GridStyle = styled(Grid)`
    height: 100%;
    padding: 2rem 0;
`;

const FeedArticles = ({ articles = [] }) => (
    <GridStyle container spacing={3}>
        {articles.map((article, i) =>
            i > 0 ? (
                <ArticleCard
                    title={article.title}
                    excerpt={article.contentNode.childMarkdownRemark.excerpt}
                    articleLink={`/blog/${article.slug}`}
                    image={article.thumbnail.fixed}
                    key={article.id}
                />
            ) : null
        )}
    </GridStyle>
);

export default FeedArticles;
