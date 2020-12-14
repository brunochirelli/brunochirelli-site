import { useStaticQuery, graphql } from 'gatsby';

const useImages = () => {
    const {
        allFile: { nodes: AllImages },
    } = useStaticQuery(graphql`
        query {
            allFile(filter: { sourceInstanceName: { eq: "images" } }) {
                nodes {
                    publicURL
                    name
                    childImageSharp {
                        fluid(maxWidth: 1200, srcSetBreakpoints: [200, 600, 800]) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    `);
    return AllImages;
};

export default useImages;
