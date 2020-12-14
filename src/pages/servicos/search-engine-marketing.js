import React from 'react';

import { Container, Grid, Box, Hidden } from '@material-ui/core';
import Feature from '../../components/Feature';
import PageHeader from '../../components/PageHeader';
import SEO from '../../components/layout/SEO';
import TableOfContents from '../../components/article/TableOfContents';

import { usePageBySlug } from '../../queries/allDatoCmsPage';
import { useSvgsByName } from '../../queries/allSvgs';

import Article from '../../components/article/Article';
import ServiceAbout from '../../components/services/ServiceAbout';
import HideContent from '../../components/layout/HideContent';

const SearchEngineMarketing = () => {
    const PageData = usePageBySlug('search-engine-marketing');

    // svgs
    const consumidor = useSvgsByName('consumidor');
    const audit = useSvgsByName('audit');
    const visibilidade = useSvgsByName('identificacao');
    const ppc = useSvgsByName('ppc');
    const brain = useSvgsByName('brain');
    const experienciaCompra = useSvgsByName('experienciaCompra');

    return (
        <>
            <SEO slug="search-engine-marketing" />

            <PageHeader
                overline="Especialista em Marketing de Busca"
                title="Minha missão é ajudar você extrair o melhor dos mecanismos de busca como o Google"
                text="Para empresas em todos os estágios que querem ganhar mais no momento que seu cliente está procurando."
            />

            <Feature
                overline="Economize e Lucre Mais"
                title="Marketing em mecanismos de busca tem o maior retorno comprovado"
                text="Uma pesquisa do próprio Google mediu que o retorno sobre investimento em sua plataforma gera um retorno de 8 para 1, ou seja, 800% é a média das campanhas bem executadas."
                image={visibilidade}
                objectfit="contain"
                width="70%"
                ctaText="Solicite um orçamento"
                ctaLink="/contato"
                transparent
            />

            <Feature
                overline="A internet mudou a forma de comprar"
                title="Mecanismos de busca mudaram a jornada de compra"
                text="Pesquisar no Google por produtos ou serviços é rotina para grande parte das pessoas. Hoje 95% das pessoas pesquisam online antes de decidir qual produto e em que loja comprar. Portanto, os mecanismos de busca são perfeitos para levar seus produtos no momento ideal."
                image={experienciaCompra}
                objectfit="contain"
                width="60%"
                height="90%"
                transparent
            />
            <Feature
                overline="Esteja presente de verdade"
                title="Os consumidores estão mais exigentes"
                text="Não basta estar presente, mas sim da melhor forma possível, pois seu consumidor exige isso. Sites rápidos e feitos para mobile já não são mais um diferencial, são obrigações."
                image={consumidor}
                objectfit="contain"
                width="70%"
                height="90%"
                transparent
            />
            <Feature
                overline="Saia na frente"
                title="Seus concorrentes estão ignorando o poder do SEM"
                text="Voltar seus esforços para o marketing em mecanismos de busca é uma vantagem, já que menos de 35% das empresas no estado de São Paulo recorrem a internet para divulgar seus produtos ou serviços. Essa é a hora de você sair na frente."
                ctaText="Solicite um orçamento"
                image={ppc}
                objectfit="contain"
                width="80%"
                height="90%"
                transparent
            />
            <Feature
                overline="Estatísticas precisas"
                title="Obtenha o melhor resultado com o machine learning"
                text="Mecanismos de busca como o Google sabem o perfil de quem está procurando e com seu aprendizado de máquina (machine learning) entrega o anúncio de sua empresa no momento perfeito."
                image={brain}
                objectfit="contain"
                width="70%"
                height="90%"
                transparent
            />
            <Feature
                overline="Auditoria de SEO"
                title="Eu posso te ajudar, hoje"
                text="Eu ofereço inteiramente grátis uma análise do seu site para saber como andam seus esforços de SEO. Você receberá um relatório completo do que precisa para melhorar desde conteúdo até a parte técnica."
                image={audit}
                ctaText="Solicite uma auditoria agora"
                ctaLink="/contato"
                objectfit="contain"
                width="70%"
                height="90%"
                transparent
            />

            <ServiceAbout />

            <HideContent>
                <Container>
                    <Grid container>
                        <Grid item lg={9}>
                            <Article content={PageData.descriptionNode.childMarkdownRemark.html} />
                        </Grid>
                        <Grid item lg={3}>
                            <Hidden lgDown>
                                <Box className="sticky">
                                    <TableOfContents />
                                </Box>
                            </Hidden>
                        </Grid>
                    </Grid>
                </Container>
            </HideContent>
        </>
    );
};

export default SearchEngineMarketing;
