require('dotenv').config();

const {
    NODE_ENV,
    URL: NETLIFY_SITE_URL = 'https://brunochirelli.com.br',
    DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
    CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
    siteMetadata: {
        title: `Bruno Chirelli`,
        siteUrl,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: { trackingIds: ['UA-53209416-3', 'AW-671921670'] },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `svgs`,
                path: `${__dirname}/src/svgs`,
            },
        },
        {
            resolve: `gatsby-plugin-hotjar`,
            options: {
                id: 1738335,
                sv: 6,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-table-of-contents`,
                        options: {
                            exclude: 'Table of Contents',
                            tight: false,
                            fromHeading: 1,
                            toHeading: 6,
                        },
                    },
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            offsetY: `100`,
                            icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
                            className: `toc`,
                            maintainCase: false,
                            removeAccents: true,
                            isIconAfterHeader: false,
                            elements: [`h2`],
                        },
                    },
                ],
            },
        },

        {
            resolve: `gatsby-source-datocms`,
            options: {
                apiToken: process.env.DATO_API_TOKEN,
            },
        },
        {
            resolve: `gatsby-remark-images-datocms`,
            options: {
                apiToken: process.env.DATO_API_TOKEN,
                maxWidth: 800,
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                resolveEnv: () => NETLIFY_ENV,
                env: {
                    production: {
                        policy: [{ userAgent: '*' }],
                    },
                    'branch-deploy': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null,
                    },
                    'deploy-preview': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null,
                    },
                },
            },
        },
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 0.15,
                once: true,
                disable: true,
            },
        },
        `gatsby-plugin-smoothscroll`,
        {
            resolve: `gatsby-theme-material-ui`,
            options: {
                webFontsConfig: {
                    fonts: {
                        google: [
                            {
                                family: `Montserrat`,
                                variants: [`500`, `700`],
                            },
                        ],
                    },
                },
            },
        },
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true,
                },
            },
        },
        `gatsby-plugin-styled-components`,
    ],
};
