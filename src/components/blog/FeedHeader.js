import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { Grid, Typography } from '@material-ui/core';
import { Button, CardActionArea, Link } from 'gatsby-theme-material-ui';

const FeedHeaderStyled = styled(Grid)`
    padding: 2rem 0;
    border-bottom: 1px solid lightgray;
`;

const CardActionStyled = styled(CardActionArea)`
    width: 100%;
    height: 50vh;
`;

const ImgStyled = styled(Img)`
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
`;

const LastPost = styled(Grid)`
    padding: 2rem;
`;

const FeedHeader = ({
    overline = 'overline',
    title = 'Título do Artigo',
    excerpt = "Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time.",
    articleLink = '/blog',
    timeToRead = 1,
    imageFixed,
    imageFluid,
    alt,
}) => (
    <FeedHeaderStyled container alignItems="center">
        <Grid item xs={12} md={8}>
            <CardActionStyled to={articleLink} style={{ lineHeight: 0 }}>
                <ImgStyled fixed={imageFixed || null} fluid={imageFluid || null} alt={alt} />
            </CardActionStyled>
        </Grid>
        <LastPost item xs={12} md={4}>
            <Typography variant="overline" component="div">
                {overline}
            </Typography>

            <Typography variant="h4">
                <Link to={articleLink} color="inherit">
                    {title}
                </Link>
            </Typography>

            <Typography paragraph>{excerpt}</Typography>
            <Button to={articleLink} size="small" variant="contained" disableElevation>
                Leia mais
            </Button>
            <Typography variant="caption" style={{ padding: '0.5rem' }}>
                {timeToRead > 1 ? `${timeToRead} mins` : `${timeToRead} min`}
            </Typography>
        </LastPost>
    </FeedHeaderStyled>
);

export default FeedHeader;
