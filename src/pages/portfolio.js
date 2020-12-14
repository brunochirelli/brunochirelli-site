import React from 'react';

import PortfolioFeed from '../components/portfolio/PortfolioFeed';
import SEO from '../components/layout/SEO';
import PageHeader from '../components/PageHeader';

const portfolio = () => (
    <>
        <SEO slug="portfolio" />
        <PageHeader title="Portfólio" text="Projetos relacionados com desenvolvimento de marcas e criação de sites." />
        <PortfolioFeed />
    </>
);

export default portfolio;
