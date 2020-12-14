import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';

import allDatoCmsPortfolio from '../queries/allDatoCmsPortfolio';

import PortfolioHeader from '../components/portfolio/PortfolioHeader';
import PortfolioShowCase from '../components/portfolio/PortfolioShowCase';
import PortfolioNavigation from '../components/portfolio/PortfolioNavigation';

const Portfolio = ({ pageContext }) => {
    const allPortfolio = allDatoCmsPortfolio();

    return (
        <>
            {allPortfolio
                .filter(data => data.node.slug === pageContext.slug)
                .map(data => (
                    <HelmetDatoCms seo={data.node.seoMetaTags} key={`seo${data.id}`} />
                ))}
            <PortfolioHeader project={pageContext.project} year={pageContext.year} service={pageContext.service} />
            {allPortfolio
                .filter(portfolio => portfolio.node.slug === pageContext.slug)
                .map((portfolio, i) => (
                    <PortfolioShowCase images={portfolio.node.mockups} key={`port-${i}`} />
                ))}
            <PortfolioNavigation next={pageContext.next} previous={pageContext.previous} />
        </>
    );
};

export default Portfolio;
