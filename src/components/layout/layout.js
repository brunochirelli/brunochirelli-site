import React from 'react';
import styled from 'styled-components';

import { HelmetDatoCms } from 'gatsby-source-datocms';

import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import ScrollTop from './ScrollTop';

import allDatoCmsConfig from '../../queries/allDatoCmsConfig';

const Layout = ({ children }) => {
    const settings = allDatoCmsConfig();

    return (
        <>
            <HelmetDatoCms favicon={settings.faviconMetaTags} />
            <Helmet>
                <html lang="pt-BR" />
            </Helmet>
            <Header />
            <ScrollTop />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
