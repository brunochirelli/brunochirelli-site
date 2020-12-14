import { useStaticQuery, graphql } from 'gatsby';

const useSvgs = () => {
    const {
        allFile: { nodes: AllSvgs },
    } = useStaticQuery(graphql`
        query {
            allFile(filter: { sourceInstanceName: { eq: "svgs" } }) {
                nodes {
                    publicURL
                    name
                }
            }
        }
    `);
    return AllSvgs;
};

export const useSvgsByName = name => useSvgs().filter(svg => svg.name === name)[0].publicURL;

export default useSvgs;
