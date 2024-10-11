import React from 'react';

import { Container, Grid, Box } from '@material-ui/core';
import PageHeader from '../../components/PageHeader';
import Feature from '../../components/Feature';

import { usePageBySlug } from '../../queries/allDatoCmsPage';
import { useSvgsByName } from '../../queries/allSvgs';

import SEO from '../../components/layout/SEO';
import Article from '../../components/article/Article';
import PromotionCard from '../../components/services/PromotionCard';
import ServiceAbout from '../../components/services/ServiceAbout';
import HideContent from '../../components/layout/HideContent';
import ServiceFaq from '../../components/services/ServiceFaq';

const IdentidadeVisual = () => {
    const PageData = usePageBySlug('identidade-visual');

    // svgs
    const escritorio = useSvgsByName('escritorio');
    const visibilidade = useSvgsByName('visibilidade');
    const identificacao = useSvgsByName('identificacao');
    const lealdade = useSvgsByName('lealdade');
    const maiorMelhor = useSvgsByName('maiorMelhor');
    const experienciaCompra = useSvgsByName('experienciaCompra');

    return (
        <>
            <SEO slug="identidade visual" />
            <PageHeader
                overline="Mais que logotipo"
                title="Criação de Identidade Visual para empresas que valorizam relacionamentos"
                text="Identidade visual é bem mais que um logotipo, é o conjunto de características que tornam seu negócio único."
            />

            <Feature
                overline="Conquiste seus clientes"
                title="Você precisa de uma identidade e não só um logotipo"
                text="Um logotipo é o coração da sua identidade visual. Um coração sozinho, sem suas veias e outros órgãos não consegue atingir o resultado esperado."
                image={escritorio}
                objectfit="contain"
                width="68%"
                ctaText="Solicite um orçamento"
                ctaLink="/contato"
                transparent
            />
            <Feature
                overline="Torne sua marca popular"
                title="Mais visibilidade da empresa e de seus produtos"
                text="Uma identidade visual contribui para aumentar o reconhecimento da marca, influenciando diretamente seu consumidor. Quem nunca definiu a qualidade de algo apenas pela embalagem?"
                image={visibilidade}
                objectfit="contain"
                width="70%"
                height="90%"
                transparent
            />
            <Feature
                overline="Seja mais consistente"
                title="Facilite a identificação da sua marca"
                text="Quanto mais e melhor visto, mais seu consumidor irá considerar experimentar seu produto, ainda mais se a marca corresponder positivamente em sua primeira impressão."
                image={identificacao}
                objectfit="contain"
                width="70%"
                height="90%"
                transparent
            />
            <Feature
                overline="Consumidores leais"
                title="Aumente a lealdade e confiança dos seus consumidores"
                text="Identidade que reflete os valores da marca, deixa o consumidor mais satisfeito por adquirir seus serviços levando-os a serem leais a sua marca em compras futuras."
                image={lealdade}
                objectfit="contain"
                width="90%"
                height="80%"
                transparent
            />
            <Feature
                overline="Seja reconhecido"
                title="Melhore a experiência de compra"
                text="Uma boa identidade visual torna a experiência da compra muito mais agradável. Quando uma empresa é facilmente reconhecida, sua marca se torna inconfundível em todos os níveis tornando a negociação muito mais confiável."
                image={experienciaCompra}
                objectfit="contain"
                width="70%"
                height="90%"
                transparent
            />
            <Feature
                overline="Seja grande"
                title="Uma ótima identidade te torna maior e melhor"
                text="Uma marca deve aparentar ser grande desde o início de sua criação. Dessa forma não apenas consumidores te respeitarão, mas funcionários e fornecedores. Dessa forma você cria uma atmosfera de parceiros abertos a sua missão."
                ctaText="Solicite um orçamento"
                image={maiorMelhor}
                objectfit="contain"
                width="65%"
                height="80%"
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

            <ServiceFaq faqSlug="identidade-visual" />
        </>
    );
};

export default IdentidadeVisual;
