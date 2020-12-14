import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

const PortfolioHeader = ({ project, year, service }) => (
    <Container style={{ margin: '5rem auto' }}>
        <Grid container justify="space-between" spacing={4}>
            <Grid item lg={9}>
                <Typography variant="h2" paragraph>
                    {project}
                </Typography>
                {/* <Typography variant="h5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Typography> */}
            </Grid>
            {/* <Grid item lg={4}>
                <ul>
                    <li>Ano: {year}</li>
                    <li>Serviço: {service}</li>
                </ul>
            </Grid> */}
        </Grid>
    </Container>
);

export default PortfolioHeader;
