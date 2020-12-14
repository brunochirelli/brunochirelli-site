import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { Box, Typography } from '@material-ui/core';
import { CardActionArea, Link } from 'gatsby-theme-material-ui';

const CardStyled = styled(CardActionArea)`
    width: 100%;
    height: 50vh;
    overflow: hidden;

    .gatsby-image-wrapper {
        object-fit: cover !important;
        transform: scale(1);
        transition: transform 250ms ease;

        &:hover {
            transform: scale(1.2);
        }
    }
`;

const PortfolioCard = ({
    title,
    image = 'https://www.datocms-assets.com/28657/1591354170-app-integrations.png?auto=compress%2Cformat&dpr=0.77&w=1040',
    alt = title,
    link,
}) => (
    <>
        <CardStyled to={`/portfolio/${link}`}>
            <Img fluid={image} alt={alt} style={{ width: '100%', height: '100%' }} />
        </CardStyled>

        {/* <Link to={`/portfolio/${link}`} variant="h5" color="inherit">
            {title}
        </Link> */}
    </>
);

export default PortfolioCard;
