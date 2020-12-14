import React from 'react';
import styled from 'styled-components';

import { Container, Typography, Box } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';

const TextStyled = styled(Box)`
    h1 {
        margin-bottom: 1.5rem;
        font-weight: 700;
        font-size: 2.8rem;
    }

    .article-lead {
        margin-bottom: 3rem;
        color: rgb(115, 138, 148);
        font-size: 1.5rem;
    }
`;

const CoverStyled = styled(Box)`
    width: 100%;
    height: 50vh;
    line-height: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ArticleHeader = ({ title, image, alt, lead }) => (
    <header className="article-header">
        <Link to="/blog" className="back-to" variant="overline" color="inherit">
            Voltar ao Blog
        </Link>
        <TextStyled>
            <Typography variant="h4" component="h1" gutterBottom>
                {title}
            </Typography>
            {lead ? (
                <Typography className="article-lead" gutterBottom>
                    {lead}
                </Typography>
            ) : null}
        </TextStyled>
        <CoverStyled>
            <img src={image} alt={alt} />
        </CoverStyled>
    </header>
);

export default ArticleHeader;
