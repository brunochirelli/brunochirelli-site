import React from 'react';

import { Container } from '@material-ui/core';
import FeedHeader from './FeedHeader';
import FeedArticles from './FeedArticles';

import useArticlesData from '../../queries/allDatoCmsArticle';

const BlogFeed = () => {
    const articles = useArticlesData();

    return (
        <Container>
            <FeedHeader
                imageFluid={articles[0].thumbnail.fluid}
                alt={articles[0].thumbnail.alt}
                title={articles[0].title}
                excerpt={articles[0].contentNode.childMarkdownRemark.excerpt}
                articleLink={`/blog/${articles[0].slug}`}
                timeToRead={articles[0].contentNode.childMarkdownRemark.timeToRead}
            />
            <FeedArticles articles={articles} />
        </Container>
    );
};

export default BlogFeed;
