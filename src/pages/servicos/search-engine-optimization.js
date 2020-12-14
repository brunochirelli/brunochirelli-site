import React from 'react';

import { Container, Grid } from '@material-ui/core';

import PageHeader from '../../components/PageHeader';
import Feature from '../../components/Feature';
import ServiceAbout from '../../components/services/ServiceAbout';
import ServiceArticle from '../../components/services/ServiceArticle';
import PromotionCard from '../../components/services/PromotionCard';
import SEO from '../../components/layout/SEO';

const SearchEngineOptimization = () => (
    <div>
        <SEO slug="search-engine-optimization" />
        <PageHeader
            overline="Search Engine Marketing"
            title="Projetos customizados de baixo custo que te ajudam a vencer no Google"
            text="Todo esforço de marketing digital começa com o foco em mecanismos de busca como o Google. Por que? Porque é aqui que você tem o maior retorno sob investimento (ROI)."
        />

        <Feature
            overline="Completo para o Google"
            title="Otimizado para SEO"
            text="Search Engine Optimization é fundamental para qualquer empresa que deseja voltar seus esforços de marketing para a internet. Para isso, todo site tem um SEO técnico impecável, pois o código é escrito sob medida."
            image
            objectfit="contain"
            width="70%"
            transparent
        />
        <Feature
            overline="Mobile-first"
            title="Design e código 100% responsivos e customizados"
            text="Todo design e experiência do usuário é voltado primeiro para o mobile, assim como todo código é feito sob medida para atender seu consumidor."
            image
            objectfit="contain"
            width="70%"
            transparent
        />
        <Feature
            overline="JAMStack"
            title="Sites ultra-rápidos com JAMStack"
            text="Com JAMStack e um CMS (gerenciador de conteúdo) você obtém a mais moderna tecnologia para ter um site que não é apenas rápido (aberto em menos de 3s em redes 3G), mas ideal para quem deseja aparecer e anunciar no Google."
            image
            objectfit="contain"
            width="60%"
            height="90%"
            transparent
        />
        <Feature
            overline="Últimas tecnologias"
            title="Gatsby.js e CMS, uma combinação poderosa"
            text="Gatsby.js é um framework de React.js que usa como base as boas práticas do JAMStack tornando o site eficiente, rápido, seguro e pronto para atingir qualquer objetivo de marketing."
            image
            objectfit="contain"
            width="70%"
            height="80%"
            transparent
        />
        <Feature
            overline="Garantia"
            title="Você 100% satisfeito"
            text="Ajustaremos seu projeto até você estar completamente satisfeito com o resultado final."
            ctaText="Solicite um orçamento"
            image
            objectfit="contain"
            width="70%"
            height="90%"
            transparent
        />

        <ServiceAbout />

        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <ServiceArticle />
                </Grid>
                <Grid item xs={12} md={6}>
                    <PromotionCard
                        products={[
                            {
                                tabTitle: 'Auditoria de SEO',
                                title: 'Auditoria SEO técnica e de conteúdo',
                                price: 'Grátis',
                                description:
                                    'Uma auditoria para apontar em que partes seu site pode ser melhorado, tanto na parte técnica quanto na parte de conteúdo estratégico com um relatório final de coisas que você mesmo pode implementar e começar a ranquear melhor no Google e em outros mecanismos de busca',
                                features: [
                                    'Feito manualmente',
                                    'Relatório técnico',
                                    'Relatório de conteúdo',
                                    'Tópicos para melhorar seu site',
                                ],
                            },
                            {
                                tabTitle: 'Auditoria de SEO',
                                title: 'Auditoria SEO técnica e de conteúdo',
                                price: 'Grátis',
                                description:
                                    'Uma auditoria para apontar em que partes seu site pode ser melhorado, tanto na parte técnica quanto na parte de conteúdo estratégico com um relatório final de coisas que você mesmo pode implementar e começar a ranquear melhor no Google e em outros mecanismos de busca',
                                features: [
                                    'Feito manualmente',
                                    'Relatório técnico',
                                    'Relatório de conteúdo',
                                    'Tópicos para melhorar seu site',
                                ],
                            },
                        ]}
                    />
                </Grid>
            </Grid>
        </Container>
    </div>
);

export default SearchEngineOptimization;
