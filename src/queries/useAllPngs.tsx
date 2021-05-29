import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImageProps } from "gatsby-plugin-image";

type AllPngs = {
  allFile: {
    nodes: {
      base: string;
      childrenImageSharp: { gatsbyImageData: GatsbyImageProps }[];
    }[];
  };
};

const useAllPngs = (pngName: string) => {
  const allPngs: AllPngs = useStaticQuery(graphql`
    query AllPngs {
      allFile(filter: { base: { regex: "/png$/" } }) {
        nodes {
          base
          childrenImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  `);

  // return only gatsbyImageData object
  return allPngs.allFile.nodes.filter(png => png.base === pngName)[0]
    .childrenImageSharp[0].gatsbyImageData;
};

export default useAllPngs;
