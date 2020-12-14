import { useStaticQuery, graphql } from 'gatsby';

const useArticlesData = () => {
    const {
        allDatoCmsArticle: { nodes: AllArticles },
    } = useStaticQuery(graphql`
        query {
            allDatoCmsArticle(sort: { order: DESC, fields: meta___createdAt }) {
                nodes {
                    id
                    title
                    slug
                    contentNode {
                        childMarkdownRemark {
                            html
                            excerpt
                            timeToRead
                        }
                    }
                    thumbnail {
                        fixed(height: 500, imgixParams: { auto: "compress" }) {
                            ...GatsbyDatoCmsFixed
                        }
                        fluid(maxWidth: 800, imgixParams: { auto: "compress" }) {
                            ...GatsbyDatoCmsFluid
                        }
                    }

                    seoMetaTags {
                        ...GatsbyDatoCmsSeoMetaTags
                    }
                }
            }
        }
    `);
    return AllArticles;
};

export default useArticlesData;
