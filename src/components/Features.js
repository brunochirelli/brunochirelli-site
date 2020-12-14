import React from 'react';
import styled from 'styled-components';

import { useTheme } from '@material-ui/styles';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { Button, Link } from 'gatsby-theme-material-ui';

const GridStyled = styled(Grid)`
    min-height: 300px;
`;

const ImgStyled = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const TextStyled = styled(Grid)``;

const Features = ({ features = [] }) => {
    const theme = useTheme();

    return (
        <Container maxWidth="xl" style={{ backgroundColor: 'red' }}>
            <Container disableGutters>Features</Container>
        </Container>
    );
};

export default Features;
