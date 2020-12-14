import React from 'react';
import styled from 'styled-components';
import { Box, Avatar, Typography } from '@material-ui/core';

const AuthorStyled = styled(Box)`
    &#desktop-author {
        display: none;

        @media screen and (min-width: 960px) {
            display: block;
        }
    }

    &#mobile-author {
        display: block;

        @media screen and (min-width: 960px) {
            display: none;
        }
    }

    @media screen and (min-width: 960px) {
        text-align: center;

        .MuiAvatar-root {
            margin: 0.5rem auto;
        }
    }
`;

const ArticleAuthor = ({ id }) => (
    <AuthorStyled id={id}>
        <Avatar>BC</Avatar>
        <Typography>Bruno Chirelli</Typography>
        <Typography>Publicitário, webdesigner e React developer</Typography>
    </AuthorStyled>
);

export default ArticleAuthor;
