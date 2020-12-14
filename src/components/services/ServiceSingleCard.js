import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { Grid, Card, Typography, Box } from '@material-ui/core';
import { Button, CardActionArea, Link } from 'gatsby-theme-material-ui';

const CardStyled = styled(Card)`
    width: 100%;
    height: 100%;
`;

const ImageStyled = styled(Grid)`
    height: 30vh;

    @media screen and (min-width: 1200px) {
        height: 22.5vh;
    }

    .MuiCardActionArea-root {
        height: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .gatsby-image-wrapper {
        position: static !important;
        width: 100% !important;
        height: 100% !important;
    }
`;

const GridTextStyled = styled(Grid)`
    display: flex;
    flex-direction: column;
    min-height: 25vh;
    padding: 1rem;
`;

const ServiceSingleCard = ({
    overline,
    title,
    image,
    imageAlt = title,
    ctaText = 'Saiba mais',
    ctaLink = '/servicos',
}) => (
    <CardStyled>
        <Grid container direction="column">
            <ImageStyled item xs={12}>
                <CardActionArea to={ctaLink}>
                    {typeof image === 'object' ? (
                        <Img fluid={image} alt={imageAlt} />
                    ) : (
                        <img src={image} alt={imageAlt} />
                    )}
                </CardActionArea>
            </ImageStyled>
            <GridTextStyled item xs={12}>
                {overline ? <Typography variant="overline">{overline}</Typography> : null}
                <Typography variant="h4" paragraph style={{ flexGrow: 1 }}>
                    <Link to={ctaLink} color="inherit" underline="none">
                        {title}
                    </Link>
                </Typography>
                <Box>
                    <Button to={ctaLink} variant="contained" color="secondary" disableElevation>
                        {ctaText}
                    </Button>
                </Box>
            </GridTextStyled>
        </Grid>
    </CardStyled>
);

export default ServiceSingleCard;
