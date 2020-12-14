const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allDatoCmsArticle {
                nodes {
                    title
                    slug
                    contentNode {
                        childMarkdownRemark {
                            headings {
                                value
                            }
                            tableOfContents(pathToSlugField: "frontmatter.title", absolute: true, maxDepth: 3)
                            frontmatter {
                                title
                            }
                            html
                            rawMarkdownBody
                        }
                    }
                    thumbnail {
                        url
                        alt
                    }
                    id
                }
            }
            allDatoCmsPortfolio {
                edges {
                    node {
                        slug
                        project
                        year
                        service
                        id
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

    if (result.errors) {
        throw new Error(result.errors);
    }

    const { allDatoCmsArticle, allDatoCmsPortfolio } = result.data;

    const pageTemplate = path.resolve(`./src/templates/article.js`);

    allDatoCmsArticle.nodes.forEach(node => {
        createPage({
            path: `/blog/${node.slug}`,
            component: slash(pageTemplate),
            context: {
                content: node.contentNode.childMarkdownRemark.html,
                title: node.title,
                slug: node.slug,
                thumbnail: node.thumbnail.url,
                alt: node.thumbnail.alt,
                id: node.id,
                markdown: node.contentNode.childMarkdownRemark.rawMarkdownBody,
                toc: node.contentNode.childMarkdownRemark.tableOfContents,
            },
        });
    });

    const postTemplate = path.resolve(`./src/templates/portfolio.js`);

    allDatoCmsPortfolio.edges.forEach(edge => {
        createPage({
            path: `/portfolio/${edge.node.slug}`,
            component: slash(postTemplate),
            context: {
                slug: edge.node.slug,
                project: edge.node.project,
                year: edge.node.year,
                service: edge.node.service,
                id: edge.node.id,
                next: edge.next,
                previous: edge.previous,
            },
        });
    });
};
