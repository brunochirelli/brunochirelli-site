import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { Container, Paper, Grid, Typography, Box } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';

const FeatureStyled = styled(Container)`
    margin: 3rem auto;

    h2 {
        font-size: 2.4rem;
    }

    @media screen and (min-width: 960px) {
        &.MuiPaper-root {
            background-color: ${({ transparent }) => (transparent ? 'transparent' : 'white')};
        }

        &:nth-of-type(even) .info {
            order: -1;
        }
    }

    /* QUARENTENA */
    /* &:nth-of-type(2) {
        margin-top: 3rem;
    }

    &:last-of-type {
        margin-bottom: 3rem;
    } */
`;

const ImgStyled = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    img {
        width: ${({ width }) => width || '100%'};
        height: ${({ height }) => height || '100%'};
        object-fit: ${({ objectfit }) => objectfit};
    }

    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }
`;

const InfoStyled = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
`;

const Feature = ({
    children,
    title,
    overline,
    text,
    ctaText,
    ctaLink = '/contato',
    image,
    imageAlt = '',
    minHeight = '50vh',
    width,
    height,
    objectfit = 'cover',
    transparent,
}) => (
    <FeatureStyled
        disableGutters
        component={Paper}
        elevation={0}
        transparent={transparent ? 1 : 0}
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-easing="ease-out-back"
        style={{ '--sal-duration': '1.5s' }}
    >
        <Grid container style={{ minHeight }}>
            <ImgStyled item sm={6} objectfit={objectfit} width={width} height={height}>
                <Box height="100%" width="100%" display="flex" alignItems="center" justifyContent="center">
                    {typeof image === 'object' ? <Img fluid={image} /> : <img src={image} alt={imageAlt} />}
                </Box>
            </ImgStyled>
            <InfoStyled item sm={6} className="info">
                <Typography variant="overline">{overline}</Typography>
                <Typography variant="h3" component="h2" paragraph>
                    {title}
                </Typography>
                <Typography variant="body1" component={children ? Container : 'div'} paragraph>
                    {text || children}
                </Typography>
                {ctaText ? (
                    <Box>
                        <Button to={ctaLink} variant="contained" color="primary" disableElevation>
                            {ctaText}
                        </Button>
                    </Box>
                ) : null}
            </InfoStyled>
        </Grid>
    </FeatureStyled>
);

export default Feature;
