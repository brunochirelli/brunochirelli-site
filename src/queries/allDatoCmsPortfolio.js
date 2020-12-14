import { useStaticQuery, graphql } from 'gatsby';

const usePortfolioData = () => {
    const {
        allDatoCmsPortfolio: { edges: AllPortfolio },
    } = useStaticQuery(graphql`
        query {
            allDatoCmsPortfolio {
                edges {
                    node {
                        slug
                        project
                        year
                        id
                        cover {
                            fluid(maxWidth: 600, imgixParams: { auto: "compress" }) {
                                ...GatsbyDatoCmsFluid
                            }
                        }
                        mockups {
                            fluid(maxWidth: 1000, imgixParams: { auto: "compress" }) {
                                ...GatsbyDatoCmsFluid
                            }
                        }
                        seoMetaTags {
                            ...GatsbyDatoCmsSeoMetaTags
                        }
                    }
                    next {
                        slug
                        project
                    }
                    previous {
                        slug
                        project
                    }
                }
            }
        }
    `);
    return AllPortfolio;
};

export default usePortfolioData;
