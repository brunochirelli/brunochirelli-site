import { useStaticQuery, graphql } from 'gatsby';

const useDatoCmsSettings = () => {
    const { datoCmsSite: allConfigs } = useStaticQuery(graphql`
        query {
            datoCmsSite {
                faviconMetaTags {
                    tags
                }
            }
        }
    `);
    return allConfigs;
};

export default useDatoCmsSettings;
