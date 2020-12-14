import React from 'react';

import HomeBanner from '../components/home/HomeBanner';

import HomeInfos from '../components/home/HomeInfos';
import HomeServices from '../components/home/HomeServices';
import SEO from '../components/layout/SEO';

const IndexPage = () => (
    <>
        <SEO slug="home" />
        <HomeBanner />
        <HomeInfos />
        <HomeServices />
    </>
);

export default IndexPage;
