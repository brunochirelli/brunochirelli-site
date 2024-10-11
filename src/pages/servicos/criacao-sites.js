import React from 'react';

import { Container, Grid, Box } from '@material-ui/core';

import Feature from '../../components/Feature';
import PageHeader from '../../components/PageHeader';
import SEO from '../../components/layout/SEO';

import ServiceAbout from '../../components/services/ServiceAbout';
import Article from '../../components/article/Article';
import PromotionCard from '../../components/services/PromotionCard';
import HideContent from '../../components/layout/HideContent';
import { usePageBySlug } from '../../queries/allDatoCmsPage';
import ServiceFaq from '../../components/services/ServiceFaq';

import { useSvgsByName } from '../../queries/allSvgs';

const CriacaoSites = () => {
    const PageData = usePageBySlug('criacao-sites');

    // svgs
    const searchEngine = useSvgsByName('searchEngine');
    const responsiveDesign = useSvgsByName('responsiveDesign');
    const jamstack = useSvgsByName('jamstack');
    const gatsby = useSvgsByName('gatsby');
    const garantia = useSvgsByName('garantia');

    return (
        <>
            <SEO slug="criacao-sites" />
            <PageHeader
                customBgColor="#EEFAF1"
                overline="JAMStack, Gatsby e CMS"
                title="Criação de sites customizados com foco em mecanismos de busca"
                text="Desenvolvimento de sites ultra-rápidos com JAMStack e Gatsby.js para te ajudar vencer nos mecanismos de busca como o Google feitos do zero por um publicitário especialista em marketing de busca."
            />

            <Feature
                overline="Completo para o Google"
                title="Otimizado para SEO"
                text="Search Engine Optimization é fundamental para qualquer empresa que deseja voltar seus esforços de marketing para a internet. Para isso, todo site tem um SEO técnico impecável, pois o código é escrito sob medida."
                image={searchEngine}
                objectfit="contain"
                width="70%"
                transparent
            />
            <Feature
                overline="Mobile-first"
                title="Design e código 100% responsivos e customizados"
                text="Todo design e experiência do usuário é voltado primeiro para o mobile, assim como todo código é feito sob medida para atender seu consumidor."
                image={responsiveDesign}
                objectfit="contain"
                width="70%"
                transparent
            />
            <Feature
                overline="JAMStack"
                title="Sites ultra-rápidos com JAMStack"
                text="Com JAMStack e um CMS (gerenciador de conteúdo) você obtém a mais moderna tecnologia para ter um site que não é apenas rápido (aberto em menos de 3s em redes 3G), mas ideal para quem deseja aparecer e anunciar no Google."
                image={jamstack}
                objectfit="contain"
                height="90%"
                width="55%"
                transparent
            />
            <Feature
                overline="Últimas tecnologias"
                title="Gatsby.js e CMS, uma combinação poderosa"
                text="Gatsby.js é um framework de React.js que usa como base as boas práticas do JAMStack tornando o site eficiente, rápido, seguro e pronto para atingir qualquer objetivo de marketing."
                image={gatsby}
                objectfit="contain"
                width="60%"
                transparent
            />
            <Feature
                overline="Garantia"
                title="Você 100% satisfeito"
                text="Ajustaremos seu projeto até você estar completamente satisfeito com o resultado final."
                ctaText="Solicite um orçamento"
                image={garantia}
                objectfit="contain"
                width="60%"
                transparent
            />

            <ServiceAbout />

            <Container>
                <Grid container>
                    <Grid item xs={12} md={7}>
                        <HideContent>
                            <Article content={PageData.descriptionNode.childMarkdownRemark.html} />
                        </HideContent>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box className="sticky"></Box>
                    </Grid>
                </Grid>
            </Container>

            <ServiceFaq faqSlug="criacao-sites" />
        </>
    );
};

export default CriacaoSites;
