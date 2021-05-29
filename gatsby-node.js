/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog-template.tsx`);
  const portfolioTemplate = path.resolve(`src/templates/portfolio-template.tsx`);

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
              category
              type
              lead
              featuredImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
              images {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  // create pages for portfolio
  result.data.allMarkdownRemark.edges
    .filter(edge => edge.node.frontmatter.type === "portfolio")
    .forEach(edge => {
      createPage({
        path: `/portfolio/${edge.node.frontmatter.slug}`,
        component: portfolioTemplate,
        context: {
          title: edge.node.frontmatter.title,
          image: edge.node.frontmatter.images,
          category: edge.node.frontmatter.category,
          lead: edge.node.frontmatter.lead,
          slug: edge.node.frontmatter.slug,
          featuredImage: edge.node.frontmatter.featuredImage,
        },
      });
    });

  // create pages for blog
  // result.data.allMarkdownRemark.edges
  //   .filter(edge => edge.node.frontmatter.type === "post")
  //   .forEach(edge => {
  //     createPage({
  //       path: `/blog/${edge.node.frontmatter.slug}`,
  //       component: blogPostTemplate,
  //       context: {
  //         title: edge.node.frontmatter.title,
  //         images: edge.node.frontmatter.images,
  //       },
  //     });
  //   });
};
