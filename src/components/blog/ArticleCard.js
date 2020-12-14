import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { Typography, Grid, Box } from '@material-ui/core';
import { Link, Button, CardActionArea } from 'gatsby-theme-material-ui';

const GridStyled = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    transition: all 0.2s ease;

    &:hover {
        background: white;
        border-radius: 0.5rem;
    }
`;

const ArticleCard = ({
    articleLink = '/blog',
    overline = 'Categoria',
    title = 'Título do Artigo',
    excerpt = 'O que é uma identidade visual? Identidade visual é o conjunto de características visuais únicas que sua marca usa para ser reconhecida…',
    image,
}) => (
    <GridStyled item xs={12} sm={6} md={4}>
        <Box
            width="100%"
            lineHeight={0}
            marginBottom="0.5rem"
            borderRadius="0.5rem"
            overflow="hidden"
            component={CardActionArea}
            to={articleLink}
        >
            <Img fixed={image} style={{ width: '100%', height: '220px' }} />
        </Box>
        <Typography variant="overline">{overline}</Typography>
        <Typography variant="h5" component="h2" paragraph style={{ flexGrow: excerpt ? 1 : 0 }}>
            <Link to={articleLink} underline="none" color="inherit">
                {title}
            </Link>
        </Typography>
        <Typography paragraph>{excerpt}</Typography>
        <Box>
            <Button to={articleLink} size="small" variant="contained" disableElevation>
                Leia mais
            </Button>
        </Box>
    </GridStyled>
);

export default ArticleCard;
