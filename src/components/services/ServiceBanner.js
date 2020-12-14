import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Box } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            marginRight: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    },
}));

const ContainerStyled = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - 60px);

    @media screen and (min-width: 600px) {
        min-height: calc(50vh - 60px);
    }

    @media screen and (min-width: 1200px) {
        min-height: calc(55vh - 60px);
    }
`;

const Title = styled(Typography)`
    @media screen and (min-width: 960px) {
        font-size: 3rem;
    }
`;

const ServiceBanner = () => {
    const classes = useStyles();

    return (
        <>
            <ContainerStyled>
                <Grid container>
                    <Grid item md={8} lg={7}>
                        <Typography variant="overline" component="small">
                            Search Engine Marketing
                        </Typography>
                        <Title variant="h4" component="h1" paragraph>
                            Projetos customizados de baixo custo que te ajudam a vencer no Google
                        </Title>
                        <Typography variant="subtitle1" component="p" paragraph>
                            Todo esforço de marketing digital começa com o foco em mecanismos de busca como o Google.
                            Por que? Porque é aqui que você tem o maior retorno sob investimento (ROI).
                        </Typography>
                        <div className={classes.root}>
                            <Button to="/contato" size="large" variant="contained" color="primary">
                                Vamos conversar
                            </Button>
                            <Button to="/contato" size="large" variant="contained" color="secondary">
                                Vamos conversar
                            </Button>
                        </div>
                    </Grid>
                    <Grid item></Grid>
                </Grid>
            </ContainerStyled>
        </>
    );
};

export default ServiceBanner;
