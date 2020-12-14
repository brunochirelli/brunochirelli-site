import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';

import allDatoCmsPage from '../../queries/allDatoCmsPage';

const SEO = ({ slug, children }) => {
    const pageSeo = allDatoCmsPage();

    return (
        <>
            {pageSeo
                .filter(page => page.slug === slug)
                .map(page => (
                    <HelmetDatoCms seo={page.seoMetaTags} key={page.id} />
                ))}
            {children}
        </>
    );
};

export default SEO;
