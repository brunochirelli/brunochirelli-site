import React from 'react';
import styled from 'styled-components';

import { Box } from '@material-ui/core';
import ArticleContent from './ArticleContent';
import ArticleHeader from './ArticleHeader';

const ArticleStyled = styled(Box)`
    .article-header {
        margin-top: 2rem;
        margin-bottom: 3rem;

        .back-to {
            display: block;
            margin-bottom: 1rem;
        }
    }

    p,
    li {
        color: #313b3f;
        font-size: 1.1rem;
    }

    p {
        margin-top: 0;
        line-height: 1.85rem;
    }

    h2 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    h3 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 1.3rem;
    }

    @media screen and (min-width: 600px) {
        margin-top: 4rem;
        margin-bottom: 4rem;

        h1,
        article,
        .back-to,
        .article-lead {
            padding-right: 5rem;
            padding-left: 5rem;
        }
    }

    @media screen and (min-width: 960px) {
        h1,
        article,
        .back-to,
        .article-lead {
            padding-right: 7rem;
            padding-left: 7rem;
        }
    }
`;

const Article = ({ title, image, alt, content, hasHeader }) => (
    <ArticleStyled className="article">
        {hasHeader ? <ArticleHeader title={title} image={image} alt={alt} /> : null}

        <ArticleContent content={content} />
    </ArticleStyled>
);

export default Article;
