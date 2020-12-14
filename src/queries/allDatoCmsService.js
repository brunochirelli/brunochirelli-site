import { useStaticQuery, graphql } from 'gatsby';

const useServicesData = () => {
    const {
        allDatoCmsService: { nodes: AllServices },
    } = useStaticQuery(graphql`
        query {
            allDatoCmsService {
                nodes {
                    slug
                    faq {
                        question
                        answerNode {
                            childMarkdownRemark {
                                html
                            }
                        }
                    }
                }
            }
        }
    `);
    return AllServices;
};

export default useServicesData;
