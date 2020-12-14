import React from 'react';
import BlogFeed from '../components/blog/BlogFeed';

import PageHeader from '../components/PageHeader';
import SEO from '../components/layout/SEO';

const blog = () => (
    <>
        <SEO slug="blog" />
        <PageHeader
            title="Blog"
            text="Aqui você pode obter informações relacionadas a Search Engine Marketing e saber um pouco mais como penso sobre diversos assuntos"
            noCta
            center
        />
        <BlogFeed />
    </>
);

export default blog;
