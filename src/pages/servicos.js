import React from 'react';

import PageHeader from '../components/PageHeader';

import SEO from '../components/layout/SEO';
import HomeServices from '../components/home/HomeServices';

const servicos = () => (
    <>
        <SEO slug="servicos" />
        <PageHeader
            overline="Search Engine Marketing"
            title="Projetos customizados de baixo custo que te ajudam a vencer no Google"
            text="Todo esforço de marketing digital começa com o foco em mecanismos de busca como o Google. Por que? Porque é aqui que você tem o maior retorno sob investimento (ROI)."
        />
        <HomeServices />
    </>
);

export default servicos;
