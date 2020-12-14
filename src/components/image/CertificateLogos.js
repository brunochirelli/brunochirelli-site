import React from 'react';
import styled from 'styled-components';

import { Grid, Box } from '@material-ui/core';

import google from '../../svgs/logos/google.svg';
import facebook from '../../svgs/logos/facebook.svg';
import microsoft from '../../svgs/logos/microsoft.svg';
import hubspot from '../../svgs/logos/hubspot.svg';
import semrush from '../../svgs/logos/semrush.svg';

const LogoStyled = styled.img`
    width: 90%;
    opacity: 0.6;
    transition: all 250ms ease;

    &:hover {
        opacity: 1;
    }
`;

const CertificateLogos = () => (
    <Grid container spacing={3} justify="center" alignItems="center" component={Box} marginY="1rem">
        <Grid item>
            <LogoStyled src={google} alt="Google" />
        </Grid>
        <Grid item>
            <LogoStyled src={facebook} alt="Facebook" />
        </Grid>
        <Grid item>
            <LogoStyled src={microsoft} alt="Microsoft" />
        </Grid>
        <Grid item>
            <LogoStyled src={hubspot} alt="Hubspot" />
        </Grid>
        <Grid item>
            <LogoStyled src={semrush} alt="SEMRush" />
        </Grid>
    </Grid>
);

export default CertificateLogos;
