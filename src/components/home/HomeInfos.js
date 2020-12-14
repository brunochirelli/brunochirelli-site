import React from 'react';
import styled from 'styled-components';

import { Grid, Typography, Box, useTheme } from '@material-ui/core';

import Feature from '../Feature';
import allImages from '../../queries/allImages';

const GridStyled = styled(Grid)`
    display: flex;
    flex-direction: column;
`;

const SeoAndPpc = () => {
    const theme = useTheme();

    return (
        <>
            <Typography>
                O principal benefício é posicionar a sua marca quando seu potencial consumidor está procurando por seu
                produto ou serviço. As duas principais estratégias para alcançar seu consumidor nos mecanismos de busca
                são:
            </Typography>
            <Grid container spacing={4} style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem' }}>
                <GridStyled item xs={12} lg={6}>
                    <Typography
                        variant="h5"
                        style={{ borderTop: `2px solid ${theme.palette.primary.main}`, paddingTop: '0.5rem' }}
                    >
                        SEO
                    </Typography>
                    <Typography paragraph style={{ flexGrow: 1 }}>
                        Search Engine Optimization é a forma gratuíta de aparecer nos mecanismos de busca.
                    </Typography>
                    {/* <Box>
                        <Button variant="outlined" size="small" style={{ marginTop: 'auto' }}>
                            Saiba mais sobre SEO
                        </Button>
                    </Box> */}
                </GridStyled>
                <GridStyled item xs={12} lg={6} style={{ paddingRight: '1rem' }}>
                    <Typography
                        variant="h5"
                        style={{ borderTop: `2px solid ${theme.palette.primary.main}`, paddingTop: '0.5rem' }}
                    >
                        PPC
                    </Typography>
                    <Typography paragraph>
                        Pay-Per-Click (em tradução livre Pague-Por-Clique) é a forma paga de anunciar em mecanismos de
                        busca como o Google.
                    </Typography>
                    {/* <Box>
                        <Button variant="outlined" size="small" style={{ marginTop: 'auto' }}>
                            Saiba mais sobre PPC
                        </Button>
                    </Box> */}
                </GridStyled>
            </Grid>
        </>
    );
};

const HomeInfos = () => {
    const homeImages = allImages().filter(image => image.name === 'mulher-laptop' || image.name === 'mulher-celular');

    return (
        <Box marginY="4rem">
            <Feature
                image={homeImages[1].childImageSharp.fluid}
                overline="Marketing de Busca"
                title="O que é Search Engine Marketing?"
                text="Search Engine Marketing (SEM) é o termo em inglês para marketing em mecanismos de busca como o Google. Esse tipo de marketing é a porta de entrada para qualquer estratégia digital tendo o maior retorno sobre investimento entre todos os outros esforços."
                ctaText="Saiba mais"
                ctaLink="/"
            />
            <Feature
                image={homeImages[0].childImageSharp.fluid}
                overline="Porta de Entrada Negócios na Internet"
                title="Quais os benefícios do SEM?"
                text={<SeoAndPpc />}
            />

            {/* <FeatureText /> */}
        </Box>
    );
};
export default HomeInfos;
