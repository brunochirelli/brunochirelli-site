const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://brunochirelli.com.br",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: `Bruno Chirelli Freelancer`,
    description: `Designer Freelancer`,
    author: `@brunochirelli`,
    siteUrl,
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-gdpr-tracking",
    //   options: {
    //     debug: false,
    //     googleAnalytics: {
    //       // The property ID; the tracking code won't be generated without it.
    //       trackingId: "G-T40HQ90X4S",
    //       // Defines it google analytics should be started with out the cookie consent
    //       autoStart: false,
    //       // Setting this parameter is optional
    //       anonymize: true, // <--- default
    //       // Name of the cookie, that enables the tracking if it is true
    //       controlCookieName: "gdpr-analytics-enabled", // <--- default
    //       cookieFlags: "secure;samesite=none", // <--- default,
    //     },
    //     environments: ["production"], // default
    //   },
    // },
    `gatsby-plugin-image`,
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
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bruno-chirelli-freelancer`,
        short_name: `brunochirelli`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#8bc34a`,
        display: `minimal-ui`,
        icon: `src/images/brunochirelli-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "mxl3jpq",
        },
      },
    },
    `gatsby-plugin-top-layout`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {},
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        stages: ["develop"],
        extensions: ["js", "jsx", "tsx"],
        exclude: ["node_modules", ".cache", "public"],
        // Any eslint-webpack-plugin options below
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
