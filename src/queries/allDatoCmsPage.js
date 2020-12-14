import { useStaticQuery, graphql } from 'gatsby';

const usePageData = () => {
    const {
        allDatoCmsPage: { nodes: AllPage },
    } = useStaticQuery(graphql`
        query {
            allDatoCmsPage {
                nodes {
                    id
                    slug
                    title
                    descriptionNode {
                        childMarkdownRemark {
                            html
                            headings {
                                value
                                depth
                            }
                        }
                    }
                    seoMetaTags {
                        ...GatsbyDatoCmsSeoMetaTags
                    }
                }
            }
        }
    `);
    return AllPage;
};

export const usePageBySlug = slug =>
    usePageData()
        .filter(page => page.slug === slug)
        .map(page => page)[0];

export default usePageData;
